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
    title: 'Verified Campus Nodes',
    value: '44',
    label: 'Active Ground Nodes',
    trend: '+12% this month',
    icon: TrendingUp,
    iconClass: 'text-emerald-600 bg-emerald-50',
    trendIcon: ArrowUpRight,
    trendClass: 'text-emerald-600',
  },
  {
    title: 'Distinct Evaluations',
    value: '176',
    label: 'Double-Blind Sensory Tests',
    trend: 'High Confidence',
    icon: CheckCircle2,
    iconClass: 'text-blue-600 bg-blue-50',
    trendIcon: CheckCircle2,
    trendClass: 'text-blue-600',
  },
  {
    title: 'Active Market Signals',
    value: '12,450',
    label: 'Passive Social/Digital Data Points',
    trend: 'Live Sync',
    icon: Activity,
    iconClass: 'text-cyan-600 bg-cyan-50',
    trendIcon: Activity,
    trendClass: 'text-cyan-600',
  },
  {
    title: 'Category Focus',
    value: 'Salty Snacks',
    label: 'Cream & Onion Segment',
    icon: Target,
    iconClass: 'text-violet-600 bg-violet-50',
    subtext: 'Sample Size n=4',
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
                        className={`h-3.5 w-3.5 ${metric.trend === 'Live Sync' ? 'animate-pulse' : ''}`}
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
