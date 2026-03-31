'use client'

import {
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  XAxis,
  YAxis,
  ZAxis,
} from 'recharts'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

const sampleColorMap: Record<string, string> = {
  'Sample 1': '#64748b', // slate
  'Sample 2': '#1e3a8a', // navy
  'Sample 3': '#0ea5e9', // sky (primary)
  'Sample 4': '#a855f7', // purple (destructive-ish)
}

interface TooltipPayload {
  payload?: {
    sample: string
    quality: number
    loyalty: number
    note: string
  }
}

interface ChartTooltipProps {
  active?: boolean
  payload?: TooltipPayload[]
}

function ChartTooltip({ active, payload }: ChartTooltipProps) {
  if (!active || !payload?.length || !payload[0]?.payload) {
    return null
  }

  const { sample, quality, loyalty, note } = payload[0].payload

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-md">
      <p className="text-sm font-semibold text-slate-900">{sample}</p>
      <p className="text-xs text-slate-600">Quality × Confidence: {quality.toFixed(1)}</p>
      <p className="text-xs text-slate-600">Loyalty: {loyalty.toFixed(2)}</p>
      <p className="mt-1 text-xs text-slate-700">{note}</p>
    </div>
  )
}

export function StickinessChart() {
  const [open, setOpen] = useState(false)

  const data = useMemo(
    () => [
      { sample: 'Sample 1', quality: 48.5, loyalty: 61.67, note: 'Mass-market baseline ("Safe Habit")' },
      { sample: 'Sample 2', quality: 51.5, loyalty: 60.58, note: 'High quality, but not differentiated enough' },
      { sample: 'Sample 3', quality: 46.5, loyalty: 76.56, note: 'Cult Classic: polarizing but intensely loyal' },
      { sample: 'Sample 4', quality: 36.5, loyalty: 42.19, note: 'Warning: rejected due to manufacturing defect signals' },
    ],
    [],
  )

  return (
    <>
      <Card
        className="border-slate-200/80 bg-white hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <CardHeader className="pb-2 flex flex-row items-start justify-between gap-4">
        <CardTitle className="text-lg text-slate-900">
          Loyalty vs Quality × Confidence (LOGIQ Scatter)
        </CardTitle>
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
              <ScatterChart margin={{ top: 10, right: 18, left: 8, bottom: 18 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis
                  type="number"
                  dataKey="quality"
                  domain={[35, 55]}
                  stroke="#64748b"
                  tick={{ fontSize: 12 }}
                  tickLine={{ stroke: '#cbd5e1' }}
                  axisLine={{ stroke: '#cbd5e1' }}
                  label={{ value: 'Quality (Taste + Texture) × Confidence', position: 'insideBottom', offset: -8 }}
                />
                <YAxis
                  type="number"
                  dataKey="loyalty"
                  domain={[35, 80]}
                  stroke="#64748b"
                  tick={{ fontSize: 12 }}
                  tickLine={{ stroke: '#cbd5e1' }}
                  axisLine={{ stroke: '#cbd5e1' }}
                  label={{ value: 'Loyalty', angle: -90, position: 'insideLeft' }}
                />
                <ZAxis type="number" dataKey="size" range={[90, 220]} />
                <Tooltip content={<ChartTooltip />} cursor={{ stroke: '#94a3b8', strokeDasharray: '4 4' }} />
                <Scatter
                  data={data.map((d) => ({
                    ...d,
                    size: d.sample === 'Sample 3' ? 220 : d.sample === 'Sample 4' ? 170 : 140,
                    fill: sampleColorMap[d.sample] ?? '#94a3b8',
                  }))}
                  shape={(props: any) => {
                    const { cx, cy, payload } = props
                    const r = payload.sample === 'Sample 3' ? 9 : payload.sample === 'Sample 4' ? 8 : 7
                    const stroke = payload.sample === 'Sample 4' ? '#dc2626' : 'rgba(15, 23, 42, 0.15)'
                    const strokeWidth = payload.sample === 'Sample 4' ? 2 : 1
                    return (
                      <circle
                        cx={cx}
                        cy={cy}
                        r={r}
                        fill={payload.fill}
                        stroke={stroke}
                        strokeWidth={strokeWidth}
                        opacity={payload.sample === 'Sample 2' ? 0.9 : 1}
                      />
                    )
                  }}
                />
              </ScatterChart>
          </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>Stickiness scatter — detailed interpretation</DialogTitle>
            <DialogDescription>
              This plot separates “quality” from “loyalty” to identify cult classics vs safe habits.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 text-sm text-slate-700">
            <p>
              <span className="font-semibold text-slate-900">Sample 3 is a “Cult Classic”.</span> It is not the highest
              quality point on the x-axis, but it produces the highest loyalty—consistent with a polarizing profile
              that builds intense repeat behavior.
            </p>
            <p>
              <span className="font-semibold text-slate-900">Sample 2 is a “Safe Habit”.</span> High quality without a
              step-change in loyalty indicates it’s easy to accept, but easy to replace.
            </p>
            <p>
              <span className="font-semibold text-slate-900">Sample 4 is a warning case.</span> Low quality and low
              loyalty aligns with the manufacturing oiliness penalty driving rejection.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
