import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import AddJob from "@/views/AddJob.vue";
import EditJob from "@/views/EditJob.vue";
import JobDetail from "@/views/JobDetail.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/add", component: AddJob },
  { path: "/jobs/:id", component: JobDetail },
  { path: "/edit/:id", component: EditJob }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
