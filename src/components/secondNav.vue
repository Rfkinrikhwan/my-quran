<template>
  <div>
    <section class="d-flex justify-content-center align-items-center">
      <div class="change-surah">
        <!-- <h4 class="surah-name">
          <p>{{ $route.params.surah }}</p>
        </h4> -->
        <h4 class="basmalah">
          بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ
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
