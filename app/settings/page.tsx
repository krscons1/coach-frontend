'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { AlertCircle, Bell, Lock, User } from 'lucide-react'
import { useAuth } from '@/hooks/use-auth'
import { useRouter } from 'next/navigation'

export default function SettingsPage() {
  const router = useRouter()
  const { logout } = useAuth()
  const [email, setEmail] = useState('user@example.com')
  const [name, setName] = useState('John Doe')
  const [notifications, setNotifications] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const handleLogout = () => {
    logout()
    router.push('/login')
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-8 pb-20">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground">Manage your account and preferences</p>
        </div>

        {saved && (
          <Card className="mb-6 bg-accent/10 border-accent/20">
            <CardContent className="pt-6">
              <p className="text-sm text-accent">Settings saved successfully!</p>
            </CardContent>
          </Card>
        )}

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Profile
            </CardTitle>
            <CardDescription>Update your personal information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium">Full Name</label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2"
              />
            </div>
            <Button onClick={handleSave} className="bg-primary hover:bg-primary/90">
              Save Changes
            </Button>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Preferences
            </CardTitle>
            <CardDescription>Customize your experience</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50">
              <div>
                <p className="font-medium text-sm">Daily Reminders</p>
                <p className="text-xs text-muted-foreground">Get reminded about your habits</p>
              </div>
              <input
                type="checkbox"
                checked={notifications}
                onChange={(e) => setNotifications(e.target.checked)}
                className="w-5 h-5"
              />
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50">
              <div>
                <p className="font-medium text-sm">Dark Mode</p>
                <p className="text-xs text-muted-foreground">Easier on the eyes</p>
              </div>
              <input
                type="checkbox"
                checked={darkMode}
                onChange={(e) => setDarkMode(e.target.checked)}
                className="w-5 h-5"
              />
            </div>

            <Button onClick={handleSave} className="w-full bg-primary hover:bg-primary/90">
              Save Preferences
            </Button>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="w-5 h-5" />
              Security
            </CardTitle>
            <CardDescription>Manage your account security</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium">Current Password</label>
              <Input
                type="password"
                placeholder="••••••••"
                className="mt-2"
              />
            </div>
            <div>
              <label className="text-sm font-medium">New Password</label>
              <Input
                type="password"
                placeholder="••••••••"
                className="mt-2"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Confirm Password</label>
              <Input
                type="password"
                placeholder="••••••••"
                className="mt-2"
              />
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90">
              Change Password
            </Button>
          </CardContent>
        </Card>

        <Card className="border-destructive/20 bg-destructive/5">
          <CardHeader>
            <CardTitle className="text-destructive flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Danger Zone
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium text-sm mb-2">Logout</h4>
              <p className="text-xs text-muted-foreground mb-4">
                You will be logged out of your account
              </p>
              <Button
                variant="outline"
                className="border-destructive/20 text-destructive hover:bg-destructive/10"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </div>

            <div className="pt-4 border-t border-destructive/10">
              <h4 className="font-medium text-sm mb-2">Delete Account</h4>
              <p className="text-xs text-muted-foreground mb-4">
                Permanently delete your account and all data
              </p>
              <Button
                variant="destructive"
                onClick={() => alert('Account deletion is not available yet')}
              >
                Delete Account
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
