import { createRouter, createWebHashHistory } from "vue-router";
import LandingPage from "@/views/LandingPage";
import EventsPage from "@/views/EventsPage";
import Registration from "@/views/Registration";

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
  {
    path: "/register",
    name: "Registration",
    component: Registration,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
