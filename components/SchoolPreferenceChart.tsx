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

const schoolData = [
  { school: 'SOM (n=22)', 'Sample 1': 36, 'Sample 2': 27, 'Sample 3': 14, 'Sample 4': 23 },
  { school: 'SOT (n=20)', 'Sample 1': 30, 'Sample 2': 40, 'Sample 3': 30, 'Sample 4': 0 },
  { school: 'SLS (n=2)', 'Sample 1': 50, 'Sample 2': 50, 'Sample 3': 0, 'Sample 4': 0 },
]

export function SchoolPreferenceChart() {
  return (
    <div className="flex flex-col gap-4">
      <Card className="border-slate-200/80 bg-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-base text-slate-900">Most Liked Sample by School</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mt-4 h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={schoolData} margin={{ top: 10, right: 10, left: -20, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="school" stroke="#64748b" style={{ fontSize: '12px' }} />
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
      <Card className="bg-indigo-50/50 border-indigo-100">
        <CardContent className="p-4 text-sm text-indigo-900">
          <span className="font-semibold">Insight:</span> SOM students skew toward S4 as both most-liked (23%) and most-liked simultaneously — suggesting different purchase drivers vs SOT. SOT students show zero S4 preference and stronger S3/S2 split.
        </CardContent>
      </Card>
    </div>
  )
}
