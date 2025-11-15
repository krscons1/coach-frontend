'use client'

import { Card } from '@/components/ui/card'
import { CheckCircle2, Circle } from 'lucide-react'

interface Habit {
  name: string
  completed: number
  target: number
  icon: string
}

interface WeeklySummaryProps {
  habits: Habit[]
}

export function WeeklySummary({ habits }: WeeklySummaryProps) {
  return (
    <div className="space-y-3">
      {habits.map((habit, idx) => {
        const completionRate = Math.round((habit.completed / habit.target) * 100)
        const isComplete = habit.completed === habit.target

        return (
          <div key={idx} className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors">
            <div className="flex items-center gap-3 flex-1">
              <span className="text-2xl">{habit.icon}</span>
              <div className="flex-1">
                <p className="font-medium text-sm">{habit.name}</p>
                <div className="w-full bg-muted rounded-full h-2 mt-1">
                  <div
                    className="bg-primary h-2 rounded-full transition-all"
                    style={{ width: `${completionRate}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-right w-12">
                {habit.completed}/{habit.target}
              </span>
              {isComplete ? (
                <CheckCircle2 className="w-5 h-5 text-accent" />
              ) : (
                <Circle className="w-5 h-5 text-muted-foreground" />
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
