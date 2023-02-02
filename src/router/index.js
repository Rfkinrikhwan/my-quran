import { createRouter, createWebHistory } from "vue-router";
import GetStarted from "../views/GetStarted.vue";
import Dashboard from "@/views/Dashboard/Dashboard.vue";
import DetailQ from "@/views/Dashboard/DetailSurah.vue";
import todos from "@/views/Todos/Todo.vue";
import doaharian from "@/views/DoaHarian/IndexDoa.vue";
import jadwalSholat from "@/views/Sholat/JadwalSholat.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: GetStarted,
  },
  {
    path: "/listsurah",
    name: "Quran",
    component: Dashboard,
  },
  {
    path: "/surah/:surah",
    name: "detail",
    component: DetailQ,
  },
  {
    path: "/doaharian",
    name: "doadoa",
    component: doaharian,
  },
  {
    path: "/todo",
    name: "todos",
    component: todos,
  },
  {
    path: "/sholat",
    name: "sholat",
    component: jadwalSholat,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
