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
                <div
                  class="number p-3 d-flex justify-content-between align-items-center"
                >
                  <h5
                    class="verses d-flex justify-content-center align-items-center"
                  >
                    {{ surahs.nomorAyat }}
                  </h5>
                  <!-- <span style="font-size: 20px !important; padding: 40px"
                    ><audio-player
                      ref="audioPlayer"
                      :audio-list="surahs"
                      :before-play="handleBeforePlay"
                      :show-prev-button="false"
                      :show-next-button="false"
                      :show-volume-button="false"
                      :show-progress-bar="false"
                      :show-playback-rate="false"
                      theme-color="black"
                  /></span> -->
                  <!-- <span>
                    {{ audio }}
                  </span> -->
                  <audio controls>
                    <source :src="surahs.audio['05']" type="" />
                  </audio>
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
// import AudioPlayer from "@liripeng/vue-audio-player";

export default {
  data: () => ({
    url: "https://equran.id/api/v2/surat",
    audio: [],
    surah: {},
    loading: false,
    data: false,
    // namaSurah: [],
    // audioList: [
    //   {
    //     name: "audio1",
    //     url: "https://equran.nos.wjv-1.neo.id/audio-partial/Abdullah-Al-Juhany/110002.mp3",
    //   },
    //   {
    //     name: "audio2",
    //     url: "https://equran.nos.wjv-1.neo.id/audio-partial/Abdullah-Al-Juhany/110003.mp3",
    //   },
    // ],
  }),
  components: {
    secondNav,
    // AudioPlayer,
  },
  methods: {
    getDetailSurah: async function () {
      try {
        this.loading = false;
        this.namaSurah = this.$route.params.surah;

        const dataS = await fetch(this.url + "/" + this.$route.params.surah);
        const surahs = await dataS.json();
        this.surah = surahs.data;
        // this.audio = surahs.data.ayat.map((data) => data.audio["01"]);
        // console.log(this.audio);
      } catch (e) {
        console.log(e.message);
      }
      this.loading = true;
      window.scrollTo({ top: 0 });
    },
    // handleBeforePlay(next) {
    //   next();
    // },
  },

  mounted: function () {
    this.getDetailSurah();
    this.data = true;
  },
};
</script>
