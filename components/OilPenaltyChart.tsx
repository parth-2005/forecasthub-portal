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

const oilPenaltyData = [
  { sample: 'Sample 1', penalty: 0.11 },
  { sample: 'Sample 2', penalty: 0.03 },
  { sample: 'Sample 3', penalty: -0.003 },
  { sample: 'Sample 4', penalty: -1.33 },
]

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
  return (
    <Card className="border-slate-200/80 bg-white">
      <CardHeader className="pb-2">
        <CardTitle className="text-base text-slate-900">
          Manufacturing Audit: Fryer Oil Retention
        </CardTitle>
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
                    fill={entry.penalty < 0 ? '#dc2626' : '#64748b'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
