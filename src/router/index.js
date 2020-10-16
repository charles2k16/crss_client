import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Session from '../views/ClassSession.vue';
import Drawing from '../components/DrawingBoard.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/session',
    name: 'Session',
    component: Session,
  },
  {
    path: '/drawing',
    name: 'Drawing',
    component: Drawing,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
