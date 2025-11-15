'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Calendar, Flame } from 'lucide-react'
import Link from 'next/link'
import { HabitCalendar } from '@/components/habit-calendar'
import { StreakChart } from '@/components/streak-chart'
import { CompletionChart } from '@/components/completion-chart'

export default function HabitDetailPage({ params }: { params: { id: string } }) {
  const [habit] = useState({
    id: params.id,
    name: 'Morning Exercise',
    description: 'Do 30 minutes of workout',
    icon: '💪',
    frequency: 'daily',
    currentStreak: 12,
    longestStreak: 45,
    createdAt: '2025-08-01',
    completionData: Array.from({ length: 30 }, (_, i) => ({
      date: new Date(2025, 10, 15 - i).toISOString().split('T')[0],
      completed: Math.random() > 0.3,
    })).reverse(),
    streakHistory: [
      { week: 'Week 1', streak: 5 },
      { week: 'Week 2', streak: 8 },
      { week: 'Week 3', streak: 10 },
      { week: 'Week 4', streak: 12 },
    ],
  })

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8 pb-20">
        <div className="mb-6">
          <Link href="/habits">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>
          
          <div className="flex items-center gap-4">
            <span className="text-5xl">{habit.icon}</span>
            <div>
              <h1 className="text-3xl font-bold">{habit.name}</h1>
              <p className="text-muted-foreground">{habit.description}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-2">
                <Flame className="w-4 h-4 text-accent" />
                <p className="text-xs text-muted-foreground">Current Streak</p>
              </div>
              <p className="text-2xl font-bold text-accent">{habit.currentStreak}</p>
              <p className="text-xs text-muted-foreground">days</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <p className="text-xs text-muted-foreground mb-2">Longest Streak</p>
              <p className="text-2xl font-bold text-primary">{habit.longestStreak}</p>
              <p className="text-xs text-muted-foreground">days</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <p className="text-xs text-muted-foreground mb-2">Frequency</p>
              <p className="text-2xl font-bold capitalize">{habit.frequency}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <p className="text-xs text-muted-foreground mb-2">Started</p>
              <p className="text-sm font-bold">{new Date(habit.createdAt).toLocaleDateString()}</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Last 30 Days
            </CardTitle>
          </CardHeader>
          <CardContent>
            <HabitCalendar completionData={habit.completionData} />
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Streak Progress</CardTitle>
              <CardDescription>Last 4 weeks</CardDescription>
            </CardHeader>
            <CardContent>
              <StreakChart data={habit.streakHistory} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Completion Rate</CardTitle>
              <CardDescription>Last 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <CompletionChart completionData={habit.completionData} />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
