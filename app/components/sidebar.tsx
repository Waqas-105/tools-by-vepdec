// "use client"
// import Link from "next/link"
// import { LayoutDashboard, Shield, Mail, LogOut } from "lucide-react"

// import { logout } from "@/app/lib/auth"
// import { Button } from "@/app/components/ui/button"
// import { useRouter } from "next/navigation"

// interface SidebarProps {
//   username: string
//   role: string
// }

// export function Sidebar({ username, role }: SidebarProps) {
//   const router = useRouter()

//   const handleLogout = async (e: React.FormEvent) => {
//     e.preventDefault()

//     // Perform the logout action
//     await logout()

//     // Redirect to login page after logout
//     router.push("/login")
//   }

//   return (
//     <div className="fixed left-0 top-0 h-full w-64 bg-black/30 backdrop-blur-xl border-r border-white/10 p-6 flex flex-col">
//       <div className="text-3xl font-bold text-white mb-12">VepDec</div>

//       <nav className="space-y-4 flex-1">
//         <Link
//           href="/dashboard"
//           className="flex items-center gap-3 text-gray-300 hover:text-white px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
//         >
//           <LayoutDashboard size={20} />
//           Dashboard
//         </Link>
//         <Link
//           href="/clickjacking"
//           className="flex items-center gap-3 text-gray-300 hover:text-white px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
//         >
//           <Shield size={20} />
//           Clickjacking
//         </Link>
//         <Link
//           href="mailer"
//           className="flex items-center gap-3 text-gray-300 hover:text-white px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
//         >
//           <Mail size={20} />
//           Fake Mailer
//         </Link>
//       </nav>

//       <div className="border-t border-white/10 pt-6">
//         <div className="flex items-center gap-3 px-4 mb-4">
//           <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center text-white font-bold">
//             {username && username[0] ? username[0].toUpperCase() : "U"}
//           </div>
//           <div>
//             <div className="text-sm font-medium text-white">{username}</div>
//             <div className="text-xs text-gray-400">{role}</div>
//           </div>
//         </div>
//         <form onSubmit={handleLogout}>
//           <Button
//             type="submit"
//             variant="ghost"
//             className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-400/10"
//           >
//             <LogOut size={20} className="mr-2" />
//             Logout
//           </Button>
//         </form>
//       </div>
//     </div>
//   )
// }


"use client"
import Link from "next/link"
import { LayoutDashboard, Shield, Mail, LogOut } from "lucide-react"
import { logout } from "@/app/lib/auth"
import { Button } from "@/app/components/ui/button"
import { useRouter } from "next/navigation"

interface SidebarProps {
  username: string
  role: string
}

export function Sidebar({ username, role }: SidebarProps) {
  const router = useRouter()

  const handleLogout = async (e: React.FormEvent) => {
    e.preventDefault()

    // Perform the logout action
    await logout()

    // Redirect to login page after logout
    router.push("/login")
  }

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-black/30 backdrop-blur-xl border-r border-white/10 p-6 flex flex-col">
      {/* Logo */}
      <div className="mb-12 flex justify-center text-3xl font-bold text-white">
        <img 
          src="/logo-nobg-white.png" 
          alt="VepDec Logo" 
          className="h-[50px] rounded-xl mt-[-6.5px]" 
        />
      VepDec</div>

      <nav className="space-y-4 flex-1">
        <Link
          href="/dashboard"
          className="flex items-center gap-3 text-gray-300 hover:text-white px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>
        <Link
          href="/clickjacking"
          className="flex items-center gap-3 text-gray-300 hover:text-white px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
        >
          <Shield size={20} />
          Clickjacking
        </Link>
        <Link
          href="/mailer"
          className="flex items-center gap-3 text-gray-300 hover:text-white px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
        >
          <Mail size={20} />
          Fake Mailer
        </Link>
      </nav>

      <div className="border-t border-white/10 pt-6">
        <div className="flex items-center gap-3 px-4 mb-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center text-white font-bold">
            {username && username[0] ? username[0].toUpperCase() : "U"}
          </div>
          <div>
            <div className="text-sm font-medium text-white">{username}</div>
            <div className="text-xs text-gray-400">{role}</div>
          </div>
        </div>
        <form onSubmit={handleLogout}>
          <Button
            type="submit"
            variant="ghost"
            className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-400/10"
          >
            <LogOut size={20} className="mr-2" />
            Logout
          </Button>
        </form>
      </div>
    </div>
  )
}
