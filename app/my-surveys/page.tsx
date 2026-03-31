'use client'

import { PortalLayout } from '@/components/PortalLayout'
import { ActiveDeploymentsTable } from '@/components/ActiveDeploymentsTable'

export default function MyDeploymentsPage() {
  return (
    <PortalLayout>
      <div className="flex flex-col gap-8 p-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            My Active Deployments
          </h1>
          <p className="mt-2 text-base text-gray-600">
            Real-time campus network data acquisition & intelligence requests
          </p>
        </div>

        <div>
          <ActiveDeploymentsTable />
        </div>
      </div>
    </PortalLayout>
  )
}
