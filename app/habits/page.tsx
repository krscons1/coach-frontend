'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { Plus, Trash2 } from 'lucide-react'

interface Habit {
  id: string
  name: string
  description: string
  icon: string
  frequency: string
  currentStreak: number
  longestStreak: number
}

export default function HabitsPage() {
  const [habits, setHabits] = useState<Habit[]>([
    {
      id: '1',
      name: 'Morning Exercise',
      description: 'Do 30 minutes of workout',
      icon: '💪',
      frequency: 'daily',
      currentStreak: 12,
      longestStreak: 45,
    },
    {
      id: '2',
      name: 'Read',
      description: 'Read for 20 minutes',
      icon: '📚',
      frequency: 'daily',
      currentStreak: 5,
      longestStreak: 20,
    },
    {
      id: '3',
      name: 'Meditate',
      description: 'Mindfulness meditation',
      icon: '🧘',
      frequency: 'daily',
      currentStreak: 8,
      longestStreak: 30,
    },
  ])

  const [newHabitName, setNewHabitName] = useState('')
  const [showForm, setShowForm] = useState(false)

  const handleDeleteHabit = (id: string) => {
    setHabits(habits.filter(h => h.id !== id))
  }

  const handleAddHabit = () => {
    if (newHabitName.trim()) {
      const newHabit: Habit = {
        id: Date.now().toString(),
        name: newHabitName,
        description: '',
        icon: '⭐',
        frequency: 'daily',
        currentStreak: 0,
        longestStreak: 0,
      }
      setHabits([...habits, newHabit])
      setNewHabitName('')
      setShowForm(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8 pb-20">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">My Habits</h1>
            <p className="text-muted-foreground">Manage and track your habits</p>
          </div>
          <Button
            onClick={() => setShowForm(!showForm)}
            className="bg-primary hover:bg-primary/90"
          >
            <Plus className="w-4 h-4 mr-2" />
            New Habit
          </Button>
        </div>

        {showForm && (
          <Card className="mb-6 bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="flex gap-2">
                <Input
                  placeholder="Habit name..."
                  value={newHabitName}
                  onChange={(e) => setNewHabitName(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAddHabit()}
                  autoFocus
                />
                <Button onClick={handleAddHabit} className="bg-primary hover:bg-primary/90">
                  Add
                </Button>
                <Button variant="outline" onClick={() => setShowForm(false)}>
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid gap-4">
          {habits.map(habit => (
            <Card key={habit.id} className="hover:border-primary/50 transition-colors">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">{habit.icon}</span>
                    <div>
                      <Link href={`/habits/${habit.id}`}>
                        <CardTitle className="hover:text-primary transition-colors">
                          {habit.name}
                        </CardTitle>
                      </Link>
                      <CardDescription>{habit.description}</CardDescription>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDeleteHabit(habit.id)}
                    className="text-destructive hover:text-destructive/90 hover:bg-destructive/10"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-6">
                  <div>
                    <p className="text-xs text-muted-foreground">Current Streak</p>
                    <p className="text-lg font-semibold text-primary">{habit.currentStreak} days</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Longest Streak</p>
                    <p className="text-lg font-semibold text-accent">{habit.longestStreak} days</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {habits.length === 0 && (
          <Card className="text-center p-8">
            <p className="text-muted-foreground mb-4">No habits yet. Create one to get started!</p>
            <Button onClick={() => setShowForm(true)} className="bg-primary hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              Create Your First Habit
            </Button>
          </Card>
        )}
      </main>
    </div>
  )
}
