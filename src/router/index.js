import { createRouter, createWebHistory } from "vue-router";
import { CompanyScore, CompanyOverview, CompanyConsole } from "../components/pages";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: CompanyConsole,
    },
    {
      path: "/overview",
      name: "Ticker List",
      component: CompanyOverview,
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
