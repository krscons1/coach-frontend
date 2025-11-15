'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CheckCircle2, BarChart3, Settings, Zap } from 'lucide-react'

export function BottomNav() {
  const pathname = usePathname()

  const navItems = [
    { href: '/today', icon: CheckCircle2, label: 'Today' },
    { href: '/habits', icon: Zap, label: 'Habits' },
    { href: '/reports', icon: BarChart3, label: 'Reports' },
    { href: '/settings', icon: Settings, label: 'Settings' },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 md:hidden border-t border-border bg-background">
      <div className="flex justify-around items-center">
        {navItems.map(item => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex-1 flex flex-col items-center justify-center py-3 transition-colors ${
                isActive
                  ? 'text-primary border-t-2 border-primary -mt-0.5'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
