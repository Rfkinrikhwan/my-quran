<template>
  <div style="height: 99vh">
    <section>
      <nav class="nav-top navbar fixed-top navbar-light bg-light">
        <div class="">
          <div class="container">
            <input
              placeholder="Cari surah al-quran"
              required=""
              class="input"
              name="text"
              type="text"
              autocomplete="off"
              v-model="searchSurah"
            />
            <div class="icon">
              <svg
                viewBox="0 0 512 512"
                class="ionicon"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Search</title>
                <path
                  stroke-width="32"
                  stroke-miterlimit="10"
                  stroke="white"
                  fill="none"
                  d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                ></path>
                <path
                  d="M338.29 338.29L448 448"
                  stroke-width="32"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke="white"
                  fill="none"
                ></path>
              </svg>
            </div>
          </div>
          <h3 class="title position-relative">Al-Quran</h3>
          <router-link to="/menu">
            <h3 class="title2 position-relative">
              <i class="fa-solid fa-house-chimney"></i>
            </h3>
          </router-link>
        </div>
      </nav>
    </section>

    <section style="margin-top: 20%" class="container">
      <div>
        <p class="intro mt-4 ms-4">Assalamualaikum&nbsp;</p>
      </div>
      <div class="d-flex justify-content-center align-items-center">
        <div class="card"></div>
      </div>
    </section>
    <!-- 
  <section>
    <h3 class="position-relative ms-4" style="top: 40px">Surah :</h3>
  </section> -->

    <section
      class="mt-3 d-flex justify-content-center align-items-center container"
    >
      <div class="nav-surah">
        <div class="container">
          <div class="row row-cols-1" v-for="(surah, key) in filter" :key="key">
            <router-link
              style="text-decoration: none"
              :to="'/surah/' + surah.nomor + '/' + surah.namaLatin"
            >
              <div class="col mt-1">
                <div
                  class="list d-flex justify-content-center align-items-center mb-3"
                >
                  <div class="container">
                    <div class="row row-cols-3">
                      <div class="col">
                        <div
                          class="surah-ke position-relative d-flex justify-content-center align-items-center"
                        >
                          <span>{{ surah.nomor }}</span>
                        </div>
                      </div>
                      <div class="col">
                        <div class="surah position-relative">
                          <p class="one">{{ surah.namaLatin }}</p>
                          <p class="two">
                            {{
                              surah.arti + " - " + surah.jumlahAyat + " ayat"
                            }}
                          </p>
                        </div>
                      </div>
                      <div class="col">
                        <div class="ayat position-relative">
                          <span>{{ surah.nama }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <section
      style="height: 70px"
      class="d-flex justify-content-center align-items-center"
    >
      <div class="sumber">Sumber Kemenag Go.id</div>
    </section>
  </div>
</template>

<script>
export default {
  name: "DashBoard",
  components: {},
  data: () => ({
    searchSurah: "",
    listSurah: [],
    isLoading: false,
  }),
  methods: {
    //   getListSurah: function () {
    //     this.isLoading = true;
    //     this.$http
    //       .get("https://api.npoint.io/99c279bb173a6e28359c/data/")
    //       .then((resp) => {
    //         console.log(resp);
    //         const namaSurah = [];

    //         resp.data.forEach((surah) => {
    //           namaSurah.push(surah.nama);
    //         });
    //         this.listSurah = resp.data;
    //         window.localStorage.setItem(
    //           "listNamaSurah",
    //           JSON.stringify(namaSurah)
    //         );
    //         this.$store.commit("surah/setListNamaSurah", namaSurah);
    //         this.isLoading = false;
    //       });
    //   },
    // },
    // mounted() {},
    // created: function () {
    //   this.getListSurah();

    // async getSurah() {
    //   this.isLoading = true;
    //   let result = await axios.get("https://equran.id/api/surat");
    //   const namaSurah = [];
    //   this.listSurah = result.data;
    //   window.localStorage.setItem("listNamaSurah", JSON.stringify(namaSurah));
    //   this.isLoading = false;
    // },

    // toSurah: function (surah) {
    //   const url = this.$route.path + "/" + surah;
    //   this.$router.push({ path: url });
    //   console.log(surah);
    // },

    getSurah: async function () {
      const raw = await fetch("https://equran.id/api/v2/surat");
      const data = await raw.json();
      this.listSurah = data.data;
      console.log(this.listSurah);

      // const namaSurah = [];

      // raw.data.map((surah) => {
      //   namaSurah.push(surah.nama);
      // });

      // window.localStorage.setItem("listNamaSurah", JSON.stringify(namaSurah));
      // this.$store.commit("surah/setListNamaSurah", namaSurah);
      // this.isLoading = false;
    },
  },
  mounted() {
    this.getSurah();
  },
  computed: {
    filter() {
      if (!this.searchSurah) {
        return this.listSurah;
      } else {
        return this.listSurah.filter(({ namaLatin }) =>
          namaLatin.toLowerCase().includes(this.searchSurah.toLowerCase())
        );
      }
    },
  },
};
</script>

<style scoped></style>
