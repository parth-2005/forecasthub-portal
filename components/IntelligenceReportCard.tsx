import React from 'react'
import { ArrowRight, Star } from 'lucide-react'

interface IntelligenceReportCardProps {
  title: string
  category: string
  insight: string
  featured?: boolean
  onClick?: () => void
}

export function IntelligenceReportCard({
  title,
  category,
  insight,
  featured = false,
  onClick,
}: IntelligenceReportCardProps) {
  return (
    <button
      onClick={onClick}
      className={`text-left rounded-lg border transition-all hover:shadow-md ${
        featured
          ? 'bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-200 ring-2 ring-indigo-300'
          : 'bg-white border-gray-200 hover:border-gray-300'
      } p-6 relative overflow-hidden group`}
    >
      {featured && (
        <div className="absolute top-3 right-3">
          <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
        </div>
      )}
      <div className="flex items-start justify-between mb-3">
        <h3 className={`text-lg font-semibold ${featured ? 'text-indigo-900' : 'text-gray-900'}`}>
          {title}
        </h3>
      </div>
      <div className="mb-3">
        <span className={`inline-block text-xs font-medium px-2 py-1 rounded-full ${
          featured
            ? 'bg-indigo-200 text-indigo-700'
            : 'bg-gray-100 text-gray-700'
        }`}>
          {category}
        </span>
      </div>
      <p className={`text-sm leading-relaxed mb-4 ${featured ? 'text-indigo-800' : 'text-gray-600'}`}>
        {insight}
      </p>
      <div className="flex items-center gap-2 text-sm font-medium text-indigo-600 group-hover:gap-3 transition-all">
        <span>View Report</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </button>
  )
}
