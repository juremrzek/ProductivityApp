import { createRouter, createWebHistory } from "vue-router"
import TaskWindow from "../views/TaskWindow.vue"
import TimerWindow from "../views/TimerWindow.vue"
import IssueReportWindow from "../views/IssueReportWindow.vue"
import FollowersWindow from "../views/SledilciView.vue"
import ManageEmployeesWindow from "../views/ManageEmployeesWindow.vue"
import StatisticsWindow from "../views/StatisticsWindow.vue"
import IssueResolveWindow from "../views/IssueResolveWindow.vue"
import ActivityWindow from "../views/ActivityWindow.vue"
import GoogleCalendarWindow from "../views/GoogleCalendarWindow.vue"
import SearchUsersWindow from "../views/SearchUsersWindow.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: TaskWindow,
    },
    {
      path: "/casovnik",
      name: "casovnik",
      component: TimerWindow,
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
      path: "/zaposleni/vnos",
      name: "zaposleniVnos",
      component: ManageEmployeesWindow,
    },
    {
      path: "/skladisce",
      name: "skladisce",
      component: StatisticsWindow,
    },
    {
      path: "/nedelovanje",
      name: "nedelovanje",
      component: IssueResolveWindow,
    },
    {
      path: "/uporabnik/:id",
      name: "uporabnik",
      component: ActivityWindow,
    },
    {
      path: "/koledar",
      name: "koledar",
      component: GoogleCalendarWindow,
    },
    {
      path: "/iskanje",
      name: "iskanje",
      component: SearchUsersWindow,
    },
  ],
})

export default router
