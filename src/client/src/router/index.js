import { createRouter, createWebHistory } from "vue-router"
import OpravilaView from "../views/OpravilaView.vue"
import CasovnikView from "../views/CasovnikView.vue"
import PrijaviNapako from "../views/PrijaviNapako.vue"
import SledilciView from "../views/SledilciView.vue"
import ZaposleniVnosView from "../views/ZaposleniVnosView.vue"
import SkladisceView from "../views/SkladisceView.vue"
import NedelovanjeView from "../views/NedelovanjeView.vue"
import UporabnikView from "../views/UporabnikView.vue"
import KoledarView from "../views/KoledarView.vue"
import IskanjeView from "../views/IskanjeView.vue"

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
      path: "/sledilci",
      name: "sledilci",
      component: SledilciView,
    },
    {
      path: "/zaposleni/vnos",
      name: "zaposleniVnos",
      component: ZaposleniVnosView,
    },
    {
      path: "/skladisce",
      name: "skladisce",
      component: SkladisceView,
    },
    {
      path: "/nedelovanje",
      name: "nedelovanje",
      component: NedelovanjeView,
    },
    {
      path: "/uporabnik/:id",
      name: "uporabnik",
      component: UporabnikView,
    },
    {
      path: "/koledar",
      name: "koledar",
      component: KoledarView,
    },
    {
      path: "/iskanje",
      name: "iskanje",
      component: IskanjeView,
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
