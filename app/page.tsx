// import { redirect } from "next/navigation"

// export default function Home() {
//   redirect("/login")
// }

"use client"

import { useActionState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { login } from "@/app/lib/auth"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { useEffect, useState } from "react"
import type React from "react"
import type { UserRole } from "@/app/types/user"

type LoginState = {
  error?: string
  success?: boolean
  user?: {
    id: string
    username: string
    useremail: string
    role: UserRole
    isActive: boolean
  }
}

const initialState: LoginState = {}

export default function LoginPage() {
  const [state, formAction] = useActionState<LoginState, FormData>(async (_, formData) => {
    const result = await login(_, formData)
    return result as LoginState
  }, initialState)
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  useEffect(() => {
    if (state.success && state.user) {
      switch (state.user.role) {
        case "CEO":
          router.push("/admin")
          break
        case "Security Researcher":
          router.push("/dashboard")
          break
        case "Email Marketing Specialist":
          router.push("/dashboard")
          break
        case "Developer":
          router.push("/dashboard")
          break
        default:
          router.push("/dashboard")
      }
    }
  }, [state, router])

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }

  const handleRememberMe = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(e.target.checked)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-black flex items-center justify-center p-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
        <div className="bg-white/5 backdrop-blur-xl rounded-lg border border-white/10 p-8">
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center"
            >
              <div>
                <img
                  src="/logo-nobg-white.png"
                  alt="VepDec Logo"
                  className="h-18 w-auto rounded-xl flex items-between justify-center mt-1 "
                />
              </div>
            </motion.div>
            <h1 className="text-2xl font-bold text-white">Welcome to VepDec</h1>
            <p className="text-gray-400 mt-2">Sign in to continue</p>
          </div>

          <form action={formAction} className="space-y-6">
            <div>
              <Input
                name="username"
                placeholder="Username"
                required
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
              />
            </div>
            <div className="relative">
              <Input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 pr-12"
              />
              <button
                type="button"
                onClick={handleTogglePassword}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white transition-all"
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 animate-pulse"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12l-3-3m0 0l-3 3m3-3v6M5.5 5.5a7.5 7.5 0 1110.6 10.6"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 animate-pulse"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.841 5 12 5c4.159 0 8.268 2.943 9.542 7-1.274 4.057-5.383 7-9.542 7-4.159 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>
            {state.error && <p className="text-red-500 text-sm">{state.error}</p>}

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={handleRememberMe}
                className="h-5 w-5 text-emerald-400 border-white/10 rounded focus:ring-emerald-500"
              />
              <label htmlFor="rememberMe" className="text-sm text-white">
                Remember Me
              </label>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-400 to-blue-500 hover:from-emerald-500 hover:to-blue-600 text-white"
            >
              Sign In
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  )
}

