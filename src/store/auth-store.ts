import { create } from 'zustand'

interface AuthState {
  isAuthenticated: boolean
  isLoading: boolean
  user: any | null
  setUser: (user: any) => void
  setLoading: (status: boolean) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  isLoading: true,
  user: null,
  setUser: (user) => set({ isAuthenticated: true, user, isLoading: false }),
  setLoading: (status) => set({ isLoading: status }),
  logout: () => set({ isAuthenticated: false, user: null, isLoading: false }),
}))