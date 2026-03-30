'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts'
import { Card } from '@/components/ui/card'

interface DataPoint {
  name: string
  value: number
  highlight?: boolean
}

interface StickinessChartProps {
  title: string
  data: DataPoint[]
  successColor?: string
  failureColor?: string
  defaultColor?: string
}

export function StickinessChart({
  title,
  data,
  successColor = '#059669',
  failureColor = '#dc2626',
  defaultColor = '#4f46e5',
}: StickinessChartProps) {
  return (
    <Card className="p-6 bg-white border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
          <XAxis
            dataKey="name"
            stroke="#9ca3af"
            style={{ fontSize: '12px', fontWeight: 500 }}
          />
          <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '6px',
            }}
            labelStyle={{ color: '#111827' }}
            formatter={(value) => [`${value}`, 'Score']}
          />
          <Bar dataKey="value" radius={[8, 8, 0, 0]} name="Stickiness Score">
            {data.map((entry, index) => {
              if (entry.name.includes('3')) {
                return <Cell key={`cell-${index}`} fill={successColor} />
              }
              if (entry.name.includes('4')) {
                return <Cell key={`cell-${index}`} fill={failureColor} />
              }
              return <Cell key={`cell-${index}`} fill={defaultColor} />
            })}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Card>
  )
}
