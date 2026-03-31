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
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const stickinessData = [
  { sample: 'Sample 1', score: 60.12, status: 'Mass Market' },
  { sample: 'Sample 2', score: 59.88, status: 'Mass Market' },
  { sample: 'Sample 3', score: 76.56, status: 'Market Dominant' },
  { sample: 'Sample 4', score: 42.19, status: 'Critical Failure' },
]

interface TooltipPayload {
  payload?: {
    score: number
    status: string
  }
}

interface ChartTooltipProps {
  active?: boolean
  payload?: TooltipPayload[]
  label?: string
}

function ChartTooltip({ active, payload, label }: ChartTooltipProps) {
  if (!active || !payload?.length || !payload[0]?.payload) {
    return null
  }

  const { score, status } = payload[0].payload

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-md">
      <p className="text-sm font-semibold text-slate-900">{label}</p>
      <p className="text-xs text-slate-600">Score: {score.toFixed(2)}</p>
      <p className="text-xs text-slate-600">Status: {status}</p>
    </div>
  )
}

export function StickinessChart() {
  return (
    <Card className="border-slate-200/80 bg-white">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-slate-900">
          Multi-Variable Stickiness Score (Consumer Loyalty)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={stickinessData} margin={{ top: 8, right: 16, left: 0, bottom: 12 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis
              dataKey="sample"
              stroke="#64748b"
              style={{ fontSize: '12px', fontWeight: 500 }}
            />
            <YAxis domain={[0, 100]} stroke="#64748b" style={{ fontSize: '12px' }} />
            <Tooltip content={<ChartTooltip />} cursor={{ fill: 'rgba(148, 163, 184, 0.12)' }} />
            <Bar dataKey="score" radius={[10, 10, 0, 0]} name="Stickiness Score">
              {stickinessData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.sample === 'Sample 3' ? '#0ea5e9' : '#94a3b8'}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
