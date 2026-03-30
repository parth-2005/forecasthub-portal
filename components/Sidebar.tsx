'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BarChart3, Grid3x3, Lock, Bookmark, Radio, LogOut } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Sidebar() {
  const pathname = usePathname()

  const navItems = [
    {
      href: '/dashboard',
      label: 'Terminal Home',
      icon: BarChart3,
    },
    {
      href: '/market-categories',
      label: 'Market Categories',
      icon: Grid3x3,
    },
    {
      href: '/my-surveys',
      label: 'My Paid Surveys',
      icon: Lock,
      badge: 'Pro',
    },
    {
      href: '/saved-reports',
      label: 'Saved Reports',
      icon: Bookmark,
    }
    // {
    //   href: '/network-status',
    //   label: 'Node Network Status',
    //   icon: Radio,
    // },
  ]

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col h-screen">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-lg font-bold text-gray-900">MarketIntel</h1>
        <p className="text-xs text-gray-500 mt-1">F&B Intelligence Terminal</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors relative',
                isActive
                  ? 'bg-indigo-50 text-indigo-700 font-medium'
                  : 'text-gray-700 hover:bg-gray-50'
              )}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">{item.label}</span>
              {item.badge && (
                <span className="ml-auto text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {item.badge}
                </span>
              )}
            </Link>
          )
        })}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-200 space-y-3">
        <div className="px-4 py-3 bg-gray-50 rounded-lg">
          <p className="text-xs text-gray-500 uppercase tracking-wide">Logged in as</p>
          <p className="text-sm font-semibold text-gray-900 mt-1">FMCG R&D Team</p>
        </div>
        <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>
    </div>
  )
}
