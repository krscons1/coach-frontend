export const isAuthenticated = (): boolean => {
  if (typeof window === 'undefined') return false
  return !!localStorage.getItem('auth_token') || !!document.cookie.match(/auth_token=/)
}

export const logout = (): void => {
  localStorage.removeItem('auth_token')
  clearAuthCookie()
}

export const getAuthToken = (): string | null => {
  if (typeof window === 'undefined') return null
  const localStorageToken = localStorage.getItem('auth_token')
  const cookieToken = document.cookie.match(/auth_token=([^;]+)/)
  return localStorageToken || (cookieToken ? cookieToken[1] : null)
}

const setAuthCookie = (token: string) => {
  if (typeof window !== 'undefined') {
    document.cookie = `auth_token=${token}; path=/`
  }
}

const clearAuthCookie = () => {
  if (typeof window !== 'undefined') {
    document.cookie = 'auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC'
  }
}
