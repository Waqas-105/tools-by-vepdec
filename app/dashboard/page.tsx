import { getSession } from "@/app/lib/auth"
import { Sidebar } from "@/app/components/sidebar"
import { ReportForm } from "@/app/components/report-form"
import { ReportList } from "@/app/components/report-list"
import { Clock } from "@/app/components/clock"

export default async function Dashboard() {
  const session = await getSession()

  if (!session) {
    return null // This should be handled by middleware, but just in case
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-black text-white">
      <Sidebar username={session.username} role={session.role} />
      <div className="pl-64">
        <div className="container mx-auto py-8 px-6">
          <div className="mb-8">
            <Clock />
          </div>
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 p-6">
              <ReportForm />
            </div>
            <ReportList />
          </div>
        </div>
      </div>
    </div>
  )
}

