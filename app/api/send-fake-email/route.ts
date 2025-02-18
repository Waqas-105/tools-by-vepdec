import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  const { fromEmail, toEmail, subject, message } = await req.json()

  if (!fromEmail || !toEmail || !subject || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
  }

  // Create a nodemailer transporter using vepdec.com mail server
  const transporter = nodemailer.createTransport({
    host: "mail.vepdec.com", // Your domain's mail server
    port: 587,
    secure: false, // Use TLS
    auth: {
      user: process.env.EMAIL_USER, // Your vepdec.com email address
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false, // Only use this in development
    },
  })

  try {
    // Send the email
    await transporter.sendMail({
      from: `${fromEmail} <noreply@vepdec.com>`, // Use your domain's email as envelope sender
      to: toEmail,
      subject: subject,
      text: message,
      headers: {
        "X-Mailer": "VepDec Security Testing Tool",
        Organization: "VepDec",
        "X-Priority": "3",
      },
    })

    return NextResponse.json({ message: "Email sent successfully" })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Error sending email" }, { status: 500 })
  }
}

