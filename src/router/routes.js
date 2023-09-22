import Login from "../views/Login.vue";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
];

export { routes };
