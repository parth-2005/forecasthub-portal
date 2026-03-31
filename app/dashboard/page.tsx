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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function DashboardPage() {
  return (
    <PortalLayout>
      <div className="flex flex-col gap-8 p-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Executive Intelligence Dashboard: Cream & Onion Segment
          </h1>
        </div>

        <div>
          <PlatformMetricCard />
        </div>

        <Tabs defaultValue="market-mechanics" className="gap-6">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="market-mechanics" className="px-3">
              Market Mechanics
            </TabsTrigger>
            <TabsTrigger value="sensory-profiling" className="px-3">
              Sensory Profiling
            </TabsTrigger>
            <TabsTrigger value="manufacturing-rd" className="px-3">
              Manufacturing & R&D
            </TabsTrigger>
          </TabsList>

          <TabsContent value="market-mechanics">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <StickinessChart />
              <RetailRoutingChart />
            </div>
          </TabsContent>

          <TabsContent value="sensory-profiling">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <FlavorMatrixChart />
              <TextureChart />
            </div>
          </TabsContent>

          <TabsContent value="manufacturing-rd">
            <div className="flex flex-col gap-6">
              <CriticalAlert />
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <OilPenaltyChart />
                <IntelligenceReportCard />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PortalLayout>
  )
}
