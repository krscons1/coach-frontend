'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Download, TrendingUp } from 'lucide-react'
import { WeeklySummary } from '@/components/weekly-summary'
import { WeeklyChart } from '@/components/weekly-chart'

export default function ReportsPage() {
  const [selectedWeek, setSelectedWeek] = useState(0)

  const weeklyData = [
    {
      week: 'This Week',
      start: '2025-11-10',
      end: '2025-11-15',
      habits: [
        { name: 'Morning Exercise', completed: 6, target: 7, icon: '💪' },
        { name: 'Read', completed: 4, target: 7, icon: '📚' },
        { name: 'Meditate', completed: 6, target: 7, icon: '🧘' },
        { name: 'Drink Water', completed: 7, target: 7, icon: '💧' },
      ],
      totalCompleted: 23,
      totalTarget: 28,
      completionRate: 82,
    },
    {
      week: 'Last Week',
      start: '2025-11-03',
      end: '2025-11-09',
      habits: [
        { name: 'Morning Exercise', completed: 5, target: 7, icon: '💪' },
        { name: 'Read', completed: 5, target: 7, icon: '📚' },
        { name: 'Meditate', completed: 4, target: 7, icon: '🧘' },
        { name: 'Drink Water', completed: 7, target: 7, icon: '💧' },
      ],
      totalCompleted: 21,
      totalTarget: 28,
      completionRate: 75,
    },
  ]

  const currentWeek = weeklyData[selectedWeek]

  const handleExport = () => {
    const data = weeklyData.map(week => ({
      Week: week.week,
      'Completion Rate': `${week.completionRate}%`,
      'Completed': `${week.totalCompleted}/${week.totalTarget}`,
      Habits: week.habits.map(h => `${h.name}: ${h.completed}/${h.target}`).join('; '),
    }))

    const csv = [
      Object.keys(data[0]).join(','),
      ...data.map(row => Object.values(row).map(v => `"${v}"`).join(',')),
    ].join('\n')

    const blob = new Blob([csv], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `habit-reports-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8 pb-20">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">Reports</h1>
            <p className="text-muted-foreground">Your weekly habit summary</p>
          </div>
          <Button
            onClick={handleExport}
            variant="outline"
            className="gap-2"
          >
            <Download className="w-4 h-4" />
            Export
          </Button>
        </div>

        <div className="flex gap-2 mb-6">
          {weeklyData.map((week, idx) => (
            <Button
              key={idx}
              variant={selectedWeek === idx ? 'default' : 'outline'}
              onClick={() => setSelectedWeek(idx)}
              className={selectedWeek === idx ? 'bg-primary' : ''}
            >
              {week.week}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardContent className="pt-6">
              <p className="text-xs text-muted-foreground mb-2">Completion Rate</p>
              <p className="text-3xl font-bold text-primary">{currentWeek.completionRate}%</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <p className="text-xs text-muted-foreground mb-2">Completed</p>
              <p className="text-3xl font-bold text-accent">{currentWeek.totalCompleted}</p>
              <p className="text-xs text-muted-foreground">of {currentWeek.totalTarget}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <p className="text-xs text-muted-foreground mb-2">Period</p>
              <p className="text-sm font-bold">{currentWeek.start.slice(5)}</p>
              <p className="text-xs text-muted-foreground">to {currentWeek.end.slice(5)}</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Weekly Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <WeeklyChart data={weeklyData} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Habit Breakdown</CardTitle>
            <CardDescription>Completion for {currentWeek.week.toLowerCase()}</CardDescription>
          </CardHeader>
          <CardContent>
            <WeeklySummary habits={currentWeek.habits} />
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
