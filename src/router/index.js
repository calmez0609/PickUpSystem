import { createRouter, createWebHistory } from 'vue-router'
import DashBoard from '../views/DashBoard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'DashBoard',
      component: DashBoard,
	  children : [
        {
          path : 'CarView',
          component : ()  => import('../views/CarView.vue')
        },
		{
		  path : 'RegisterView',
          component : ()  => import('../views/RegisterView.vue')
		},
		{
		  path : 'RecordView',
          component : ()  => import('../views/RecordView.vue')
		},
       
    ]
    },

  ]
})

export default router
