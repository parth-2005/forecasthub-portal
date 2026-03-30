import React from 'react'
import { CheckCircle, Clock, AlertCircle } from 'lucide-react'

interface Survey {
  id: string
  projectName: string
  status: 'Data Collection' | 'Processing' | 'Report Ready'
  nodesDeployed: number
  expectedCompletion: string
}

interface BespokeSurveysTableProps {
  surveys: Survey[]
}

export function BespokeSurveysTable({ surveys }: BespokeSurveysTableProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Data Collection':
        return <Clock className="w-4 h-4 text-amber-600" />
      case 'Processing':
        return <AlertCircle className="w-4 h-4 text-blue-600" />
      case 'Report Ready':
        return <CheckCircle className="w-4 h-4 text-emerald-600" />
      default:
        return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Data Collection':
        return 'bg-amber-50 text-amber-700'
      case 'Processing':
        return 'bg-blue-50 text-blue-700'
      case 'Report Ready':
        return 'bg-emerald-50 text-emerald-700'
      default:
        return 'bg-gray-50 text-gray-700'
    }
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Project Name</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Status</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Nodes Deployed</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">Expected Completion</th>
            </tr>
          </thead>
          <tbody>
            {surveys.map((survey, idx) => (
              <tr
                key={survey.id}
                className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                  idx === surveys.length - 1 ? 'border-b-0' : ''
                }`}
              >
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{survey.projectName}</td>
                <td className="px-6 py-4">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(survey.status)}`}>
                    {getStatusIcon(survey.status)}
                    {survey.status}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 font-mono">{survey.nodesDeployed}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{survey.expectedCompletion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
