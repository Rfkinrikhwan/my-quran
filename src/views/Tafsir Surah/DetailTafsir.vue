<template>
  <div style="height: 99vh">
    <section>
      <div class="nav-top fixed-top navbar-light bg-light">
        <div class="">
          <div
            class="container d-flex justify-content-center align-items-center"
          >
            <router-link to="/tafsir">
              <h3 class="title position-relative mt-3" style="right: 3.5em">
                <i class="fa-solid fa-arrow-left"></i>
              </h3>
            </router-link>
            <h3 v-for="(data, index) in tafsir" :key="index" class="title mt-3">
              {{ data.namaLatin }}
            </h3>
          </div>
        </div>
      </div>
    </section>
    <section class="" style="margin-top: 5em">
      <div class="detail-tafsir" v-for="(data, index) in detail" :key="index">
        <div class="tafsir-ayat">
          <span class="nomor">{{ data.ayat }}</span>
          <span class="teks">{{ data.teks }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    api: "https://equran.id/api/v2/tafsir/",
    tafsir: [],
    detail: [],
  }),
  methods: {
    getTafsirQuran: async function () {
      const raw = await fetch(this.api + this.$route.params.id);
      const data = await raw.json();
      this.tafsir = data;
      this.detail = data.data.tafsir;
      console.log(this.detail);
    },
  },
  mounted() {
    this.getTafsirQuran();
  },
};
</script>

<style lang="scss" scoped></style>
