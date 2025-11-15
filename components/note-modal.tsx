'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

interface NoteModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (note: string) => void
  habitName: string
}

export function NoteModal({ isOpen, onClose, onSave, habitName }: NoteModalProps) {
  const [note, setNote] = useState('')

  const handleSave = () => {
    onSave(note)
    setNote('')
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add Note</DialogTitle>
          <DialogDescription>
            Add a note for {habitName}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <Input
            placeholder="How did it go? Any insights?"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="min-h-24 p-3 align-top"
            autoFocus
          />
          
          <div className="flex gap-2 justify-end">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleSave} className="bg-primary hover:bg-primary/90">
              Save Note
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
