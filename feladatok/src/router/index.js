import { createRouter, createWebHistory } from 'vue-router'
import TaskView from '@/views/TaskView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'task',
      component: TaskView,
    },
    {
      path: '/newtask',
      name: 'newtask',
     
      component: () => import('../views/NewTaskView.vue'),
    },
  ],
})

export default router
