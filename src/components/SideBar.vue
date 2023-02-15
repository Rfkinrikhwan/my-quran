<template>
  <div
    class="open"
    @click="open = !open"
    :style="[open ? { opacity: '0' } : { opacity: '1' }]"
  >
    <i class="fa-solid fa-bars"></i>
  </div>
  <section>
    <Transition name="slide-fade">
      <div class="wrap-sidebar nav-top fixed-top" v-if="open">
        <div class="sidebar">
          <div
            class="sidebar-one d-flex justify-content-between align-items-center"
          >
            <router-link to="/menu">
              <h3 class="mt-2 title2">
                <i class="fa-solid fa-house-chimney"></i>
              </h3>
            </router-link>
            <span class="ms-2 side-title">أبيزار</span>
            <span class="close">
              <i class="fa-solid fa-xmark close" @click="open = !open"></i>
            </span>
          </div>
          <div v-for="(option, index) in link" :key="index">
            <router-link :to="option.path">
              <div class="sidebar-two" @click="open = !open">
                <span>{{ option.name }}</span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script>
export default {
  data: () => ({
    open: false,
    link: [
      {
        name: "Al-Qur'an",
        path: "/listsurah",
      },
      {
        name: "Tafsir Qur'an",
        path: "/tafsir",
      },
      {
        name: "Doa Harian",
        path: "/doaharian",
      },
      {
        name: "Jadwal Sholat",
        path: "/sholat",
      },
      {
        name: "Asmasul Husna",
        path: "/asmaulhusnah",
      },
    ],
  }),
};
</script>
