'use client'

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const yearData = [
  { year: '1st Year (n=31)', 'Sample 1': 35, 'Sample 2': 39, 'Sample 3': 13, 'Sample 4': 13 },
  { year: '3rd Year (n=12)', 'Sample 1': 25, 'Sample 2': 25, 'Sample 3': 42, 'Sample 4': 8 },
]

export function YearPreferenceChart() {
  return (
    <div className="flex flex-col gap-4">
      <Card className="border-slate-200/80 bg-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-base text-slate-900">Most Liked Sample by Year</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mt-4 h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={yearData} margin={{ top: 10, right: 10, left: -20, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="year" stroke="#64748b" style={{ fontSize: '12px' }} />
                <YAxis tickFormatter={(val) => `${val}%`} stroke="#64748b" style={{ fontSize: '12px' }} />
                <Tooltip formatter={(value) => `${value}%`} />
                <Legend wrapperStyle={{ fontSize: '12px' }} />
                <Bar dataKey="Sample 1" fill="#64748b" radius={[4, 4, 0, 0]} />
                <Bar dataKey="Sample 2" fill="#1e3a8a" radius={[4, 4, 0, 0]} />
                <Bar dataKey="Sample 3" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
                <Bar dataKey="Sample 4" fill="#a855f7" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      <Card className="bg-emerald-50/50 border-emerald-100">
        <CardContent className="p-4 text-sm text-emerald-900">
          <span className="font-semibold">Insight:</span> 3rd year students (more experienced palates / higher brand exposure) prefer Sample 3 at 42% vs 13% among 1st years. This suggests S3&apos;s complex acid profile rewards taste sophistication — a loyalty signal that grows over time.
        </CardContent>
      </Card>
    </div>
  )
}
