import { createMemoryHistory, createRouter } from 'vue-router';
import { CompanyScore, CompanyOverview } from '../components/pages';

// A new router per mount, otherwise memory history keeps the last route across remounts.
const createAppRouter = () =>
  createRouter({
    history: createMemoryHistory(process.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'home',
        component: CompanyOverview,
      },
      {
        path: '/companyScore/:ticker',
        name: 'companyScore',
        component: CompanyScore,
        props: true,
      },
    ],
  });

export default createAppRouter;
