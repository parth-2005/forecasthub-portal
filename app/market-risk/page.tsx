'use client'

import { PortalLayout } from '@/components/PortalLayout'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { TrendingDown, AlertTriangle, Shield } from 'lucide-react'

export default function MarketRiskPage() {
  // Market share simulation data
  const marketShareData = [
    { month: 'Month 1', sample3: 24, competitors: 76 },
    { month: 'Month 2', sample3: 26, competitors: 74 },
    { month: 'Month 3', sample3: 28, competitors: 72 },
    { month: 'Month 4', sample3: 31, competitors: 69 },
    { month: 'Month 5', sample3: 35, competitors: 65 },
    { month: 'Month 6', sample3: 38, competitors: 62 },
  ]

  // Substitution vulnerability by attribute
  const vulnerabilityData = [
    { attribute: 'Taste Profile', vulnerability: 22, sample3Score: 8.1, competitorAvg: 6.8 },
    { attribute: 'Structural Quality', vulnerability: 34, sample3Score: 8.5, competitorAvg: 6.2 },
    { attribute: 'Oil Sensation', vulnerability: 28, sample3Score: 7.8, competitorAvg: 6.5 },
    { attribute: 'Aftertaste', vulnerability: 19, sample3Score: 7.4, competitorAvg: 6.3 },
    { attribute: 'Overall Crunch', vulnerability: 31, sample3Score: 8.2, competitorAvg: 6.1 },
  ]

  // Risk matrix data
  const riskSegments = [
    { name: 'High Risk', value: 18, color: '#dc2626' },
    { name: 'Medium Risk', value: 32, color: '#f59e0b' },
    { name: 'Low Risk', value: 50, color: '#10b981' },
  ]

  // Competitor threat analysis
  const competitorData = [
    { competitor: 'Brand A', threatLevel: 65, stickiness: 58, agility: 72 },
    { competitor: 'Brand B', threatLevel: 48, stickiness: 52, agility: 58 },
    { competitor: 'Brand C', threatLevel: 72, stickiness: 61, agility: 78 },
    { competitor: 'Brand D', threatLevel: 41, stickiness: 49, agility: 52 },
  ]

  return (
    <PortalLayout>
      <div className="p-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Market Substitution Risk</h1>
          <p className="text-gray-600 mt-2">Competitive Vulnerability Analysis & Market Share Defense</p>
        </div>

        {/* Section 1: Market Share Trajectory */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Projected Market Share: Sample 3 vs Competitors</h2>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={marketShareData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis domain={[0, 100]} stroke="#6b7280" label={{ value: 'Market Share %', angle: -90, position: 'insideLeft' }} />
              <Tooltip contentStyle={{ backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '6px' }} />
              <Legend />
              <Line
                type="monotone"
                dataKey="sample3"
                stroke="#10b981"
                strokeWidth={3}
                name="Sample 3"
                dot={{ fill: '#10b981', r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="competitors"
                stroke="#9ca3af"
                strokeWidth={2}
                name="Aggregate Competitors"
                dot={{ fill: '#9ca3af', r: 3 }}
                strokeDasharray="5 5"
              />
            </LineChart>
          </ResponsiveContainer>
          <p className="text-xs text-gray-500 mt-4">
            Sample 3&apos;s superior sensory profile is projected to drive 38% market penetration within 6 months, a 59% improvement over current baseline.
          </p>
        </div>

        {/* Section 2: Attribute-Based Vulnerability */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Substitution Risk by Sensory Attribute</h2>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={vulnerabilityData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="attribute" stroke="#6b7280" />
              <YAxis stroke="#6b7280" label={{ value: 'Vulnerability %', angle: -90, position: 'insideLeft' }} />
              <Tooltip contentStyle={{ backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '6px' }} />
              <Legend />
              <Bar dataKey="vulnerability" fill="#f59e0b" name="Substitution Risk %" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-xs text-gray-500 mt-4">
            Structural quality represents the highest substitution risk (34%), suggesting competitors are most likely to challenge Sample 3 in this dimension.
          </p>
        </div>

        {/* Section 3: Risk Segmentation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Pie Chart */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Market Segment Risk Profile</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={riskSegments}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {riskSegments.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '6px' }} />
              </PieChart>
            </ResponsiveContainer>
            <p className="text-xs text-gray-500 mt-4">
              50% of the market is defensible with Sample 3&apos;s current sensory profile. 32% requires continuous innovation to maintain competitive advantage.
            </p>
          </div>

          {/* Competitor Threats */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Competitive Threat Assessment</h2>
            <div className="space-y-4">
              {competitorData.map((competitor) => (
                <div key={competitor.competitor} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900">{competitor.competitor}</span>
                    <span className={`px-2 py-1 text-xs font-semibold rounded ${
                      competitor.threatLevel > 65 ? 'bg-red-100 text-red-700' :
                      competitor.threatLevel > 50 ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {competitor.threatLevel}% Threat
                    </span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Stickiness</span>
                      <span className="font-mono">{competitor.stickiness}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Market Agility</span>
                      <span className="font-mono">{competitor.agility}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Alert Box: High Risk Warning */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 flex gap-4 mb-8">
          <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-yellow-900 mb-1">Competitive Pressure Watch</h3>
            <p className="text-sm text-yellow-800">
              Brand C presents the highest threat level (72%) due to superior market agility (78). Recommend accelerated marketing campaign launch within Q2 to capitalize on Sample 3&apos;s sensory advantages before competitive response.
            </p>
          </div>
        </div>

        {/* Strategic Recommendation */}
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 flex gap-4">
          <Shield className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-indigo-900 mb-1">Strategic Defense Recommendation</h3>
            <p className="text-sm text-indigo-800">
              Sample 3 exhibits 8-month competitive moat based on structural rigidity and dissolution characteristics. Prioritize rapid commercialization and patent protection of formulation to defend market position before competitors reformulate to match sensory profile.
            </p>
          </div>
        </div>
      </div>
    </PortalLayout>
  )
}
