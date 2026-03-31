'use client'

import { Sidebar } from './Sidebar'
import { TopNav } from './TopNav'
import { Toaster } from '@/components/ui/toaster'

interface PortalLayoutProps {
  children: React.ReactNode
}

export function PortalLayout({ children }: PortalLayoutProps) {
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <TopNav />

        {/* Page Content */}
        <main className="flex-1 overflow-auto bg-white">
          {children}
        </main>
      </div>
      <Toaster />
    </div>
  )
}
