'use client'

import { Card } from '@/components/ui/card'

interface CompletionData {
  date: string
  completed: boolean
}

interface HabitCalendarProps {
  completionData: CompletionData[]
}

export function HabitCalendar({ completionData }: HabitCalendarProps) {
  const weeks: CompletionData[][] = []
  for (let i = 0; i < completionData.length; i += 7) {
    weeks.push(completionData.slice(i, i + 7))
  }

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  return (
    <div className="space-y-4">
      <div className="flex gap-1 justify-between text-xs font-medium text-muted-foreground">
        {weekDays.map(day => (
          <div key={day} className="w-8 h-8 flex items-center justify-center">
            {day}
          </div>
        ))}
      </div>

      <div className="space-y-1">
        {weeks.map((week, weekIdx) => (
          <div key={weekIdx} className="flex gap-1">
            {week.map((day, dayIdx) => (
              <div
                key={`${weekIdx}-${dayIdx}`}
                className={`w-8 h-8 rounded-md transition-colors ${
                  day.completed
                    ? 'bg-primary hover:bg-primary/80'
                    : 'bg-muted hover:bg-muted-foreground/20'
                }`}
                title={day.date}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="flex gap-2 text-xs text-muted-foreground pt-2">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded bg-muted" />
          <span>Not completed</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded bg-primary" />
          <span>Completed</span>
        </div>
      </div>
    </div>
  )
}
