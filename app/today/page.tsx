'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { TodayList } from '@/components/today-list'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function TodayPage() {
  const [habits, setHabits] = useState([
    {
      id: '1',
      name: 'Morning Exercise',
      description: 'Do 30 minutes of workout',
      frequency: 'daily' as const,
      icon: '💪',
      color: 'bg-primary',
      currentStreak: 12,
      longestStreak: 45,
      lastCompleted: '2025-11-14',
      createdAt: '2025-08-01',
      completed: false,
    },
    {
      id: '2',
      name: 'Read',
      description: 'Read for 20 minutes',
      frequency: 'daily' as const,
      icon: '📚',
      color: 'bg-accent',
      currentStreak: 5,
      longestStreak: 20,
      lastCompleted: '2025-11-13',
      createdAt: '2025-09-15',
      completed: false,
    },
    {
      id: '3',
      name: 'Meditate',
      description: 'Mindfulness meditation',
      frequency: 'daily' as const,
      icon: '🧘',
      color: 'bg-blue-500',
      currentStreak: 8,
      longestStreak: 30,
      lastCompleted: '2025-11-14',
      createdAt: '2025-08-20',
      completed: false,
    },
    {
      id: '4',
      name: 'Drink Water',
      description: 'Stay hydrated',
      frequency: 'daily' as const,
      icon: '💧',
      color: 'bg-cyan-500',
      currentStreak: 25,
      longestStreak: 60,
      lastCompleted: '2025-11-14',
      createdAt: '2025-07-01',
      completed: false,
    },
  ])

  const completedCount = habits.filter(h => h.completed).length
  const totalCount = habits.length

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8 pb-24">
        <Card className="mb-6 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 animate-in fade-in slide-in-from-top-4">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Today's Progress</CardTitle>
                <CardDescription>
                  {completedCount} of {totalCount} habits completed
                </CardDescription>
              </div>
              <div className="text-4xl font-bold text-primary transition-all">
                {Math.round((completedCount / totalCount) * 100)}%
              </div>
            </div>
            <div className="w-full bg-muted rounded-full h-2 mt-4">
              <div
                className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-500"
                style={{ width: `${(completedCount / totalCount) * 100}%` }}
              />
            </div>
          </CardHeader>
        </Card>

        <TodayList habits={habits} setHabits={setHabits} />
      </main>
    </div>
  )
}
