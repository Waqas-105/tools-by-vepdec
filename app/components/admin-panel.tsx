"use client"

import { useState, useEffect } from "react"
import type { User, UserActivity } from "@/app/types/user"
import type { Report } from "@/app/types/report"
import { Button } from "@/app/components/ui/button"
import { toast } from "sonner"

export function AdminPanel() {
  const [users, setUsers] = useState<User[]>([])
  const [activities, setActivities] = useState<UserActivity[]>([])
  const [reports, setReports] = useState<Report[]>([])

  useEffect(() => {
    // Fetch users and activities
    // This is a placeholder. In a real app, you'd fetch from your API
    setUsers([
      {  
        id: "2", 
        username: "waqas", 
        useremail: "waqas@vepdec.com", 
        role: "Security Researcher", 
        isActive: true, 
        password: "m.waqas78678699@gmail.com" },
      {
        id: "3",
        username: "talha",
        useremail: "talha@vepdec.com",
        role: "Email Marketing Specialist",
        isActive: false,
        password: "nH3#y$L2K9fTg@b8",
      },
      // ... more users
    ])

    setActivities([
      { id: "1", userId: "1", action: "LOGIN", timestamp: new Date().toISOString() },
      { id: "2", userId: "2", action: "REPORT_CREATED", timestamp: new Date().toISOString() },
      // ... more activities
    ])

    // Fetch reports from localStorage
    const storedReports = JSON.parse(localStorage.getItem("reports") || "[]")
    setReports(storedReports)
  }, [])
  // Email: ${report.email} add this below
  const handleCopyReport = (report: Report) => {
    const reportText = `
      Date: ${new Date(report.date).toLocaleString()}
      Website: ${report.website}
      Email: ${report.vulnerable}
      Type: ${report.type}
      Subject: ${report.subject}
      Message: ${report.message}
      Reported by: ${report.username}
    `
    navigator.clipboard.writeText(reportText)
    toast.success("Report copied to clipboard")
  }

  return (
    <div className="space-y-8">
      <div className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 p-6">
        <h2 className="text-2xl font-bold mb-4">User Management</h2>
        <table className="w-full">
          <thead>
            <tr className="text-left">
              <th className="p-2">Username</th>
              <th className="p-2">Email</th>
              <th className="p-2">Role</th>
              <th className="p-2">Status</th>
              <th className="p-2">Password</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="p-2">{user.username}</td>
                <td className="p-2">{user.useremail}</td>
                <td className="p-2">{user.role}</td>
                <td className="p-2">{user.isActive ? "Active" : "Inactive"}</td>
                <td className="p-2">{user.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 p-6">
        <h2 className="text-2xl font-bold mb-4">User Activity</h2>
        <table className="w-full">
          <thead>
            <tr className="text-left">
              <th className="p-2">User</th>
              <th className="p-2">Action</th>
              <th className="p-2">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity) => (
              <tr key={activity.id}>
                <td className="p-2">{users.find((u) => u.id === activity.userId)?.username}</td>
                <td className="p-2">{activity.action}</td>
                <td className="p-2">{new Date(activity.timestamp).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 p-6">
        <h2 className="text-2xl font-bold mb-4">Reports</h2>
        <table className="w-full">
          <thead>
            <tr className="text-left">
              <th className="p-2">Date</th>
              <th className="p-2">Website</th>
              <th className="p-2">Type</th>
              <th className="p-2">Reported By</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id}>
                <td className="p-2">{new Date(report.date).toLocaleString()}</td>
                <td className="p-2">{report.website}</td>
                <td className="p-2">{report.type}</td>
                <td className="p-2">{report.username}</td>
                <td className="p-2">
                  <Button onClick={() => handleCopyReport(report)} variant="outline" size="sm" className="text-xs">
                    Copy
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

