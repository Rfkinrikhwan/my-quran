import { createRouter, createWebHistory } from "vue-router";
import GetStarted from "../views/GetStarted.vue";
import Dashboard from "@/views/Dashboard/Dashboard.vue";
import DetailQ from "@/views/Dashboard/DetailSurah.vue";
import todos from "@/views/Todos/Todo.vue";
import doaharian from "@/views/DoaHarian/IndexDoa.vue";
import jadwalSholat from "@/views/Sholat/JadwalSholat.vue";
import DetailJadwalVue from "@/views/Sholat/DetailJadwal.vue";
import MenuList from "@/views/menu/MenuList.vue";
import Asmaul from "@/views/Asmaul Husna/indexAsmaul.vue";
import Tafsir from "@/views/Tafsir Surah/TafsirSurah.vue";
import TafsirDetail from "@/views/Tafsir Surah/DetailTafsir.vue";

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
    path: "/surah/:surah/:namaLatin",
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
  {
    path: "/sholat/:kota/:nama",
    name: "praysholat",
    component: DetailJadwalVue,
  },
  {
    path: "/menu",
    name: "manu",
    component: MenuList,
  },
  {
    path: "/asmaulhusnah",
    name: "asmaulhusna",
    component: Asmaul,
  },
  {
    path: "/tafsir",
    name: "Tafsir",
    component: Tafsir,
  },
  {
    path: "/detail/:id",
    name: "tafsirDetail",
    component: TafsirDetail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
