'use client'

import { Server, TrendingUp, Database, Zap } from 'lucide-react'
import { PortalLayout } from '@/components/PortalLayout'
import { PlatformMetricCard } from '@/components/PlatformMetricCard'
import { MarketCategoryHeatmap } from '@/components/MarketCategoryHeatmap'
import { IntelligenceReportCard } from '@/components/IntelligenceReportCard'
import { BespokeSurveysTable } from '@/components/BespokeSurveysTable'

export default function DashboardPage() {
  const surveys = [
    {
      id: '1',
      projectName: 'Premium Chocolate Bars - Comparative Study',
      status: 'Report Ready' as const,
      nodesDeployed: 142,
      expectedCompletion: 'Completed 3 days ago',
    },
    {
      id: '2',
      projectName: 'Oat Milk Texture & Taste Profile',
      status: 'Processing' as const,
      nodesDeployed: 87,
      expectedCompletion: 'March 31, 2026',
    },
    {
      id: '3',
      projectName: 'Energy Bar Formulation Optimization',
      status: 'Data Collection' as const,
      nodesDeployed: 156,
      expectedCompletion: 'April 15, 2026',
    },
  ]

  return (
    <PortalLayout>
      <div className="p-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Terminal Home</h1>
          <p className="text-gray-600 mt-2">F&B Industry Intelligence Dashboard</p>
        </div>

        {/* Row 1: Macro Platform Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <PlatformMetricCard
            title="Active Campus Nodes"
            value="2,000+"
            subtitle="Distributed evaluation network"
            icon={Server}
            accent="indigo"
          />
          <PlatformMetricCard
            title="F&B Categories Tracked"
            value="12"
            subtitle="Snacks, Dairy, Beverages, etc."
            icon={TrendingUp}
            accent="emerald"
          />
          <PlatformMetricCard
            title="Sensory Data Points"
            value="145K+"
            subtitle="Cumulative evaluations"
            icon={Database}
            accent="amber"
          />
          <PlatformMetricCard
            title="Latest Methodology"
            value="v2.1"
            subtitle="Stickiness Score"
            icon={Zap}
            accent="slate"
          />
        </div>

        {/* Row 2: Market Category Heatmap */}
        <div className="mb-8">
          <MarketCategoryHeatmap title="Sensory Volatility by Category" />
        </div>

        {/* Row 3: Latest Intelligence Drops */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Latest Independent Intelligence Drops</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <IntelligenceReportCard
              title="Cream & Onion Category Deconstruction"
              category="Salty Snacks"
              insight="Sample 3 dominates with a 76.6 Stickiness Score due to polarizing acid matrix. Critical structural rigidity advantage (8.5 vs 3.2) renders competitive formulations commercially unviable."
              featured={true}
            />
            <IntelligenceReportCard
              title="Gen-Z Carbonated Beverage Preferences"
              category="Beverages"
              insight="Emerging preference shift toward natural sweeteners detected across 340+ campus nodes. Aspartame-based beverages showing 12% decline in repeat purchase intent."
            />
            <IntelligenceReportCard
              title="Plant-Based Dairy Texture Penalties"
              category="Dairy"
              insight="Oat and almond bases demonstrate consistent viscosity deficits vs. dairy counterparts. Oil separation remains primary barrier to premium positioning."
            />
          </div>
        </div>

        {/* Row 4: My Bespoke Surveys */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">My Bespoke Surveys</h2>
          <BespokeSurveysTable surveys={surveys} />
        </div>
      </div>
    </PortalLayout>
  )
}
