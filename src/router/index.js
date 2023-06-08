import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/courses",
    name: "courses",
    component: () =>
      import(/* webpackChunkName: "courses" */ "../views/CoursesView.vue"),
  },
  {
    path: "/courses/add",
    name: "add-course",
    component: () =>
      import(/* webpackChunkName: "add-course" */ "../views/AddCourseView.vue"),
  },
  {
    path: "/courses/:id",
    name: "course-details",
    component: () =>
      import(
        /* webpackChunkName: "course-details" */ "../views/CourseDetailsView.vue"
      ),
  },
  {
    path: "/update/courses/:id",
    name: "update-course",
    component: () =>
      import(
        /* webpackChunkName: "update-course" */ "../views/CourseUpdateView.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
