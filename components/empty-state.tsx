'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { type LucideIcon } from 'lucide-react'

interface EmptyStateProps {
  icon: LucideIcon
  title: string
  description: string
  action?: {
    label: string
    onClick: () => void
  }
}

export function EmptyState({ icon: Icon, title, description, action }: EmptyStateProps) {
  return (
    <Card className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="mb-4 p-3 rounded-full bg-primary/10">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-6 max-w-xs">{description}</p>
      {action && (
        <Button onClick={action.onClick} className="bg-primary hover:bg-primary/90">
          {action.label}
        </Button>
      )}
    </Card>
  )
}
