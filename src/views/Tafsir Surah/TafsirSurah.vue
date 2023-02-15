<template>
  <div style="height: 99vh">
    <section>
      <div class="nav-top fixed-top navbar-light bg-light">
        <div class="">
          <div class="container d-flex justify-content-start mt-2">
            <div class="search">
              <input
                placeholder="Cari Tafsir..."
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
            <h3 class="mt-2 title" style="margin-left: 4.5em">Tafsir Qur`an</h3>
            <span class="" style="margin-left: 4em">
              <side-bar />
            </span>
          </div>
        </div>
      </div>
    </section>

    <section
      style="margin-top: 4em"
      class="d-flex justify-content-center align-items-center container"
    >
      <div class="nav-surah">
        <div class="container">
          <div class="row row-cols-1" v-for="(surah, key) in filter" :key="key">
            <router-link
              style="text-decoration: none"
              :to="'/detail/' + surah.nomor"
            >
              <div class="col mt-1">
                <div
                  class="list d-flex justify-content-center align-items-center mb-2"
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
                          <p
                            class="one"
                            style="margin-top: 11px; font-size: 18px"
                          >
                            {{ surah.namaLatin }}
                          </p>
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
import SideBar from "@/components/SideBar.vue";

export default {
  name: "DashBoard",
  components: {
    SideBar,
  },
  data: () => ({
    searchSurah: "",
    listSurah: [],
    isLoading: false,
  }),
  methods: {
    getSurah: async function () {
      const raw = await fetch("https://equran.id/api/v2/surat");
      const data = await raw.json();
      this.listSurah = data.data;
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
