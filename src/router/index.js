import { createRouter, createWebHistory } from "vue-router";
import GetStarted from "../views/GetStarted.vue";
import Dashboard from "@/views/Dashboard.vue";
import DetailQ from "@/views/DetailSurah.vue";
import schedule from "@/views/JadwalSholat.vue";
import todos from "@/views/Todo.vue";
import doaharian from "@/views/DoaHarian.vue";

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
    path: "/detail/:surah",
    name: "detail",
    component: DetailQ,
  },
  {
    path: "/jadwalsholat",
    name: "schedulePrayer",
    component: schedule,
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
