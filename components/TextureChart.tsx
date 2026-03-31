'use client'

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const textureData = [
  { sample: 'Sample 1', crispy: 52.08, force: 35.42, powdery: 6.25, soft: 6.25 },
  { sample: 'Sample 2', crispy: 50.0, force: 18.52, powdery: 11.11, soft: 16.67 },
  { sample: 'Sample 3', crispy: 47.54, force: 13.11, powdery: 16.39, soft: 19.67 },
  { sample: 'Sample 4', crispy: 30.36, force: 25.0, powdery: 16.07, soft: 17.86 },
]

const textureSeries = [
  { key: 'crispy', label: 'Light & Crispy', color: '#0284c7' },
  { key: 'force', label: 'Hard / Forceful Bite', color: '#475569' },
  { key: 'powdery', label: 'Powdery', color: '#f59e0b' },
  { key: 'soft', label: 'Soft', color: '#10b981' },
] as const

interface TooltipEntry {
  dataKey?: string
  payload?: Record<string, number | string>
}

interface TextureTooltipProps {
  active?: boolean
  payload?: TooltipEntry[]
  label?: string
}

function TextureTooltip({ active, payload, label }: TextureTooltipProps) {
  if (!active || !payload?.length) {
    return null
  }

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-md">
      <p className="mb-2 text-sm font-semibold text-slate-900">{label}</p>
      <div className="space-y-1">
        {textureSeries.map((item) => {
          const matching = payload.find((entry) => entry.dataKey === item.key)
          const rawValue = Number(matching?.payload?.[item.key] ?? 0)

          return (
            <p key={item.key} className="text-xs text-slate-700">
              <span className="font-medium" style={{ color: item.color }}>
                {item.label}:
              </span>{' '}
              {rawValue.toFixed(2)}%
            </p>
          )
        })}
      </div>
    </div>
  )
}

export function TextureChart() {
  return (
    <Card className="border-slate-200/80 bg-white">
      <CardHeader>
        <CardTitle className="text-base text-slate-900">
          Physical Degradation (Bite & Texture)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={310}>
          <BarChart data={textureData} stackOffset="expand" margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="sample" stroke="#64748b" style={{ fontSize: '12px' }} />
            <YAxis
              tickFormatter={(value) => `${Math.round(value * 100)}%`}
              stroke="#64748b"
              style={{ fontSize: '12px' }}
            />
            <Tooltip content={<TextureTooltip />} />
            <Legend wrapperStyle={{ fontSize: '12px' }} />
            {textureSeries.map((series) => (
              <Bar key={series.key} dataKey={series.key} name={series.label} stackId="texture">
                {textureData.map((entry, index) => (
                  <Cell key={`${entry.sample}-${series.key}-${index}`} fill={series.color} />
                ))}
              </Bar>
            ))}
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
