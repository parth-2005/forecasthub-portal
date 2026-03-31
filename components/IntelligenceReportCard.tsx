import React from 'react'
import { AlertTriangle, MapPin, TrendingUp, type LucideIcon } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface InsightItem {
  heading: string
  title: string
  description: string
  icon: LucideIcon
  iconClass: string
}

const insights: InsightItem[] = [
  {
    heading: 'Strategic Opportunity (Sample 3)',
    title: 'Margin Negotiation Leverage',
    description:
      'Sample 3 exhibits a highly polarizing, high-acid textural matrix resulting in 58% walk-to-shop loyalty. Action: Leverage this economic resilience to negotiate premium margins at destination grocery outlets.',
    icon: TrendingUp,
    iconClass: 'text-emerald-600 bg-emerald-50',
  },
  {
    heading: 'Distribution Shift (Samples 1 & 2)',
    title: 'Vending & Convenience Focus',
    description:
      'Profiles 1 and 2 operate as safe, habitual buys. With a 38.46% substitution rate, trade spend must be aggressively funneled into checkout-counter real estate rather than brand loyalty campaigns.',
    icon: MapPin,
    iconClass: 'text-blue-600 bg-blue-50',
  },
  {
    heading: 'R&D Alert (Sample 4)',
    title: 'Manufacturing Defect Detected',
    description:
      'Sample 4 is actively rejected by the market. Dual failure in structural rigidity and a -1.33 oil penalty requires an immediate pause on distribution.',
    icon: AlertTriangle,
    iconClass: 'text-red-600 bg-red-50',
  },
]

export function IntelligenceReportCard() {
  return (
    <Card className="h-full border-slate-200/80 bg-white">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-slate-900">Actionable Intelligence Feed</CardTitle>
      </CardHeader>
      <CardContent className="max-h-[560px] space-y-4 overflow-y-auto">
        {insights.map((insight) => {
          const Icon = insight.icon

          return (
            <article
              key={insight.title}
              className="rounded-lg border border-slate-200 bg-slate-50/60 p-4 transition-colors hover:bg-slate-50"
            >
              <div className="mb-3 flex items-start gap-3">
                <span className={`rounded-lg p-2 ${insight.iconClass}`}>
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {insight.heading}
                  </p>
                  <h3 className="mt-1 text-sm font-semibold text-slate-900">{insight.title}</h3>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-slate-700">{insight.description}</p>
            </article>
          )
        })}
      </CardContent>
    </Card>
  )
}
