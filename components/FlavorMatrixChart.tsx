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

const flavorData = [
  { sample: 'Sample 1', creamy: 42.19, cheesy: 17.19, tangy: 14.06, salty: 10.94, roasted: 9.38 },
  { sample: 'Sample 2', creamy: 38.96, cheesy: 29.87, tangy: 15.58, salty: 6.49, roasted: 7.79 },
  { sample: 'Sample 3', creamy: 26.25, cheesy: 25.0, tangy: 18.75, salty: 11.25, roasted: 7.5 },
  { sample: 'Sample 4', creamy: 21.05, cheesy: 13.16, tangy: 28.95, salty: 11.84, roasted: 17.11 },
]

const flavorSeries = [
  { key: 'creamy', label: 'Creamy', color: '#94a3b8' },
  { key: 'cheesy', label: 'Cheesy', color: '#f59e0b' },
  { key: 'tangy', label: 'Tangy / Lemony / Sour', color: '#0ea5e9' },
  { key: 'salty', label: 'Salty', color: '#6366f1' },
  { key: 'roasted', label: 'Roasted', color: '#64748b' },
] as const

interface TooltipEntry {
  dataKey?: string
  payload?: Record<string, number | string>
}

interface FlavorTooltipProps {
  active?: boolean
  payload?: TooltipEntry[]
  label?: string
}

function FlavorTooltip({ active, payload, label }: FlavorTooltipProps) {
  if (!active || !payload?.length) {
    return null
  }

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-md">
      <p className="mb-2 text-sm font-semibold text-slate-900">{label}</p>
      <div className="space-y-1">
        {flavorSeries.map((item) => {
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

export function FlavorMatrixChart() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Card
        className="border-slate-200/80 bg-white hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <CardHeader className="pb-2 flex flex-row items-start justify-between gap-4">
        <CardTitle className="text-base text-slate-900">Flavor Profile Extraction</CardTitle>
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
                data={flavorData}
                stackOffset="expand"
                margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
              >
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="sample" stroke="#64748b" style={{ fontSize: '12px' }} />
              <YAxis
                tickFormatter={(value) => `${Math.round(value * 100)}%`}
                stroke="#64748b"
                style={{ fontSize: '12px' }}
              />
              <Tooltip content={<FlavorTooltip />} />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
              {flavorSeries.map((series) => (
                <Bar key={series.key} dataKey={series.key} name={series.label} stackId="a">
                  {flavorData.map((entry, index) => (
                    <Cell
                      key={`${entry.sample}-${series.key}-${index}`}
                      fill={series.color}
                      fillOpacity={entry.sample === 'Sample 3' ? 1 : 0.65}
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
            <DialogTitle>Flavor matrix — detailed interpretation</DialogTitle>
            <DialogDescription>
              Why Sample 3 wins the “palate mechanics” battle in Cream & Onion.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 text-sm text-slate-700">
            <p>
              <span className="font-semibold text-slate-900">Sample 3’s polarizing tangy/acidic profile</span> acts as a
              palate cleanser and creates a memorable “reset” effect—this is a loyalty driver, not just a taste score.
            </p>
            <p>
              <span className="font-semibold text-slate-900">Sample 2 shows palate fatigue risk.</span> Excess creamy /
              cheesy notes can saturate quickly, turning high initial acceptability into weaker repeat intent.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
