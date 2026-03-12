import { redirect } from "next/navigation"
import Link from "next/link"
import { LayoutDashboard, FolderOpen, FileText, MessageSquare } from "lucide-react"
import { auth } from "@/auth"
import { AdminNav } from "./admin-nav"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  if (!session?.user) {
    redirect("/auth/signin")
  }

  const adminEmail = process.env.ADMIN_EMAIL
  const userEmail = session.user.email

  if (!adminEmail || userEmail !== adminEmail) {
    return (
      <div className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <p className="font-serif italic text-5xl text-gray-300 dark:text-gray-700">403</p>
          <h1 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
            Access Denied
          </h1>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            You do not have permission to access the admin panel.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white underline"
          >
            Go home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-56 shrink-0 border-r border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 flex flex-col">
        <div className="px-5 py-6 border-b border-gray-100 dark:border-gray-800">
          <Link href="/admin" className="font-serif italic text-xl text-gray-900 dark:text-white">
            Admin
          </Link>
        </div>
        <AdminNav />
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto bg-gray-50 dark:bg-gray-950 p-8">
        {children}
      </main>
    </div>
  )
}
