import { AlertCircle } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface CriticalAlertProps {
  title: string
  message: string
}

export function CriticalAlert({ title, message }: CriticalAlertProps) {
  return (
    <Card className="p-6 bg-red-50 border border-red-100">
      <div className="flex gap-4">
        <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-semibold text-red-900 mb-2">{title}</h4>
          <p className="text-sm text-red-800 leading-relaxed">{message}</p>
        </div>
      </div>
    </Card>
  )
}
