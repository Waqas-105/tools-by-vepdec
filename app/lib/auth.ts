"use server"

import { cookies } from "next/headers"
import { SignJWT, jwtVerify } from "jose"
import { users } from "@/app/data/users"

const secret = new TextEncoder().encode(process.env.JWT_SECRET || "your-secret-key")

export async function login(prevState: any, formData: FormData) {
  const username = formData.get("username")
  const password = formData.get("password")

  // Ensure username and password are strings
  if (typeof username !== "string" || typeof password !== "string") {
    return { error: "Invalid input" }
  }

  const user = users.find((u) => u.username === username && u.password === password)

  if (!user) {
    return { error: "Invalid credentials" }
  }

  const token = await new SignJWT({
    id: user.id,
    username: user.username,
    role: user.role,
    useremail: user.useremail,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("1h")
    .sign(secret)

  const cookieStore = await cookies()
  cookieStore.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 3600, // 1 hour
  })

  return {
    success: true,
    user: {
      id: user.id,
      username: user.username,
      role: user.role,
      useremail: user.useremail,
    },
  }
}

export async function logout() {
  const cookieStore = await cookies()
  cookieStore.delete("token")
}

export async function getSession() {
  const cookieStore = await cookies()
  const token = cookieStore.get("token")

  if (!token) {
    return null
  }

  try {
    const verified = await jwtVerify(token.value, secret)
    return verified.payload as { id: string; username: string; role: string; useremail: string }
  } catch {
    return null
  }
}

