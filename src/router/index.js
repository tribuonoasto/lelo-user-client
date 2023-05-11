import { createRouter, createWebHistory } from 'vue-router'
import hooks from './hooks';

//Views
import HomeView from './routes/home';


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
    ...HomeView
  ]
})

hooks(router);

export default router



