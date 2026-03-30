'use client'

import { PortalLayout } from '@/components/PortalLayout'

export default function MarketCategoriesPage() {
  const categories = [
    { name: 'Salty Snacks', reports: 8, lastUpdate: '2 days ago', volatility: 'High' },
    { name: 'Confectionery', reports: 6, lastUpdate: '5 days ago', volatility: 'High' },
    { name: 'Energy Drinks', reports: 5, lastUpdate: '1 week ago', volatility: 'Medium' },
    { name: 'Carbonated Beverages', reports: 7, lastUpdate: '3 days ago', volatility: 'Medium' },
    { name: 'Plant-Based Dairy', reports: 4, lastUpdate: '4 days ago', volatility: 'Low' },
    { name: 'Yogurt/Dairy', reports: 6, lastUpdate: '1 week ago', volatility: 'Low' },
  ]

  return (
    <PortalLayout>
      <div className="p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Market Categories</h1>
        <p className="text-gray-600 mb-8">Browse syndicated intelligence across F&B categories</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{cat.name}</h3>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p>Reports: {cat.reports}</p>
                <p>Last update: {cat.lastUpdate}</p>
              </div>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                Volatility: {cat.volatility}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PortalLayout>
  )
}
