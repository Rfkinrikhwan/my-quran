<template>
  <div>
    <section class="d-flex justify-content-center align-items-center">
      <div class="change-surah d-flex justify-content-start align-items-center">
        <router-link to="/listsurah">
          <i
            style="font-size: 25px; color: black"
            class="fa-solid fa-chevron-left"
          ></i>
        </router-link>
        <h4 class="basmalah">
          <router-link to="/listsurah">
            {{ $route.params.namaLatin }}
          </router-link>
        </h4>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    listSurah: [],
  }),
};
</script>

<style lang="scss" scoped></style>
