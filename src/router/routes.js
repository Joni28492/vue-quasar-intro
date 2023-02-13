const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "typography",
        name: "typography",
        component: () => import("pages/Typography.vue"),
      },
      { path: "flex", name: "flex", component: () => import("pages/Flex.vue") },
      {
        path: "dialog",
        name: "dialog",
        component: () => import("pages/Dialogs.vue"),
      },
      {
        path: "forms",
        name: "forms",
        component: () => import("pages/Forms.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
