import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

interface MetricCardProps {
  title: string
  value: string | number
  subtitle?: string
  icon?: LucideIcon
  variant?: 'default' | 'success' | 'warning'
  className?: string
}

export function MetricCard({
  title,
  value,
  subtitle,
  icon: Icon,
  variant = 'default',
  className,
}: MetricCardProps) {
  const bgColor = {
    default: 'bg-white border-gray-200',
    success: 'bg-emerald-50 border-emerald-100',
    warning: 'bg-red-50 border-red-100',
  }[variant]

  const iconColor = {
    default: 'text-indigo-600',
    success: 'text-emerald-600',
    warning: 'text-red-600',
  }[variant]

  return (
    <Card className={cn(`p-6 ${bgColor}`, className)}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
          {subtitle && <p className="text-sm text-gray-600 mt-2">{subtitle}</p>}
        </div>
        {Icon && <Icon className={cn('w-8 h-8 flex-shrink-0', iconColor)} />}
      </div>
    </Card>
  )
}
