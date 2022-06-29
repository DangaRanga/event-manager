import { createRouter, createWebHashHistory } from "vue-router";
import LandingPage from "@/views/LandingPage";
import EventsPage from "@/views/EventsPage";

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/events",
    name: "EventsPage",
    component: EventsPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
