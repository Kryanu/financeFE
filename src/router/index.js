import { createRouter, createWebHistory } from "vue-router";
import { CompanyScore, CompanyOverview } from "../components/pages";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
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
