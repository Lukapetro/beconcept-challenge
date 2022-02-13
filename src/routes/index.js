import { lazy } from 'react'

const Dashboard = lazy(() => import('../pages/Dashboard'))
const ECommerce = lazy(() => import('../pages/ECommerce'))
const Marketing = lazy(() => import('../pages/Marketing'))
const Page404 = lazy(() => import('../pages/404'))

const routes = [
  {
    path: '/vitals',
    component: Dashboard,
  },
  {
    path: '/e-commerce',
    component: ECommerce,
  },
  {
    path: '/marketing',
    component: Marketing,
  },
  {
    path: '/404',
    component: Page404,
  },
]

export default routes
