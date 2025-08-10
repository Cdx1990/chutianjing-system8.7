import { defineStore } from 'pinia'

const USERNAME = 'qazwsx1995'
const DEFAULT_PASSWORD = 'changeme'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    user: null,
  }),
  actions: {
    login({ username, password }) {
      const expectedPassword = import.meta.env.VITE_APP_PASSWORD || DEFAULT_PASSWORD
      if (username === USERNAME && password === expectedPassword) {
        this.isAuthenticated = true
        this.user = { username }
        return { ok: true }
      }
      return { ok: false, message: '用户名或密码错误' }
    },
    logout() {
      this.isAuthenticated = false
      this.user = null
    }
  }
})