'use client'

import { PortalLayout } from '@/components/PortalLayout'
import { ActiveDeploymentsTable } from '@/components/ActiveDeploymentsTable'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

export default function MyDeploymentsPage() {
  return (
    <PortalLayout>
      <div className="flex flex-col gap-8 p-8">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              My Active Deployments
            </h1>
            <p className="mt-2 text-base text-gray-600">
              Real-time campus network data acquisition & intelligence requests
            </p>
          </div>
          <Button
            className="flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white"
          >
            <Plus className="w-4 h-4" />
            Deploy New Campus Survey
          </Button>
        </div>

        <div>
          <ActiveDeploymentsTable />
        </div>
      </div>
    </PortalLayout>
  )
}
