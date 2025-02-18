"use client"

import { useState, useEffect } from "react"
import { Search, Copy, Send } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Textarea } from "@/app/components/ui/textarea"
import { toast } from "sonner"
import { checkDuplicate, generateId, getReportTemplate } from "@/app/lib/utils"
import type { Report, ReportType } from "@/app/types/report"
import { getSession } from "@/app/lib/auth"

export function ReportForm() {
  const [session, setSession] = useState<{ username: string; role: string } | null>(null)
  const [website, setWebsite] = useState("")
  const [vulnerable, setVulnerable] = useState("")
  const [subject, setSubject] = useState("Security Vulnerability Detected on your website")
  const [message, setMessage] = useState("")
  const [isChecking, setIsChecking] = useState(false)
  const [isWebsiteValid, setIsWebsiteValid] = useState(false)
  const [selectedType, setSelectedType] = useState<ReportType | null>(null)

  useEffect(() => {
    const fetchSession = async () => {
      const sessionData = await getSession()
      if (sessionData) {
        setSession({ username: sessionData.username, role: sessionData.role })
      }
    }
    fetchSession()
  }, [])

  const handleSearch = async () => {
    if (!website) return

    setIsChecking(true)
    try {
      const isDuplicate = await checkDuplicate(website)
      if (isDuplicate) {
        toast.error("This website has already been reported")
        setIsWebsiteValid(false)
      } else {
        toast.success("Website is valid for reporting")
        setIsWebsiteValid(true)
      }
    } catch (error) {
      toast.error("Error checking website")
    } finally {
      setIsChecking(false)
    }
  }

  const generateReport = (type: ReportType) => {
    if (!isWebsiteValid || !vulnerable || !session) {
      toast.error("Please fill in required fields, verify website, and ensure you're logged in")
      return
    }

    setSelectedType(type)
    const template = getReportTemplate(type, website, vulnerable, session)
    setMessage(template)
  }

  const handleCopy = () => {
    if (!message) return
    navigator.clipboard.writeText(message)
    toast.success("Report copied to clipboard")
  }

  const handleSend = () => {
    if (!message || !website || !vulnerable || !selectedType || !session) {
      toast.error("Please fill in all required fields and ensure you're logged in")
      return
    }

    const report: Report = {
      id: generateId(),
      date: new Date().toISOString(),
      website,
      vulnerable,
      type: selectedType,
      subject: subject,
      message,
      username: session.username,
      session: {
        username: session.username,
        role: session.role,
      },
    }

    const reports = JSON.parse(localStorage.getItem("reports") || "[]")
    localStorage.setItem("reports", JSON.stringify([report, ...reports]))

    // Trigger storage event for report list update
    window.dispatchEvent(new Event("storage"))

    toast.success("Report sent successfully")

    // Reset form
    setWebsite("")
    setVulnerable("")
    setSubject("Security Vulnerability Detected on your website")
    setMessage("")
    setIsWebsiteValid(false)
    setSelectedType(null)
  }

  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <Input
          placeholder="Enter Website Link"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
        />
        <Button
          variant="secondary"
          onClick={handleSearch}
          disabled={isChecking}
          className="bg-white/5 hover:bg-white/10 text-white"
        >
          <Search className="h-4 w-4" />
        </Button>
      </div>

      <Input
        placeholder="Enter Vulnerable URL Or Email Address"
        value={vulnerable}
        onChange={(e) => setVulnerable(e.target.value)}
        className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
      />

      <div className="flex gap-4">
        <Input
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="flex-grow bg-white/5 border-white/10 text-white placeholder:text-gray-400"
        />
        <Button
          variant="ghost"
          onClick={() => {
            navigator.clipboard.writeText(subject)
            toast.success("Subject copied to clipboard")
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          <Copy className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex gap-2">
        <Button
          variant="secondary"
          onClick={() => generateReport("clickjacking")}
          disabled={!isWebsiteValid || !session}
          className={`flex-1 ${selectedType === "clickjacking" ? "bg-blue-600" : "bg-white/10"} hover:bg-blue-700 text-white`}
        >
          Click Jacking
        </Button>
        <Button
          variant="secondary"
          onClick={() => generateReport("dmarc-red")}
          disabled={!isWebsiteValid || !session}
          className={`flex-1 ${selectedType === "dmarc-red" ? "bg-red-600" : "bg-white/10"} hover:bg-red-700 text-white`}
        >
          DMARC RED
        </Button>
        <Button
          variant="secondary"
          onClick={() => generateReport("dmarc-yellow")}
          disabled={!isWebsiteValid || !session}
          className={`flex-1 ${selectedType === "dmarc-yellow" ? "bg-yellow-600" : "bg-white/10"} hover:bg-yellow-700 text-white`}
        >
          DMARC YELLOW
        </Button>
        <Button
          variant="secondary"
          onClick={() => generateReport("tls")}
          disabled={!isWebsiteValid || !session}
          className={`flex-1 ${selectedType === "tls" ? "bg-blue-600" : "bg-white/10"} hover:bg-blue-700 text-white`}
        >
          TLS
        </Button>
        <Button
          variant="secondary"
          onClick={() => generateReport("ticket")}
          disabled={!isWebsiteValid || !session}
          className={`flex-1 ${selectedType === "ticket" ? "bg-purple-600" : "bg-white/10"} hover:bg-purple-700 text-white`}
        >
          Ticket
        </Button>
      </div>

      <Textarea
        placeholder="Click On the Found Vulnerability Button And Report Will Be Displayed Here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="min-h-[200px] bg-white/5 border-white/10 text-white placeholder:text-gray-400"
      />

      <div className="flex gap-2">
        <Button
          variant="ghost"
          onClick={handleCopy}
          disabled={!message}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
        >
          <Copy className="h-4 w-4 mr-2" />
          Copy
        </Button>
        <Button
          variant="ghost"
          onClick={handleSend}
          disabled={!message || !session}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
        >
          <Send className="h-4 w-4 mr-2" />
          Send Report
        </Button>
      </div>
    </div>
  )
}

