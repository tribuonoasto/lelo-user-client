import { defineStore } from "pinia";
import { ref, computed } from "vue";
import api from "../services/http-client/api/index";

export const useUserStore = defineStore("user", () => {
  const user = ref({});
  // User Login
  async function login(data) {
    console.log(data);
    // const res = await api.user.login(data)
  }
  // Register
  async function register(data) {
    const res = await api.user.register(data);
    console.log(res);
  }
  return { user, login, register };
});
