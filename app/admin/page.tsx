import { getSession } from "@/app/lib/auth"
import { Sidebar } from "@/app/components/sidebar"
import { AdminPanel } from "@/app/components/admin-panel"
import { Clock } from "@/app/components/clock"

export default async function AdminDashboard() {
  const session = await getSession()

  if (!session || session.role !== "CEO") {
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
          <AdminPanel />
        </div>
      </div>
    </div>
  )
}

