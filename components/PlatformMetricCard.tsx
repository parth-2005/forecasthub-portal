import React from 'react'
import { LucideIcon } from 'lucide-react'

interface PlatformMetricCardProps {
  title: string
  value: string | number
  subtitle: string
  icon: LucideIcon
  accent?: 'indigo' | 'emerald' | 'amber' | 'slate'
}

export function PlatformMetricCard({
  title,
  value,
  subtitle,
  icon: Icon,
  accent = 'indigo',
}: PlatformMetricCardProps) {
  const accentColors = {
    indigo: 'text-indigo-600 bg-indigo-50',
    emerald: 'text-emerald-600 bg-emerald-50',
    amber: 'text-amber-600 bg-amber-50',
    slate: 'text-slate-600 bg-slate-50',
  }

  const colorClass = accentColors[accent]

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        <div className={`p-3 rounded-lg ${colorClass}`}>
          <Icon className="w-5 h-5" />
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-3xl font-bold text-gray-900 mb-1">{value}</p>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>
    </div>
  )
}
