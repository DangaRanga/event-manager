import { createRouter, createWebHashHistory } from "vue-router";
import LandingPage from "@/views/LandingPage";
import EventsPage from "@/views/events/EventsPage";
import Registration from "@/views/user/Registration";
import Login from "@/views/user/Login";
import EventsDashboard from "@/views/events/EventsDashboard";
import EventDetails from "@/views/events/EventDetails";

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
  {
    path: "/events-dashboard",
    name: "EventsDashboard",
    component: EventsDashboard,
  },

  // To be changed once events are dynamic
  {
    path: "/event-details",
    name: "EventDetails",
    component: EventDetails,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
