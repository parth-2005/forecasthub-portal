'use client'

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ReferenceLine,
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

const oilPenaltyData = [
  { sample: 'Sample 1', penalty: 0.11 },
  { sample: 'Sample 2', penalty: 0.03 },
  { sample: 'Sample 3', penalty: 0 },
  { sample: 'Sample 4', penalty: -1.33 },
]

const sampleColorMap: Record<string, string> = {
  'Sample 1': '#64748b', // slate
  'Sample 2': '#1e3a8a', // navy
  'Sample 3': '#0ea5e9', // sky
  'Sample 4': '#a855f7', // purple
}

interface OilTooltipEntry {
  payload?: {
    penalty: number
  }
}

interface OilTooltipProps {
  active?: boolean
  payload?: OilTooltipEntry[]
  label?: string
}

function OilPenaltyTooltip({ active, payload, label }: OilTooltipProps) {
  if (!active || !payload?.length || !payload[0]?.payload) {
    return null
  }

  const { penalty } = payload[0].payload

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-md">
      <p className="text-sm font-semibold text-slate-900">{label}</p>
      <p className="text-xs text-slate-600">Penalty: {penalty.toFixed(3)}</p>
    </div>
  )
}

export function OilPenaltyChart() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Card
        className="border-slate-200/80 bg-white hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <CardHeader className="pb-2 flex flex-row items-start justify-between gap-4">
        <CardTitle className="text-base text-slate-900">
          Manufacturing Audit: Fryer Oil Retention
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
              <BarChart
              data={oilPenaltyData}
              layout="vertical"
              margin={{ top: 6, right: 16, left: 16, bottom: 6 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis type="number" domain={[-1.5, 0.2]} stroke="#64748b" style={{ fontSize: '12px' }} />
              <YAxis type="category" dataKey="sample" stroke="#64748b" style={{ fontSize: '12px' }} width={70} />
              <ReferenceLine x={0} stroke="#334155" strokeWidth={1.5} />
              <Tooltip content={<OilPenaltyTooltip />} />
              <Bar dataKey="penalty" radius={[0, 6, 6, 0]}>
                {oilPenaltyData.map((entry) => (
                  <Cell
                    key={entry.sample}
                    fill={sampleColorMap[entry.sample] ?? '#94a3b8'}
                    fillOpacity={entry.sample === 'Sample 3' ? 1 : 0.85}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>Oil penalty — detailed interpretation</DialogTitle>
            <DialogDescription>
              Why Sample 4 is a “pull now” event from a manufacturing standpoint.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 text-sm text-slate-700">
            <p>
              <span className="font-semibold text-slate-900">Sample 4 shows a catastrophic -1.33 heavy-oiliness penalty</span>
              , consistent with fryer calibration and oil drainage failure.
            </p>
            <p>
              This defect drives rancid notes, suppressed crunch, and fast consumer rejection—making the product
              commercially unviable even with marketing support.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
