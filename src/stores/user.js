import { defineStore } from "pinia";
import { ref, computed } from "vue";
import api from "../services/http-client/api/index";
import router from "../router"
import { setLocalStorage } from "../helpers/localStorage"

export const useUserStore = defineStore("user", () => {
  const user = ref({});
  const isGuest = ref(true);
  // User Login
  async function login(form) {
    try {
      const { data } = await api.user.login(form)
      setLocalStorage(data)
      isGuest.value = false
      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }
  // Register
  async function register(data) {
    try {
      console.log(data);
      const res = await api.user.register(data)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  async function checkUser() {
    try {
      const res = await api.user.checkUser()
      isGuest.value = false
      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }
  return { user, login, register, isGuest, checkUser };
});
