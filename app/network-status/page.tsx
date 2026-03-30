'use client'

import { PortalLayout } from '@/components/PortalLayout'
import { Activity, CheckCircle, AlertCircle, MapPin } from 'lucide-react'

export default function NetworkStatusPage() {
  const regions = [
    {
      name: 'North America',
      nodes: 520,
      status: 'healthy',
      uptime: '99.9%',
      avgLatency: '45ms',
    },
    {
      name: 'Europe',
      nodes: 380,
      status: 'healthy',
      uptime: '99.8%',
      avgLatency: '52ms',
    },
    {
      name: 'Asia-Pacific',
      nodes: 612,
      status: 'healthy',
      uptime: '99.7%',
      avgLatency: '78ms',
    },
    {
      name: 'Latin America',
      nodes: 268,
      status: 'healthy',
      uptime: '99.6%',
      avgLatency: '65ms',
    },
    {
      name: 'Middle East & Africa',
      nodes: 220,
      status: 'healthy',
      uptime: '99.5%',
      avgLatency: '89ms',
    },
  ]

  return (
    <PortalLayout>
      <div className="p-8">
        <div className="flex items-center gap-2 mb-2">
          <Activity className="w-6 h-6 text-emerald-600" />
          <h1 className="text-3xl font-bold text-gray-900">Node Network Status</h1>
        </div>
        <p className="text-gray-600 mb-8">Real-time campus evaluation network health metrics</p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Total Active Nodes</p>
            <p className="text-3xl font-bold text-gray-900">2,000+</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Regions</p>
            <p className="text-3xl font-bold text-gray-900">5</p>
          </div>
          <div className="bg-emerald-50 rounded-lg border border-emerald-200 shadow-sm p-6">
            <p className="text-xs text-emerald-600 uppercase tracking-wide font-semibold mb-2">Network Status</p>
            <p className="text-2xl font-bold text-emerald-700">All Operational</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Avg. Uptime</p>
            <p className="text-3xl font-bold text-gray-900">99.7%</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Avg. Latency</p>
            <p className="text-3xl font-bold text-gray-900">66ms</p>
          </div>
        </div>

        <h2 className="text-lg font-semibold text-gray-900 mb-4">Regional Distribution</h2>
        <div className="space-y-4">
          {regions.map((region) => (
            <div
              key={region.name}
              className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{region.name}</h3>
                    <p className="text-sm text-gray-600 mt-0.5">{region.nodes} active evaluation nodes</p>
                  </div>
                </div>
                {region.status === 'healthy' && (
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                )}
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-xs text-gray-500">Uptime</p>
                  <p className="font-mono text-gray-900 mt-0.5">{region.uptime}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Avg Latency</p>
                  <p className="font-mono text-gray-900 mt-0.5">{region.avgLatency}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PortalLayout>
  )
}
