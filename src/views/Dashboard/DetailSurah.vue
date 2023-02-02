<template>
  <div class="">
    <router-link to="/listsurah">
      <i
        style="font-size: 25px; color: black"
        class="fa-solid fa-arrow-left mt-2 ms-2"
      ></i>
    </router-link>
    <second-nav />

    <section class="mt-2">
      <div class="detail-surah">
        <div
          class="container d-flex justify-content-center align-items-center"
          v-for="(surahs, key) in surah"
          :key="key"
        >
          <div class="row row-cols-1">
            <div class="col mt-2 p-2 detail-row">
              <div class="p-1">
                <div class="number">
                  <h5
                    class="verses d-flex justify-content-center align-items-center"
                  >
                    {{ surahs.nomor }}
                  </h5>
                </div>
                <div class="detail-s">
                  <p class="surah-detail">
                    {{ surahs.ar }}
                  </p>
                  <!-- <br /> -->
                  <span class="mt-2 arti">
                    {{ surahs.nomor + ". " + surahs.idn }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import secondNav from "@/components/secondNav.vue";

export default {
  data: () => ({
    url: "https://equran.id/api/surat",
    surah: {},
    loading: false,
  }),
  components: {
    secondNav,
  },
  methods: {
    getDetailSurah: async function () {
      try {
        this.loading = false;
        const dataS = await fetch(this.url + "/" + this.$route.params.surah);
        const surahs = await dataS.json();
        const ayat = surahs.ayat.map((detail) => {
          return detail;
        });
        this.surah = ayat;
        console.log(this.$route.params.surah);
      } catch (e) {
        console.log(e.message);
      }
      this.loading = true;
      window.scrollTo({ top: 0 });
    },
  },

  mounted: function () {
    this.getDetailSurah();
  },
};
</script>
