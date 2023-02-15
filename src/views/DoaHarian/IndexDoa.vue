<template>
  <div style="height: 99vh; scroll-behavior: smooth">
    <section>
      <div class="nav-top fixed-top navbar-light bg-light">
        <div class="">
          <div class="container d-flex justify-content-start mt-2">
            <div class="search">
              <input
                placeholder="Cari kota..."
                required=""
                class="input"
                name="text"
                type="text"
                autocomplete="off"
                v-model="searchDoa"
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
            <h3 class="mt-2 title" style="margin-left: 5em">Doa Harian</h3>
            <h3 class="" style="margin-left: 3em">
              <side-bar />
            </h3>
          </div>
        </div>
      </div>
    </section>

    <section class="d-flex justify-content-center">
      <div style="margin-top: 5em" class="banner-info p-3"></div>
    </section>

    <section
      class="mt-3 d-flex justify-content-center align-items-center container"
    >
      <div class="nav-surah">
        <div class="container">
          <div
            class="row row-cols-1"
            v-for="(doa, index) in cariDoa"
            :key="index"
          >
            <div class="col mt-1">
              <div
                class="list d-flex justify-content-center align-items-center mt-3"
              >
                <div class="container">
                  <div class="row row-cols-3">
                    <div class="col">
                      <div
                        class="surah-ke position-relative d-flex justify-content-center align-items-center"
                      >
                        <span>{{ doa.id }}</span>
                      </div>
                    </div>
                    <div class="col">
                      <div
                        class="surah position-relative mt-2"
                        style="width: 200px"
                      >
                        <p class="one" style="margin: 12px">{{ doa.doa }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="list-detail d-grid p-4">
                <span
                  style="text-align: right"
                  class="doa-ayat fw-bold fs-3 doa-harian"
                >
                  {{ doa.ayat }}</span
                >
                <span class="mt-4">Artinya: {{ '"' + doa.artinya + '"' }}</span>
              </div>
            </div>
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
  components: {
    SideBar,
  },
  data: () => ({
    detail: false,
    searchDoa: "",
    doaharian: [],
    url: "https://api.npoint.io/76a32b3400def4b7b8db",
  }),
  methods: {
    detailDesc(id) {
      const check = id;
      if (!this.detail) {
        this.detail = true;
      } else {
        this.detail = false;
      }
      console.log(check);
    },
    getDoa: async function () {
      const get = await fetch(this.url);
      const data = await get.json();
      this.doaharian = data;
      // console.log(this.doaharian);
    },
  },
  mounted() {
    this.getDoa();
  },
  computed: {
    cariDoa() {
      if (!this.searchDoa) {
        return this.doaharian;
      } else {
        return this.doaharian.filter(({ doa }) =>
          doa.toLowerCase().includes(this.searchDoa.toLowerCase())
        );
      }
    },
  },
};
</script>

<style scoped>
.title-doa {
  text-shadow: 2px 2px rgba(0, 0, 0, 0.2);
}

.banner-info {
  border-right: 0.2px solid rgba(0, 0, 0, 0.2);
  border-top: 0.2px solid rgba(0, 0, 0, 0.2);
  width: 450px;
  height: 180px;
  border-radius: 20px;
  box-shadow: -3px 5px 10px -5px rgba(0, 0, 0, 0.75);
  background-repeat: no-repeat;
  background-image: linear-gradient(rgba(4, 9, 30, 0.3), rgba(4, 9, 30, 0.3)),
    url(@/assets/images/prayyy.jpg);
  background-size: cover;
  background-position-y: -70px;
  transition: 0.2s;
}

@media only screen and (max-width: 480px) {
  .banner-info {
    width: 350px;
    height: 180px;
    border-radius: 20px;
    background-position-y: -10px;
  }
}
</style>
