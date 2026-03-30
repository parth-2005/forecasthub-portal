'use client'

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import { Card } from '@/components/ui/card'

interface SensoryRadarChartProps {
  title: string
  data: Array<{
    axis: string
    sample3: number
    sample4: number
  }>
}

export function SensoryRadarChart({ title, data }: SensoryRadarChartProps) {
  return (
    <Card className="p-6 bg-white border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">{title}</h3>
      <ResponsiveContainer width="100%" height={350}>
        <RadarChart
          data={data}
          margin={{ top: 20, right: 80, bottom: 20, left: 80 }}
        >
          <PolarGrid stroke="#e5e7eb" />
          <PolarAngleAxis
            dataKey="axis"
            stroke="#6b7280"
            style={{ fontSize: '11px', fontWeight: 500 }}
          />
          <PolarRadiusAxis
            stroke="#d1d5db"
            style={{ fontSize: '10px' }}
          />
          <Radar
            name="Sample 3 (Winner)"
            dataKey="sample3"
            stroke="#059669"
            fill="#059669"
            fillOpacity={0.25}
            strokeWidth={2}
          />
          <Radar
            name="Sample 4 (Critical)"
            dataKey="sample4"
            stroke="#dc2626"
            fill="#dc2626"
            fillOpacity={0.25}
            strokeWidth={2}
          />
          <Legend
            wrapperStyle={{ paddingTop: '20px' }}
            verticalAlign="bottom"
            height={36}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '6px',
            }}
            labelStyle={{ color: '#111827' }}
            formatter={(value) => value.toFixed(2)}
          />
        </RadarChart>
      </ResponsiveContainer>
    </Card>
  )
}
