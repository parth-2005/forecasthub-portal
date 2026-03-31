'use client'

import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const radarData = [
  { subject: 'Acidic/Tangy', sample3: 85, average: 40 },
  { subject: 'Structural Rigidity', sample3: 65, average: 60 },
  { subject: 'Dissolve Rate', sample3: 90, average: 45 },
  { subject: 'Oil Retention', sample3: 15, average: 55 },
  { subject: 'Acoustic Crunch', sample3: 80, average: 75 },
]

interface RadarTooltipProps {
  active?: boolean
  payload?: Array<{
    dataKey?: string
    value?: number
    name?: string
  }>
  label?: string
}

function RadarTooltip({ active, payload, label }: RadarTooltipProps) {
  if (!active || !payload?.length) {
    return null
  }

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-md">
      <p className="mb-2 text-sm font-semibold text-slate-900">{label}</p>
      <div className="space-y-1">
        {payload.map((entry) => (
          <p key={entry.dataKey} className="text-xs text-slate-700">
            <span
              className="font-medium"
              style={{
                color: entry.dataKey === 'sample3' ? '#0ea5e9' : '#94a3b8',
              }}
            >
              {entry.dataKey === 'sample3' ? 'Sample 3' : 'Category Avg'}:
            </span>{' '}
            {entry.value}
          </p>
        ))}
      </div>
    </div>
  )
}

export function SensoryRadarChart() {
  return (
    <Card className="border-slate-200/80 bg-white">
      <CardHeader>
        <CardTitle className="text-lg text-slate-900">
          Multi-Dimensional Sensory Matrix (Sample 3 vs Category Average)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[320px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={radarData} margin={{ top: 20, right: 80, bottom: 20, left: 80 }}>
              <PolarGrid stroke="#e2e8f0" />
              <PolarAngleAxis dataKey="subject" stroke="#64748b" style={{ fontSize: '12px' }} />
              <PolarRadiusAxis stroke="#64748b" style={{ fontSize: '12px' }} domain={[0, 100]} />
              <Radar
                name="Sample 3"
                dataKey="sample3"
                stroke="#0ea5e9"
                fill="#0ea5e9"
                fillOpacity={0.5}
              />
              <Radar
                name="Category Average"
                dataKey="average"
                stroke="#94a3b8"
                fill="#94a3b8"
                fillOpacity={0.3}
              />
              <Tooltip content={<RadarTooltip />} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
