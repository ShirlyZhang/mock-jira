export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('../../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../../views/Login/index.vue')
  }
]