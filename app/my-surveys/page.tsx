'use client'

import { PortalLayout } from '@/components/PortalLayout'
import { Lock, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function MySurveysPage() {
  return (
    <PortalLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              <Lock className="w-8 h-8 text-indigo-600" />
              My Paid Surveys
            </h1>
            <p className="text-gray-600 mt-2">Custom sensory research commissioned by your organization</p>
          </div>
          <Button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white">
            <Plus className="w-4 h-4" />
            Commission New Survey
          </Button>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-12 text-center">
          <Lock className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No Custom Surveys Yet</h3>
          <p className="text-gray-600 mb-6">Commission a custom sensory research project tailored to your product development needs</p>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
            Request Custom Survey
          </Button>
        </div>
      </div>
    </PortalLayout>
  )
}
