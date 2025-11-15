'use client'

import Link from 'next/link'
import { useAuth } from '@/hooks/use-auth'
import { Button } from '@/components/ui/button'
import { Menu, LogOut, X } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const { logout } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/today" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm">
            HC
          </div>
          <span className="font-semibold hidden sm:inline text-primary">Habit Coach</span>
        </Link>

        <nav className="hidden sm:flex items-center gap-1">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/today">Today</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/habits">Habits</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/reports">Reports</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/settings">Settings</Link>
          </Button>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={logout}
            className="hidden sm:flex gap-2"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="sm:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>

      {menuOpen && (
        <div className="sm:hidden border-t border-border bg-card animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col p-4 gap-2">
            <Button variant="ghost" className="justify-start" asChild>
              <Link href="/today">Today</Link>
            </Button>
            <Button variant="ghost" className="justify-start" asChild>
              <Link href="/habits">Habits</Link>
            </Button>
            <Button variant="ghost" className="justify-start" asChild>
              <Link href="/reports">Reports</Link>
            </Button>
            <Button variant="ghost" className="justify-start" asChild>
              <Link href="/settings">Settings</Link>
            </Button>
            <Button
              variant="destructive"
              className="justify-start w-full mt-2"
              onClick={logout}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
