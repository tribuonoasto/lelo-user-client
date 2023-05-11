import { createRouter, createWebHistory } from 'vue-router'
import hooks from './hooks';

//Views
import HomeView from './routes/home';
import LoginView from './routes/login'
import RegisterView from './routes/register'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    return {
      x: 0,
      y: 0
    };
  },
  routes: [
    ...HomeView,
    ...LoginView,
    ...RegisterView
  ]
})

hooks(router);

export default router



