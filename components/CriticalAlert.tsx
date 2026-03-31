'use client'

import { AlertTriangle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export function CriticalAlert() {
  const router = useRouter()

  return (
    <Alert
      variant="destructive"
      className="border-red-300 bg-red-50/80 shadow-sm [&>svg]:text-red-600"
    >
      <AlertTriangle className="mt-0.5 h-4 w-4 animate-pulse" />
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="space-y-1.5">
          <AlertTitle className="text-sm font-bold uppercase tracking-wide text-red-900">
            CRITICAL R&D ALERT: Pull Sample 4
          </AlertTitle>
          <AlertDescription className="text-sm leading-relaxed text-red-800">
            Live ground-truth data indicates a severe fryer calibration error (-1.33 oil
            penalty). Product is unviable and will damage brand equity if distributed. Recommend
            immediate pipeline halt.
          </AlertDescription>
        </div>
        <Button
          variant="destructive"
          className="h-8 whitespace-nowrap px-3 text-xs font-semibold uppercase tracking-wide"
          onClick={() => router.push('/market-risk')}
        >
          View Audit Details
        </Button>
      </div>
    </Alert>
  )
}
