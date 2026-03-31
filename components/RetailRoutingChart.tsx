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

const routingData = [
  { sample: 'Sample 1', walk: 26.67, skip: 60.0, vending: 13.33 },
  { sample: 'Sample 2', walk: 46.15, skip: 15.38, vending: 38.46 },
  { sample: 'Sample 3', walk: 58.33, skip: 33.33, vending: 8.33 },
  { sample: 'Sample 4', walk: 0, skip: 75.0, vending: 25.0 },
]

const routingSeries = [
  { key: 'walk', label: 'Walk to Nearby Shop', color: '#2563eb' },
  { key: 'skip', label: 'Skip Purchase', color: '#f97316' },
  { key: 'vending', label: 'Switch to Vending', color: '#64748b' },
] as const

interface TooltipEntry {
  dataKey?: string
  payload?: Record<string, number | string>
}

interface RoutingTooltipProps {
  active?: boolean
  payload?: TooltipEntry[]
  label?: string
}

function RoutingTooltip({ active, payload, label }: RoutingTooltipProps) {
  if (!active || !payload?.length) {
    return null
  }

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-md">
      <p className="mb-2 text-sm font-semibold text-slate-900">{label}</p>
      <div className="space-y-1">
        {routingSeries.map((item) => {
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

export function RetailRoutingChart() {
  return (
    <Card className="border-slate-200/80 bg-white">
      <CardHeader className="pb-2">
        <CardTitle className="text-base text-slate-900">Channel Intercept & Substitution Risk</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mt-4">
          <div className="h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={routingData} stackOffset="expand" margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="sample" stroke="#64748b" style={{ fontSize: '12px' }} />
              <YAxis
                tickFormatter={(value) => `${Math.round(value * 100)}%`}
                stroke="#64748b"
                style={{ fontSize: '12px' }}
              />
              <Tooltip content={<RoutingTooltip />} />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
              {routingSeries.map((series) => (
                <Bar key={series.key} dataKey={series.key} name={series.label} stackId="routing">
                  {routingData.map((entry, index) => (
                    <Cell
                      key={`${entry.sample}-${series.key}-${index}`}
                      fill={entry.sample === 'Sample 3' ? series.color : '#94a3b8'}
                      fillOpacity={entry.sample === 'Sample 3' ? 1 : 0.55}
                    />
                  ))}
                </Bar>
              ))}
            </BarChart>
          </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
