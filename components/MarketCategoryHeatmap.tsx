'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface CategoryData {
  name: string
  stickiness: number
}

const categoryData: CategoryData[] = [
  { name: 'Salty Snacks', stickiness: 62 },
  { name: 'Energy Drinks', stickiness: 45 },
  { name: 'Confectionery', stickiness: 58 },
  { name: 'Plant-Based Dairy', stickiness: 41 },
  { name: 'Carbonated Beverages', stickiness: 52 },
  { name: 'Yogurt/Dairy', stickiness: 55 },
]

function getColorByScore(score: number): string {
  if (score >= 60) return 'bg-emerald-100 border-emerald-200'
  if (score >= 50) return 'bg-blue-100 border-blue-200'
  if (score >= 40) return 'bg-yellow-100 border-yellow-200'
  return 'bg-red-100 border-red-200'
}

function getTextColorByScore(score: number): string {
  if (score >= 60) return 'text-emerald-900'
  if (score >= 50) return 'text-blue-900'
  if (score >= 40) return 'text-yellow-900'
  return 'text-red-900'
}

export function MarketCategoryHeatmap() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categoryData.map((category) => (
          <Card
            key={category.name}
            className={`border-2 bg-white cursor-pointer transition-all hover:shadow-md ${getColorByScore(
              category.stickiness
            )}`}
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-base text-slate-900">
                {category.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-slate-600">Category Stickiness</span>
                  <span
                    className={`text-2xl font-bold ${getTextColorByScore(
                      category.stickiness
                    )}`}
                  >
                    {category.stickiness}
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-sky-400 to-emerald-400 h-2 rounded-full transition-all"
                    style={{ width: `${category.stickiness}%` }}
                  />
                </div>
                <p className="text-xs text-slate-500 mt-3">
                  {category.stickiness >= 60
                    ? 'High Commercial Viability'
                    : category.stickiness >= 50
                    ? 'Moderate Opportunity'
                    : 'Monitor & Iterate'}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
