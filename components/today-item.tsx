'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Flame, MessageSquare } from 'lucide-react'

interface HabitItemProps {
  habit: {
    id: string
    name: string
    description: string
    icon: string
    currentStreak: number
    completed: boolean
  }
  onToggle: () => void
  onAddNote: () => void
}

export function TodayItem({ habit, onToggle, onAddNote }: HabitItemProps) {
  return (
    <Card
      className={`p-4 transition-all duration-200 hover:border-primary/50 ${
        habit.completed ? 'bg-primary/5 border-primary/20' : 'hover:shadow-md'
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-start gap-3 flex-1">
          <Checkbox
            checked={habit.completed}
            onCheckedChange={onToggle}
            className="mt-1 transition-all"
            aria-label={`Mark ${habit.name} as complete`}
          />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-xl transition-transform hover:scale-110">{habit.icon}</span>
              <div>
                <h3
                  className={`font-semibold transition-all ${
                    habit.completed ? 'line-through text-muted-foreground' : 'text-foreground'
                  }`}
                >
                  {habit.name}
                </h3>
                <p className="text-sm text-muted-foreground">{habit.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="flex items-center gap-1 justify-end">
              <Flame className="w-4 h-4 text-accent animate-pulse" />
              <span className="font-semibold text-accent">{habit.currentStreak}</span>
            </div>
            <p className="text-xs text-muted-foreground">day streak</p>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={onAddNote}
            className="transition-all hover:bg-primary/10"
            title="Add note"
          >
            <MessageSquare className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  )
}
