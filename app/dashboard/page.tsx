'use client'

import { PortalLayout } from '@/components/PortalLayout'
import { CriticalAlert } from '@/components/CriticalAlert'
import { PlatformMetricCard } from '@/components/PlatformMetricCard'
import { StickinessChart } from '@/components/StickynessChart'
import { RetailRoutingChart } from '@/components/RetailRoutingChart'
import { FlavorMatrixChart } from '@/components/FlavorMatrixChart'
import { TextureChart } from '@/components/TextureChart'
import { OilPenaltyChart } from '@/components/OilPenaltyChart'
import { IntelligenceReportCard } from '@/components/IntelligenceReportCard'

export default function DashboardPage() {
  return (
    <PortalLayout>
      <div className="flex flex-col gap-8 p-8">
        <div>
          <CriticalAlert />
        </div>

        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Executive Intelligence Dashboard: Cream & Onion Segment
          </h1>
        </div>

        <div>
          <PlatformMetricCard />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <StickinessChart />
          <RetailRoutingChart />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <FlavorMatrixChart />
          <TextureChart />
          <OilPenaltyChart />
        </div>

        <div>
          <IntelligenceReportCard />
        </div>
      </div>
    </PortalLayout>
  )
}
