import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Create New User',
      component: () => import('../components/create-user/CreateUserComponent.vue')
    },
    {
      path: '/list-user',
      name: 'List Users',
      component: () => import('../components/list-user/ListUserComponent.vue')
    },
    {
      path: '/edit-user/:id',
      name: 'Update User',
      component: () => import('../components/edit-user/EditUserComponent.vue')
    }
  ]
})

export default router
