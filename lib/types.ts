export interface Habit {
  id: string
  name: string
  description: string
  frequency: 'daily' | 'weekly'
  icon: string
  color: string
  currentStreak: number
  longestStreak: number
  lastCompleted?: string
  createdAt: string
}

export interface HabitCheckIn {
  id: string
  habitId: string
  completedAt: string
  notes?: string
}

export interface User {
  id: string
  email: string
  name?: string
  createdAt: string
}
