'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardAction } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Plus } from 'lucide-react'

interface DeploymentRow {
  projectId: string
  category: string
  demographics: string
  activeNodes: string
  status: string
  completion: number
}

const deployments: DeploymentRow[] = [
  {
    projectId: 'LOC-892',
    category: 'Salty Snacks (Cream & Onion)',
    demographics: 'Gen-Z (18-24)',
    activeNodes: '44 Universities',
    status: 'Analysis Complete',
    completion: 100,
  },
  {
    projectId: 'LOC-904',
    category: 'Energy Drinks',
    demographics: 'Tier-2 Tech Campuses',
    activeNodes: '12 Universities',
    status: 'Data Collection',
    completion: 65,
  },
  {
    projectId: 'LOC-911',
    category: 'Instant Noodles',
    demographics: 'Pan-India Liberal Arts',
    activeNodes: 'Pending Allocation',
    status: 'Drafting Survey',
    completion: 0,
  },
]

function getStatusBadgeVariant(status: string): 'default' | 'secondary' | 'destructive' | 'outline' {
  if (status === 'Analysis Complete') return 'default'
  if (status === 'Data Collection') return 'secondary'
  return 'outline'
}

export function ActiveDeploymentsTable() {
  return (
    <Card className="border-slate-200/80 bg-white">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg text-slate-900">
            Active Campus Deployments & Intelligence Requests
          </CardTitle>
          <CardAction>
            <Button
              size="sm"
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              <Plus className="w-4 h-4" />
              New Intelligence Request
            </Button>
          </CardAction>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Project ID
                </TableHead>
                <TableHead className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Category
                </TableHead>
                <TableHead className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Target Demographics
                </TableHead>
                <TableHead className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Active Nodes
                </TableHead>
                <TableHead className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Status
                </TableHead>
                <TableHead className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Completion
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {deployments.map((deployment) => (
                <TableRow key={deployment.projectId} className="hover:bg-slate-50">
                  <TableCell className="font-semibold text-slate-900">{deployment.projectId}</TableCell>
                  <TableCell className="text-sm text-slate-700">{deployment.category}</TableCell>
                  <TableCell className="text-sm text-slate-600">{deployment.demographics}</TableCell>
                  <TableCell className="text-sm text-slate-600">{deployment.activeNodes}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusBadgeVariant(deployment.status)} className="text-xs">
                      {deployment.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="w-full space-y-1">
                      <Progress value={deployment.completion} className="h-2" />
                      <p className="text-xs text-slate-600">{deployment.completion}%</p>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
