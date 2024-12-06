import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/sub-vue',
      component: ()=>import('../view/MyIndex.vue'),
      children:[
        {
          path:'/sub-vue/list',
          component: ()=>import('../view/MyList.vue')
        }
      ]
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;