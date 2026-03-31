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
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

const routingData = [
  { sample: 'Sample 1', vending: 13.33, skip: 60.0, walk: 26.67 },
  { sample: 'Sample 2', vending: 38.46, skip: 15.38, walk: 46.15 },
  { sample: 'Sample 3', vending: 8.33, skip: 33.33, walk: 58.33 },
  { sample: 'Sample 4', vending: 25.0, skip: 75.0, walk: 0 },
]

const routingSeries = [
  { key: 'vending', label: 'Buy best sample from vending', color: '#1e3a8a' },
  { key: 'skip', label: 'Skip buying', color: '#64748b' },
  { key: 'walk', label: 'Walk to a nearby shop', color: '#0ea5e9' },
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
  const [open, setOpen] = useState(false)

  return (
    <>
      <Card
        className="border-slate-200/80 bg-white hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <CardHeader className="pb-2 flex flex-row items-start justify-between gap-4">
        <CardTitle className="text-base text-slate-900">Channel Intercept & Substitution Risk</CardTitle>
        <Button
          variant="outline"
          size="sm"
          className="h-8"
          onClick={(e) => {
            e.stopPropagation()
            setOpen(true)
          }}
        >
          View Detailed Analysis
        </Button>
      </CardHeader>
      <CardContent>
        <div className="mt-4">
          <div className="h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={routingData}
                layout="vertical"
                stackOffset="expand"
                margin={{ top: 10, right: 16, left: 16, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis
                  type="number"
                  tickFormatter={(value) => `${Math.round(value * 100)}%`}
                  stroke="#64748b"
                  style={{ fontSize: '12px' }}
                />
                <YAxis
                  type="category"
                  dataKey="sample"
                  stroke="#64748b"
                  style={{ fontSize: '12px' }}
                  width={70}
                />
                <Tooltip content={<RoutingTooltip />} />
                <Legend wrapperStyle={{ fontSize: '12px' }} />
                {routingSeries.map((series) => (
                  <Bar key={series.key} dataKey={series.key} name={series.label} stackId="a" isAnimationActive>
                    {routingData.map((entry, index) => (
                      <Cell
                        key={`${entry.sample}-${series.key}-${index}`}
                        fill={series.color}
                        fillOpacity={entry.sample === 'Sample 3' ? 1 : 0.6}
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

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>Channel intercept — what it means</DialogTitle>
            <DialogDescription>
              This chart models “where the consumer goes next” after exposure to each sample.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 text-sm text-slate-700">
            <p>
              <span className="font-semibold text-slate-900">Sample 3 drives destination behavior.</span> The dominant
              “walk to a nearby shop” share indicates true loyalty (willingness to change channel to get it).
            </p>
            <p>
              <span className="font-semibold text-slate-900">High “skip buying” is lost revenue.</span> It indicates the
              product fails to justify any substitution—consumers simply exit the category occasion.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
