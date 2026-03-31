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
      <div className="p-8">
        <div className="mb-8">
          <CriticalAlert />
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Executive Intelligence Dashboard: Cream & Onion Segment
          </h1>
        </div>

        <div className="mb-8">
          <PlatformMetricCard />
        </div>

        <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div>
            <StickinessChart />
          </div>
          <div>
            <RetailRoutingChart />
          </div>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <FlavorMatrixChart />
          <TextureChart />
          <OilPenaltyChart />
        </div>

        <div>
          <div className="max-w-5xl">
            <IntelligenceReportCard />
          </div>
        </div>
      </div>
    </PortalLayout>
  )
}
