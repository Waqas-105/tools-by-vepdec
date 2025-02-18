import { getSession } from "@/app/lib/auth"
import { Sidebar } from "@/app/components/sidebar"
import { Clock } from "@/app/components/clock"
import { ClickjackingTool } from "@/app/components/clickjacking-tool"

export default async function ClickjackingToolPage() {
  const session = await getSession()

  if (!session) {
    return null 
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
              <h2 className="text-3xl text-center font-bold mb-4">Clickjacking Tool</h2>
              <p className=" text-center text-white/70 text-lg mt-[-15px] mb-[12px]">Test your site’s vulnerability to clickjacking with a seamless experience.</p>
              <ClickjackingTool />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
