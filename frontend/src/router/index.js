import { createRouter, createWebHashHistory } from "vue-router";
import LandingPage from "@/views/LandingPage";
import EventsPage from "@/views/EventsPage";
import Registration from "@/views/Registration";
import Login from "@/views/Login";

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
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
