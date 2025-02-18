"use client"

import { useState } from "react"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Textarea } from "@/app/components/ui/textarea"
import { toast } from "sonner"

export function FakeEmailSender() {
  const [fromEmail, setFromEmail] = useState("")
  const [toEmail, setToEmail] = useState("vulnerabilitytesting11@gmail.com")
  const [subject, setSubject] = useState("Verify Your Account Details")
  const [message, setMessage] = useState(`Dear Customer,

We have detected unusual activity on your account. To ensure your account's security and functionality, we kindly request that you verify your information at the earliest.

Please provide the necessary details to ensure there is no disruption to your service.

Next Steps:
- Click the secure verification link in the email.
- Follow the prompts to validate your account information.
- Contact support if you encounter any issues.

Thank you for your prompt attention to this matter.

Best regards,
Support Team`)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/send-fake-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fromEmail, toEmail, subject, message }),
      })

      if (response.ok) {
        toast.success("Email sent successfully!")
      } else {
        const errorData = await response.json()
        toast.error(errorData.error || "Error sending email.")
      }
    } catch (error) {
      toast.error("An unexpected error occurred.")
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-3xl text-center font-bold mb-4">Fake Email Sender</h2>
      <p className="text-center text-white/70 text-lg mt-[-15px] mb-[12px]">Test email delivery and analyze DMARC compliance with ease.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="from_email" className="block text-sm font-medium text-gray-400">
            From Email
          </label>
          <Input
            type="email"
            id="from_email"
            value={fromEmail}
            onChange={(e) => setFromEmail(e.target.value)}
            required
            className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
          />
        </div>

        <div>
          <label htmlFor="to_email" className="block text-sm font-medium text-gray-400">
            To Email
          </label>
          <Input
            type="email"
            id="to_email"
            value={toEmail}
            onChange={(e) => setToEmail(e.target.value)}
            className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-400">
            Subject
          </label>
          <Input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-400">
            Message
          </label>
          <Textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="h-40 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
          />
        </div>

        <div className="flex gap-2 justify-end">
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
            Send Email
          </Button>
        </div>
      </form>
    </div>
  )
}

