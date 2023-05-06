import { createRouter, createWebHistory } from "vue-router"
import OpravilaView from "../views/OpravilaView.vue"
import CasovnikView from "../views/CasovnikView.vue"
import PrijaviNapako from "../views/PrijaviNapako.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      // component: () => import("../views/AboutView.vue"),
      component: OpravilaView,
    },
    {
      path: "/casovnik",
      name: "casovnik",
      component: CasovnikView,
    },
    {
      path: "/napaka",
      name: "napaka",
      component: PrijaviNapako,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
})

export default router