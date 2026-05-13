import React from 'react'
import {
  Activity,
  ArrowUpRight,
  CheckCircle2,
  Target,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { toast } from '@/hooks/use-toast'

interface MetricItem {
  title: string
  value: string
  label: string
  trend?: string
  icon: LucideIcon
  iconClass: string
  trendIcon?: LucideIcon
  trendClass?: string
  subtext?: string
}

const metrics: MetricItem[] = [
  {
    title: 'Verified respondents',
    value: '44',
    label: 'Double-blind, honesty-weighted',
    trend: 'Pilot study · March 2026',
    icon: Target,
    iconClass: 'text-emerald-600 bg-emerald-50',
  },
  {
    title: 'Distinct evaluations',
    value: '176',
    label: '4 samples × 44 participants',
    trend: '93% honesty check pass rate',
    icon: CheckCircle2,
    iconClass: 'text-blue-600 bg-blue-50',
    trendIcon: CheckCircle2,
    trendClass: 'text-blue-600',
  },
  {
    title: 'Data quality score',
    value: '93%',
    label: 'Respondents passed honesty check',
    trend: '3 flagged, weighted down',
    icon: CheckCircle2,
    iconClass: 'text-cyan-600 bg-cyan-50',
  },
  {
    title: 'Study category',
    value: 'Salty Snacks',
    label: 'Cream & Onion segment',
    icon: Target,
    iconClass: 'text-violet-600 bg-violet-50',
    subtext: 'n=4 competing SKUs',
  },
]

export function PlatformMetricCard() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric) => {
        const Icon = metric.icon
        const TrendIcon = metric.trendIcon

        return (
          <Card
            key={metric.title}
            className="border-slate-200/80 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md cursor-pointer hover:border-primary/50 hover:shadow-lg"
            onClick={() => {
              toast({
                title: metric.title,
                description: 'Drilling down into the underlying node signals (simulated).',
              })
            }}
          >
            <CardContent className="p-4 space-y-3">
              <div className="flex items-start justify-between gap-4">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-600">{metric.title}</p>
                <span className={`rounded-lg p-2.5 ${metric.iconClass}`}>
                  <Icon className="h-4 w-4" />
                </span>
              </div>
              <div>
                <p className="text-3xl font-bold tracking-tight text-slate-900">{metric.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{metric.label}</p>
              </div>
              <div className="space-y-1">
                {metric.trend ? (
                  <p className={`flex items-center gap-1 text-xs font-semibold ${metric.trendClass}`}>
                    {TrendIcon ? (
                      <TrendIcon
                        className={`h-3.5 w-3.5`}
                      />
                    ) : null}
                    {metric.trend}
                  </p>
                ) : null}
                {metric.subtext ? <p className="text-xs text-slate-500">{metric.subtext}</p> : null}
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
