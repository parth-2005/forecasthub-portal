'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { BarChart3, Grid3x3, ShieldAlert, Microscope, LogOut, Lock } from 'lucide-react'
import { cn } from '@/lib/utils'
import { toast } from '@/hooks/use-toast'

export function Sidebar() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    {
      href: '/dashboard',
      label: 'Executive Dashboard',
      icon: BarChart3,
    },
    {
      href: '/sensory-deconstruction',
      label: 'Sensory Deconstruction',
      icon: Microscope,
    },
    {
      href: '/market-risk',
      label: 'Market Risk Alerts',
      icon: ShieldAlert,
    },
    {
      href: '/market-categories',
      label: 'Market Categories',
      icon: Grid3x3,
    },
    {
      href: '/my-surveys',
      label: 'Live Operations',
      icon: Lock,
      badge: 'Live',
    },
  ]

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col h-screen">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-lg font-bold text-gray-900">ForecastHub</h1>
        <p className="text-xs text-gray-500 mt-1">Sensory Intelligence Portal</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = mounted && pathname === item.href
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
        <button
          className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
          onClick={() => {
            toast({
              title: 'Session ended (simulated)',
              description: 'In production this would sign you out securely.',
            })
          }}
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>
    </div>
  )
}
