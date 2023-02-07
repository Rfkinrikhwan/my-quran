<template>
  <div style="height: 99vh">
    <second-nav />

    <section class="mt-5">
      <div class="detail-surah">
        <div
          class="container d-flex justify-content-center align-items-center"
          v-for="(surahs, key) in surah.ayat"
          :key="key"
        >
          <div class="row row-cols-1">
            <div class="col mt-2 p-2 detail-row">
              <div class="p-1">
                <div class="number">
                  <h5
                    class="verses d-flex justify-content-center align-items-center"
                  >
                    {{ surahs.nomorAyat }}
                  </h5>
                </div>
                <div class="detail-s">
                  <p class="surah-detail">
                    {{ surahs.teksArab }}
                  </p>
                  <span class="mt-2 arti">
                    {{ surahs.nomorAyat + ". " + surahs.teksIndonesia }}
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
    url: "https://equran.id/api/v2/surat",
    surah: {},
    loading: false,
    data: false,
    namaSurah: [],
  }),
  components: {
    secondNav,
  },
  methods: {
    getDetailSurah: async function () {
      try {
        this.loading = false;
        this.namaSurah = this.$route.params.surah;

        const dataS = await fetch(this.url + "/" + this.$route.params.surah);
        const surahs = await dataS.json();
        this.surah = surahs.data;
        console.log(this.surah);
      } catch (e) {
        console.log(e.message);
      }
      this.loading = true;
      window.scrollTo({ top: 0 });
    },
  },

  mounted: function () {
    this.getDetailSurah();
    this.data = true;
  },
};
</script>
