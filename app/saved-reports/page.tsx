'use client'

import { PortalLayout } from '@/components/PortalLayout'
import { Bookmark } from 'lucide-react'
import { toast } from '@/hooks/use-toast'

export default function SavedReportsPage() {
  const savedReports = [
    {
      id: '1',
      title: 'Cream & Onion Category Deconstruction',
      category: 'Salty Snacks',
      savedDate: '2 days ago',
    },
    {
      id: '2',
      title: 'Gen-Z Beverage Preferences Analysis',
      category: 'Beverages',
      savedDate: '1 week ago',
    },
  ]

  return (
    <PortalLayout>
      <div className="p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Saved Reports</h1>
        <p className="text-gray-600 mb-8">Your bookmarked market intelligence reports</p>

        <div className="space-y-4">
          {savedReports.map((report) => (
            <div
              key={report.id}
              className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer flex items-start justify-between"
              onClick={() => {
                toast({
                  title: 'Opening report (simulated)',
                  description: report.title,
                })
              }}
            >
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{report.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>{report.category}</span>
                  <span>•</span>
                  <span>Saved {report.savedDate}</span>
                </div>
              </div>
              <Bookmark className="w-5 h-5 text-amber-500 fill-amber-500 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </PortalLayout>
  )
}
