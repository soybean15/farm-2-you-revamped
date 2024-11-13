import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/market'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/market'
      },
      {
        path: 'market',
        component: () => import('../views/MarketPage.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/CartPage.vue')
      },
      {
        path: 'profile',
        component: () => import('../views/ProfilePage.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;