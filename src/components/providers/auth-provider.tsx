'use client'

import { useEffect } from 'react'
import { useAuthStore } from '@/store/auth-store'

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { setAuth, setLoading, logout } = useAuthStore()

  useEffect(() => {
    const checkAuth = async () => {
      setLoading(true)
      try {
        const isAuth = document.cookie.includes('isAuthenticated=true')
        const userId = document.cookie
          .split('; ')
          .find(row => row.startsWith('userId='))
          ?.split('=')[1]

        if (isAuth && userId) {
          setAuth(userId)
        } else {
          logout()
        }
      } catch (error) {
        console.error('Auth check failed:', error)
        logout()
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [setAuth, setLoading, logout])

  return <>{children}</>
}