'use client'

import { PortalLayout } from '@/components/PortalLayout'
import { Download, FileJson, FileText, Database, CheckCircle, Clock, Lock } from 'lucide-react'
import { useState } from 'react'

export default function ExportPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>('primary')

  const datasets = [
    {
      id: 'primary',
      name: 'Primary Sensory Evaluations',
      description: 'Raw sensory scores from all 176 evaluations (44 students × 4 samples)',
      fileSize: '2.4 MB',
      records: '176 complete evaluations',
      formats: ['CSV', 'JSON', 'Excel'],
      status: 'ready',
      lastUpdated: '2 hours ago',
      contents: [
        'Student ID (anonymized)',
        'Sample evaluated',
        'All 6 sensory attributes (0-10 scale)',
        'Timestamp',
        'Device/tasting environment',
        'Student demographic segment',
      ],
    },
    {
      id: 'statistical',
      name: 'Statistical Summary & Aggregations',
      description: 'Computed means, medians, standard deviations, and confidence intervals',
      fileSize: '1.2 MB',
      records: '24 aggregate metrics',
      formats: ['CSV', 'Excel', 'PDF'],
      status: 'ready',
      lastUpdated: '2 hours ago',
      contents: [
        'Mean scores per attribute/sample',
        '95% confidence intervals',
        'Standard deviation & variance',
        'Sample-to-sample pairwise comparisons',
        'Statistical significance (t-tests)',
        'Effect size calculations',
      ],
    },
    {
      id: 'environmental',
      name: 'Environmental & Contextual Data',
      description: 'Testing conditions, student metadata, and environmental factors',
      fileSize: '890 KB',
      records: '44 student profiles + 176 session logs',
      formats: ['CSV', 'JSON'],
      status: 'ready',
      lastUpdated: '1 hour ago',
      contents: [
        'Tasting session location & time',
        'Room temperature & humidity',
        'Student age, gender, dietary restrictions',
        'Prior brand familiarity ratings',
        'Device calibration records',
        'Session quality flags',
      ],
    },
    {
      id: 'methodology',
      name: 'Methodology & Protocol Documentation',
      description: 'Double-blind protocols, study design, and evaluation criteria',
      fileSize: '450 KB',
      records: 'Comprehensive methodology',
      formats: ['PDF', 'Word', 'Markdown'],
      status: 'ready',
      lastUpdated: 'Static',
      contents: [
        'Study design & randomization details',
        'Double-blind execution procedures',
        'Training materials for evaluators',
        'Evaluation scale definitions',
        'Quality assurance protocols',
        'Data validation procedures',
      ],
    },
    {
      id: 'sample4_deep',
      name: 'Sample 4 Deep-Dive Analysis',
      description: 'Failure analysis dataset: Why Sample 4 failed systematically',
      fileSize: '1.8 MB',
      records: '176 Sample 4 evaluations with annotations',
      formats: ['CSV', 'JSON', 'Excel'],
      status: 'ready',
      lastUpdated: '2 hours ago',
      contents: [
        'Individual scores for each attribute',
        'Failure pattern identification',
        'Post-evaluation feedback notes',
        'Texture defect observations',
        'Oil retention anomalies',
        'Student sentiment annotations',
      ],
    },
  ]

  const downloadOptions = [
    { label: 'CSV Format', icon: FileText, description: 'Universal spreadsheet format' },
    { label: 'JSON Format', icon: FileJson, description: 'Structured data format for analysis' },
    { label: 'Excel Workbook', icon: Database, description: 'Multiple sheets with pivot tables' },
  ]

  const handleExpand = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id)
  }

  return (
    <PortalLayout>
      <div className="p-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Export Raw Data</h1>
          <p className="text-gray-600 mt-2">Download comprehensive datasets, raw evaluations, and analytical outputs</p>
        </div>

        {/* Download Options Bar */}
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-indigo-900 mb-4">Download Format Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {downloadOptions.map((option) => {
              const Icon = option.icon
              return (
                <button
                  key={option.label}
                  className="border border-indigo-300 bg-white rounded-lg p-4 hover:bg-indigo-50 transition-colors text-left"
                >
                  <div className="flex items-start gap-3">
                    <Icon className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">{option.label}</p>
                      <p className="text-xs text-gray-600 mt-1">{option.description}</p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Datasets */}
        <div className="space-y-4 mb-8">
          {datasets.map((dataset) => (
            <div key={dataset.id} className="bg-white rounded-lg border border-gray-200 shadow-sm">
              {/* Header */}
              <button
                onClick={() => handleExpand(dataset.id)}
                className="w-full p-6 flex items-start justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="text-left flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-semibold text-gray-900">{dataset.name}</h3>
                    <span className="flex items-center gap-1 text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
                      <CheckCircle className="w-3 h-3" />
                      Ready
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{dataset.description}</p>
                  <div className="flex gap-4 mt-3 text-xs text-gray-500">
                    <span>{dataset.fileSize}</span>
                    <span>•</span>
                    <span>{dataset.records}</span>
                  </div>
                </div>
                <div className="ml-4 flex flex-col items-end gap-2">
                  <Download className="w-5 h-5 text-indigo-600" />
                  <span className="text-xs text-gray-500">{dataset.formats.join(', ')}</span>
                </div>
              </button>

              {/* Expanded Content */}
              {expandedSection === dataset.id && (
                <div className="border-t border-gray-200 bg-gray-50 p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Dataset Contents:</h4>
                  <ul className="space-y-2 mb-4">
                    {dataset.contents.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-indigo-600 font-bold mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                    <Clock className="w-3 h-3" />
                    <span>Last updated: {dataset.lastUpdated}</span>
                  </div>
                  <div className="flex gap-3">
                    {dataset.formats.map((format) => (
                      <button
                        key={format}
                        className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        Download {format}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Data Security & Compliance */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="flex gap-4">
            <Lock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Data Security & Compliance</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>✓ All student identifiers are anonymized (ID-based, not PII)</li>
                <li>✓ Double-blind protocol ensures unbiased evaluation records</li>
                <li>✓ Data encrypted in transit and at rest (AES-256)</li>
                <li>✓ Access logging: Your organization only, audit trail maintained</li>
                <li>✓ GDPR compliant, student consent on file for data usage</li>
                <li>✓ Commercial-grade data integrity validation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Data Analysis Support */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Analysis Templates</h3>
            <p className="text-sm text-gray-600 mb-4">Pre-built Excel/R templates for common analyses:</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-indigo-600">→</span>
                <span>Statistical significance testing (ANOVA, t-tests)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-indigo-600">→</span>
                <span>Sensory profile clustering & segmentation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-indigo-600">→</span>
                <span>Competitive benchmarking tools</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-indigo-600">→</span>
                <span>Time-series forecasting (market adoption)</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">API Access</h3>
            <p className="text-sm text-gray-600 mb-4">Programmatic access to raw data for automated workflows:</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-indigo-600">→</span>
                <span>REST API with OAuth 2.0 authentication</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-indigo-600">→</span>
                <span>Pagination & filtering for large datasets</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-indigo-600">→</span>
                <span>Webhook notifications on data updates</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-indigo-600">→</span>
                <span>Rate limiting: 1000 req/hour per API key</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PortalLayout>
  )
}
