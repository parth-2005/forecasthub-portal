'use client'

import { PortalLayout } from '@/components/PortalLayout'
import { CriticalAlert } from '@/components/CriticalAlert'
import { OilPenaltyChart } from '@/components/OilPenaltyChart'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function MarketRiskPage() {
  return (
    <PortalLayout>
      <div className="flex flex-col gap-8 p-8">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Manufacturing Audit & Risk Assessment
          </h1>
          <p className="mt-2 text-base text-gray-600">
            Critical quality control findings from fryer calibration audit
          </p>
        </div>

        {/* Critical Alert */}
        <CriticalAlert />

        {/* 50/50 Responsive Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left: Oil Penalty Chart */}
          <div>
            <OilPenaltyChart />
          </div>

          {/* Right: Manufacturing Audit Report Card */}
          <Card className="border-slate-200/80 bg-white">
            <CardHeader>
              <CardTitle className="text-lg text-slate-900">
                Manufacturing Audit Report
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Fryer Calibration Error</h3>
                <p className="text-sm leading-relaxed text-slate-700">
                  Sample 4 exhibits a critical fryer calibration defect resulting in abnormally high oil absorption (-1.33 penalty). This manufacturing variance indicates improper oil drainage settings in the production line.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Commercial Impact</h3>
                <p className="text-sm leading-relaxed text-slate-700">
                  Products with excessive oil retention will face accelerated degradation, off-flavors, and shelf-life complications. Immediate pipeline halt recommended to prevent brand equity damage.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Recommended Action</h3>
                <p className="text-sm leading-relaxed text-slate-700">
                  Recalibrate fryer drainage system to match Sample 1-3 specifications. Conduct batch retesting before resuming production. Sample 4 is not commercially viable.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200">
                <p className="text-xs text-slate-500">
                  <span className="font-semibold text-slate-600">Risk Level:</span> Critical (Recommend Pull)
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PortalLayout>
  )
}
