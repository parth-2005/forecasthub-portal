'use client'

import { PortalLayout } from '@/components/PortalLayout'
import { MarketCategoryHeatmap } from '@/components/MarketCategoryHeatmap'

export default function MarketCategoriesPage() {
  return (
    <PortalLayout>
      <div className="flex flex-col gap-8 p-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Market Categories
          </h1>
          <p className="mt-2 text-base text-gray-600">
            Industry stickiness & commercial viability across F&B categories
          </p>
        </div>

        <MarketCategoryHeatmap />
      </div>
    </PortalLayout>
  )
}
