export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('../../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../../views/Login/index.vue')

]