import { useUserStore } from "../../stores/user";
import { ElMessage } from 'element-plus'

export default {
  defineTittlePage(to, from, next) {
    const findTitle = to.matched
      .slice()
      .reverse()
      .find((r) => r.meta && r.meta.title);

    if (findTitle) {
      document.title = findTitle.meta.title;
    }

    next();
  },

  async loginCheck(to, from, next) {
    const userStore = useUserStore();

    const token = localStorage.getItem('access_token')

    const publicPage = ["login", 'home', 'register']
    const guestPage = ["login", 'register']


    if (token) {
      const res = await userStore.checkUser()
      if (!res) {
        localStorage.clear()
        next({ name: 'login' });
      } else {
        const res = guestPage.find(el => el === to.name)
        if(res) {
          ElMessage.error({
            message: "You have logged in",
            duration: 3000
          });
          next({ name: 'home' });
        } else {
          next()
        }
      }
    } else {
      const res = publicPage.find(el => el === to.name)
      if (res) {
        next()
      } else {
        ElMessage.error({
          message: "You cannot access that page",
          duration: 3000
        });
        next({ name: 'login' });
      }
    }
  }
};
