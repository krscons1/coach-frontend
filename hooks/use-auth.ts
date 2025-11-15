'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface AuthState {
  isAuthenticated: boolean
  isLoading: boolean
  token: string | null
}

export function useAuth() {
  const router = useRouter()
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    isLoading: true,
    token: null,
  })

  useEffect(() => {
    const token = localStorage.getItem('auth_token')
    setAuthState({
      isAuthenticated: !!token,
      isLoading: false,
      token,
    })
  }, [])

  const login = (token: string) => {
    localStorage.setItem('auth_token', token)
    setAuthState({
      isAuthenticated: true,
      isLoading: false,
      token,
    })
  }

  const logout = () => {
    localStorage.removeItem('auth_token')
    setAuthState({
      isAuthenticated: false,
      isLoading: false,
      token: null,
    })
    router.push('/login')
  }

  return { ...authState, login, logout }
}
