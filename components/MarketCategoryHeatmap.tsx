'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface MarketCategoryHeatmapProps {
  title: string
}

export function MarketCategoryHeatmap({ title }: MarketCategoryHeatmapProps) {
  const data = [
    { category: 'Salty Snacks', volatility: 78, color: '#dc2626' },
    { category: 'Confectionery', volatility: 72, color: '#f59e0b' },
    { category: 'Energy Drinks', volatility: 58, color: '#f59e0b' },
    { category: 'Carbonated Beverages', volatility: 52, color: '#f59e0b' },
    { category: 'Plant-Based Dairy', volatility: 48, color: '#10b981' },
    { category: 'Yogurt/Dairy', volatility: 35, color: '#10b981' },
  ]

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-2">{title}</h2>
      <p className="text-xs text-gray-500 mb-4">Sensory volatility indicates category market intensity and consumer preference shifts</p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 60 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis
            dataKey="category"
            stroke="#6b7280"
            angle={-45}
            textAnchor="end"
            height={100}
            tick={{ fontSize: 12 }}
          />
          <YAxis domain={[0, 100]} stroke="#6b7280" label={{ value: 'Volatility Index', angle: -90, position: 'insideLeft' }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '6px' }}
            formatter={(value) => `${value}%`}
          />
          <Bar
            dataKey="volatility"
            fill="#6366f1"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
