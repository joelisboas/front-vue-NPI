import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Create New Task',
      component: () => import('../components/create-task/CreateTaskComponent.vue')
    },
    {
      path: '/list-task',
      name: 'List tasks',
      component: () => import('../components/list-task/ListTaskComponent.vue')
    },
    {
      path: '/edit-task/:id',
      name: 'Update task',
      component: () => import('../components/edit-task/EditTaskComponent.vue')
    }
  ]
})

export default router
