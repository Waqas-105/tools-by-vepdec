"use client"

import { useEffect, useState } from "react"
import { Copy, Edit, Trash2 } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import { toast } from "sonner"
import type { Report } from "@/app/types/report"

export function ReportList() {
  const [reports, setReports] = useState<Report[]>([])

  useEffect(() => {
    const loadReports = () => {
      const storedReports = JSON.parse(localStorage.getItem("reports") || "[]")
      setReports(storedReports)
    }

    loadReports()
    window.addEventListener("storage", loadReports)
    return () => window.removeEventListener("storage", loadReports)
  }, [])

  const copyReportsToClipboard = () => {
    const headers = ["S.No", "Date", "Website", "Bug", "Email/Link"].join("\t")
    const reportData = reports
      .map((report, index) =>
        [index + 1, new Date(report.date).toLocaleDateString(), report.website, report.type, report.vulnerable].join("\t"),
      )
      .join("\n")

    const fullData = `${headers}\n${reportData}`

    navigator.clipboard
      .writeText(fullData)
      .then(() => toast.success("Reports copied to clipboard"))
      .catch(() => toast.error("Failed to copy reports"))
  }

  const clearReports = () => {
    localStorage.setItem("reports", "[]")
    setReports([])
    toast.success("All reports cleared")
  }

  const editReport = (report: Report) => {
    // Implement edit functionality here
    console.log("Editing report:", report)
    toast.info("Edit functionality not implemented yet")
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Reports</h2>
        <Button
          variant="outline"
          size="sm"
          className="border-white/10 text-white bg-blue-600 hover:bg-blue-700"
          onClick={copyReportsToClipboard}
        >
          <Copy className="h-4 w-4 mr-2" />
          Copy Reports
        </Button>
      </div>

      <div className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-4 text-gray-400 font-medium">S.No</th>
                <th className="text-left p-4 text-gray-400 font-medium">Date</th>
                <th className="text-left p-4 text-gray-400 font-medium">Website</th>
                <th className="text-left p-4 text-gray-400 font-medium">Bug</th>
                <th className="text-left p-4 text-gray-400 font-medium">Email/Link</th>
                <th className="text-left p-4 text-gray-400 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report, index) => (
                <tr key={report.id} className="border-b border-white/10 last:border-0">
                  <td className="p-4 text-white">{index + 1}</td>
                  <td className="p-4 text-white">{new Date(report.date).toLocaleDateString()}</td>
                  <td className="p-4 text-white">{report.website}</td>
                  <td className="p-4 text-white">{report.type}</td>
                  <td className="p-4 text-white">{report.vulnerable}</td>
                  <td className="p-4 text-white">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => editReport(report)}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-end">
        <Button
          variant="destructive"
          size="sm"
          className="bg-red-600 hover:bg-red-700 text-white"
          onClick={clearReports}
        >
          <Trash2 className="h-4 w-4 mr-2" />
          Clear Reports
        </Button>
      </div>
    </div>
  )
}

