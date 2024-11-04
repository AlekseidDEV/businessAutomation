import { createRouter, createWebHistory } from 'vue-router'

import MainPage from "@/pages/MainPage.vue";
import TheMainLayout from "@/layouts/TheMainLayout.vue";
import LoginPage from "@/pages/Auth/LoginPage.vue";
import UserProfilePage from "@/pages/User/UserProfilePage.vue";
import TheAuthLayout from "@/layouts/TheAuthLayout.vue";
import TheUserLayout from "@/layouts/TheUserLayout.vue";

import mainStore from "@/core/stores";

const routes = [
  {
    path: '/',
    component: TheMainLayout,
    children: [
      {
        path: '',
        name: 'main-page',
        component: MainPage
      }
    ]
  },
  {
    path: '/login',
    component: TheAuthLayout,
    children: [
      {
        path: '',
        name: 'login-page',
        component: LoginPage,
      }
    ]
  },
  {
    path: '/profile',
    beforeEnter: [checkAccess],
    component: TheUserLayout,
    children: [
      {
        path: '',
        name: 'profile-page',
        component: UserProfilePage
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

function checkAccess (to, from, next){
  const userRole = mainStore.userRole

  if(userRole === 'guest'){
    next({name: 'main-page'})
  }else {
    next()
  }
}

export default router
