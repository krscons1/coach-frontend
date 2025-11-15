'use client'

import { useState } from 'react'
import { TodayItem } from './today-item'
import { NoteModal } from './note-modal'

interface Habit {
  id: string
  name: string
  description: string
  icon: string
  color: string
  currentStreak: number
  longestStreak: number
  lastCompleted?: string
  completed: boolean
}

interface TodayListProps {
  habits: Habit[]
  setHabits: (habits: Habit[]) => void
}

export function TodayList({ habits, setHabits }: TodayListProps) {
  const [selectedHabit, setSelectedHabit] = useState<string | null>(null)
  const [noteModalOpen, setNoteModalOpen] = useState(false)

  const handleToggleHabit = (habitId: string) => {
    setHabits(
      habits.map(h =>
        h.id === habitId
          ? {
              ...h,
              completed: !h.completed,
              currentStreak: !h.completed ? h.currentStreak + 1 : Math.max(0, h.currentStreak - 1),
            }
          : h
      )
    )
  }

  const handleAddNote = (habitId: string) => {
    setSelectedHabit(habitId)
    setNoteModalOpen(true)
  }

  const handleSaveNote = (note: string) => {
    setHabits(
      habits.map(h =>
        h.id === selectedHabit ? { ...h, notes: note } : h
      )
    )
    setNoteModalOpen(false)
    setSelectedHabit(null)
  }

  return (
    <>
      <div className="space-y-3">
        {habits.map(habit => (
          <TodayItem
            key={habit.id}
            habit={habit}
            onToggle={() => handleToggleHabit(habit.id)}
            onAddNote={() => handleAddNote(habit.id)}
          />
        ))}
      </div>

      <NoteModal
        isOpen={noteModalOpen}
        onClose={() => {
          setNoteModalOpen(false)
          setSelectedHabit(null)
        }}
        onSave={handleSaveNote}
        habitName={habits.find(h => h.id === selectedHabit)?.name || ''}
      />
    </>
  )
}
