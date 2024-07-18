import { requireAuth, notRequiredAuth } from "@/libs/authRoute";
import { createRouter, createWebHistory } from "vue-router";

//import ListRecords from "@/pages/ListRecords.vue"; // Create this component

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("@/pages/Login.vue"),
    beforeEnter: notRequiredAuth,
  },
  {
    path: "/logout",
    name: "Logout",
    component: () => import("@/pages/Logout.vue"),
  },
  {
    path: "/",
    component: () => import("@/pages/layout/Container.vue"),
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/pages/Dashboard.vue"),
        beforeEnter: requireAuth,
      },
      {
        path: "trip/new",
        name: "Trip",
        component: () => import("@/pages/Trip.vue"),
        beforeEnter: requireAuth,
      },
      {
        path: "trip/:tripId/details",
        name: "TripDetails",
        component: () => import("@/pages/Trip.vue"),
        beforeEnter: requireAuth,
      },
    ],
  },
  /*
  {
    path: '/accounts/list',
    name: 'AccountList',
    component: () => import('@/components/AccountList.vue'),
  },
  {
    path: '/accounts/form',
    name: 'AccountForm',
    component: () => import('@/components/forms/AccountForm.vue'),
  },
  {
    path: '/dispatch/collections',
    name: 'DispatchCollections',
    component: () => import('@/pages/DispatchCollections.vue'),
  },
  {
    path: '/dispatch/trips',
    name: 'DispatchTrips',
    component: () => import('@/pages/DispatchTrips.vue'),
  },
  {
    path: '/dispatch/accounts',
    name: 'DispatchAccounts',
    component: () => import('@/pages/DispatchAccounts.vue'),
  },
  {
    path: '/dispatch/drivers',
    name: 'DispatchDrivers',
    component: () => import('@/pages/DispatchDrivers.vue'),
  },
  {
    path: '/driver/trips',
    name: 'DriverTrips',
    component: () => import('@/pages/DriverTrips.vue'),
  },
  {
    path: '/dispatch/dispatchers',
    name: 'DriverDispatchers',
    component: () => import('@/pages/DriverDispatchers.vue'),
  },
  {
    path: '/admin/users',
    name: 'AdminUsers',
    component: () => import('@/pages/AdminUsers.vue'),
  },
  {
    path: '/dispatch/chatgpt',
    name: 'DispatchChatGPT',
    component: () => import('@/pages/ChatGPT.vue'),
  },
  {
    path: '/blank/page',
    name: 'BlankPage',
    component: () => import('@/pages/BlankPage.vue'),
  },
  {
    path: '/dispatch/collection/:collectionName/list',
    name: 'ListRecords',
    component: () => import('@/pages/ListRecords.vue'),
    props: true,
  },
  {
    path: '/truck/home',
    name: 'TruckHome',
    component: () => import('@/pages/TruckHome.vue'),
    props: true,
  },
  {
    path: '/driver/home',
    name: 'DriverHome',
    component: () => import('@/pages/DriverHome.vue'),
    props: true,
  },
  {
    path: '/configure/truck/tablet',
    name: 'ConfigureTruckTablet',
    component: () => import('@/pages/ConfigureTruckTablet.vue'),
    props: true,
  },
  {
    path: '/truck/onboarding/error',
    name: 'DriverOnboardingError',
    component: () => import('@/pages/DriverOnboardingError.vue'),
    props: true,
  },
  {
    path: '/device/link/success',
    name: 'DeviceLinkSuccess',
    component: () => import('@/pages/DeviceLinkSuccess.vue'),
    props: true,
  },
  // other routes...
  */
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
