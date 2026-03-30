'use client'

import { PortalLayout } from '@/components/PortalLayout'
import { BarChart, Bar, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { AlertCircle } from 'lucide-react'

export default function SensoryDeconstructionPage() {
  // Detailed sensory attribute scores for each sample
  const attributeData = [
    {
      attribute: 'Acid/Tang',
      sample1: 6.4,
      sample2: 6.2,
      sample3: 7.2,
      sample4: 6.8,
    },
    {
      attribute: 'Base Taste',
      sample1: 7.8,
      sample2: 7.5,
      sample3: 8.1,
      sample4: 5.4,
    },
    {
      attribute: 'Structural Rigidity',
      sample1: 7.1,
      sample2: 7.3,
      sample3: 8.5,
      sample4: 3.2,
    },
    {
      attribute: 'Dissolve Rate',
      sample1: 6.7,
      sample2: 6.9,
      sample3: 6.9,
      sample4: 7.1,
    },
    {
      attribute: 'Oil Retention',
      sample1: 7.2,
      sample2: 7.4,
      sample3: 7.8,
      sample4: 2.1,
    },
    {
      attribute: 'Aftertaste',
      sample1: 6.9,
      sample2: 6.8,
      sample3: 7.4,
      sample4: 5.2,
    },
  ]

  // Sample profile clustering
  const clusterData = [
    { x: 7.5, y: 7.3, name: 'Sample 1', color: '#6366f1' },
    { x: 7.4, y: 7.2, name: 'Sample 2', color: '#6366f1' },
    { x: 8.0, y: 7.8, name: 'Sample 3', color: '#10b981' },
    { x: 4.6, y: 4.8, name: 'Sample 4', color: '#dc2626' },
  ]

  // Penalty breakdown
  const penaltyData = [
    { category: 'Structural Rigidity Gap', penalty: -1.8 },
    { category: 'Oil Retention Penalty', penalty: -1.33 },
    { category: 'Base Taste Deficit', penalty: -1.2 },
    { category: 'Aftertaste Quality', penalty: -0.8 },
  ]

  return (
    <PortalLayout>
      <div className="p-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Sensory Deconstruction</h1>
          <p className="text-gray-600 mt-2">Attribute-Level Analysis - Understanding Product Physics</p>
        </div>

        {/* Section 1: Attribute Comparison */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Sensory Attributes by Sample (Scale: 0-10)</h2>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={attributeData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="attribute" stroke="#6b7280" />
              <YAxis domain={[0, 10]} stroke="#6b7280" />
              <Tooltip
                contentStyle={{ backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '6px' }}
                formatter={(value) => value.toFixed(1)}
              />
              <Legend />
              <Bar dataKey="sample1" fill="#6366f1" name="Sample 1" radius={[4, 4, 0, 0]} />
              <Bar dataKey="sample2" fill="#6366f1" name="Sample 2" radius={[4, 4, 0, 0]} opacity={0.8} />
              <Bar dataKey="sample3" fill="#10b981" name="Sample 3 (Winner)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="sample4" fill="#dc2626" name="Sample 4" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-xs text-gray-500 mt-4">
            Sample 3 demonstrates superiority across structural integrity metrics. Sample 4 reveals critical failures in rigidity and oil retention, confirming commercial unviability.
          </p>
        </div>

        {/* Section 2: Profile Clustering */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Sensory Profile Space</h2>
          <p className="text-sm text-gray-600 mb-4">X-axis: Structural Integrity | Y-axis: Flavor Profile Quality</p>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis type="number" dataKey="x" name="Structural Integrity" stroke="#6b7280" domain={[3, 8.5]} />
              <YAxis type="number" dataKey="y" name="Flavor Quality" stroke="#6b7280" domain={[3, 8.5]} />
              <Tooltip
                contentStyle={{ backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '6px' }}
                cursor={{ fill: 'rgba(99, 102, 241, 0.1)' }}
                formatter={(value) => value.toFixed(1)}
              />
              <Scatter name="Sample 1" data={[clusterData[0]]} fill="#6366f1" />
              <Scatter name="Sample 2" data={[clusterData[1]]} fill="#6366f1" opacity={0.7} />
              <Scatter name="Sample 3" data={[clusterData[2]]} fill="#10b981" />
              <Scatter name="Sample 4" data={[clusterData[3]]} fill="#dc2626" />
            </ScatterChart>
          </ResponsiveContainer>
          <p className="text-xs text-gray-500 mt-4">
            Samples 1, 2, and 3 cluster together in acceptable sensory space. Sample 4 is isolated in the failure quadrant, indicating systematic product flaws.
          </p>
        </div>

        {/* Section 3: Penalty Breakdown */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Manufacturing & Formulation Penalties</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={penaltyData} layout="vertical" margin={{ top: 0, right: 30, left: 250, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis type="number" domain={[-2, 0]} stroke="#6b7280" />
              <YAxis dataKey="category" type="category" stroke="#6b7280" width={240} tick={{ fontSize: 12 }} />
              <Tooltip
                contentStyle={{ backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '6px' }}
                formatter={(value) => value.toFixed(2)}
              />
              <Bar dataKey="penalty" fill="#dc2626" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-xs text-gray-500 mt-4">
            Sample 4 cumulative penalties total -5.13 points, primarily driven by structural rigidity defects and fryer-oil retention issues that compound during production.
          </p>
        </div>

        {/* Alert Box */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 flex gap-4">
          <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-red-900 mb-1">Sensory Physics Verdict</h3>
            <p className="text-sm text-red-800">
              Sample 4 exhibits statistically significant deviations across 4 of 6 critical attributes. The structural rigidity failure (8.5 vs 3.2 differential) indicates formulation problems that cannot be resolved through packaging or marketing. Recommend complete R&D reformulation.
            </p>
          </div>
        </div>
      </div>
    </PortalLayout>
  )
}
