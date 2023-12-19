import { createRouter, createWebHistory } from "vue-router";
import { CompanyScore, CompanyConsole } from "../components/pages";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: CompanyConsole,
    },
    {
      path: "/companyScore/:ticker",
      name: "companyScore",
      component: CompanyScore,
      props: true,
    },
  ],
});

export default router;
