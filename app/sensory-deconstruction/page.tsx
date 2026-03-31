'use client'

import { PortalLayout } from '@/components/PortalLayout'
import { SensoryRadarChart } from '@/components/SensoryRadarChart'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function SensoryDeconstructionPage() {
  return (
    <PortalLayout>
      <div className="flex flex-col gap-8 p-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Sensory Deconstruction Deep-Dive
          </h1>
          <p className="mt-2 text-base text-gray-600">
            Analyzing the multi-dimensional flavor-texture synergy of Sample 3
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SensoryRadarChart />
          </div>
          <div className="lg:col-span-1">
            <Card className="border-slate-200/80 bg-white h-full">
              <CardHeader>
                <CardTitle className="text-base text-slate-900">
                  Analysis Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Sample 3 Dominance</h3>
                  <p className="text-sm leading-relaxed text-slate-700">
                    Sample 3 dominates due to a polarizing, high-acid matrix. The exceptional acidic/tangy profile (85/100) coupled with superior dissolve rate (90/100) creates a powerful competitive advantage.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Structural Advantage</h3>
                  <p className="text-sm leading-relaxed text-slate-700">
                    Maintains structural rigidity (65/100) while competitors rely on heavy oil retention. This combination is commercially unviable for competitors to replicate.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Market Implication</h3>
                  <p className="text-sm leading-relaxed text-slate-700">
                    Sample 3's low oil retention (15/100) vs category average (55/100) indicates a fryer optimization that eliminates the manufacturing defect plaguing Sample 4.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PortalLayout>
  )
}
