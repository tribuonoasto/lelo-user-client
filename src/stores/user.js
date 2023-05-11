import { defineStore } from 'pinia'
import api from '../services/http-client/api/index'

export const useUserStore = defineStore('user', {
  state: () => ({
   
  }),
  getters: {},
  actions: {
    // User Login
    async login(data) {
      const res = await api.user.login(data)
      console.log(res)
      
    },
    async register(data) {
        const res = await api.user.register(data)
        console.log(res)
        
      },
  }
})
