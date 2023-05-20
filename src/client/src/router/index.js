import { createRouter, createWebHistory } from "vue-router"
import TaskWindow from "../views/TaskWindow.vue"
import IssueReportWindow from "../views/IssueReportWindow.vue"
import FollowersWindow from "../views/FollowersWindow.vue"
import ActivityWindow from "../views/ActivityWindow.vue"
import SearchUsersWindow from "../views/SearchUsersWindow.vue"
import AuthorizationWindow from "../views/AuthorizationWindow.vue"

import { useUserStore } from "../stores/user"

const loginOnly = () => {
  const user = useUserStore()
  return user.isLoggedIn()
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: TaskWindow,
    },
    {
      path: "/napaka",
      name: "napaka",
      component: IssueReportWindow,
    },
    {
      path: "/sledilci",
      name: "sledilci",
      component: FollowersWindow,

    },
    {
      path: "/uporabnik/:id",
      name: "uporabnik",
      component: ActivityWindow,
    },
    {
      path: "/iskanje",
      name: "iskanje",
      component: SearchUsersWindow,
    },
    {
      path: "/prijava",
      name: "prijava",
      component: AuthorizationWindow,
    },
  ],
})

export default router
