<template>
  <div style="height: 99vh; scroll-behavior: smooth">
    <section class="d-flex justify-content-center">
      <div class="banner-info mt-5 p-3"></div>
    </section>

    <section
      class="mt-3 d-flex justify-content-center align-items-center container"
    >
      <div class="nav-surah mt-3">
        <div class="container">
          <div
            class="row row-cols-1"
            v-for="(doa, index) in doaharian"
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
                        <p class="one">{{ doa.doa }}</p>
                      </div>
                    </div>
                    <div class="col">
                      <div
                        style="margin-top: 10px"
                        @click="detailDesc(index + 1)"
                      >
                        <i
                          v-if="detail == false"
                          class="fa-solid fa-chevron-right mt-4 ms-5"
                        ></i>
                        <i
                          v-else
                          class="fa-solid fa-chevron-down mt-4 ms-5"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="list-detail d-grid p-4" v-if="detail == true">
                <span
                  class="fw-bold fs-3"
                  style="font-style: italic; text-align: right"
                >
                  {{ doa.ayat }}</span
                >
                <span
                  class="mt-4"
                  style="font-style: italic; text-align: right"
                  >{{ '"' + doa.latin + '"' }}</span
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
  <BottomBar />
</template>

<script>
import BottomBar from "@/components/BottomBar.vue";

export default {
  components: {
    BottomBar,
  },
  data: () => ({
    detail: false,
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
}

@media only screen and (max-width: 820px) {
  .banner-info {
    width: 350px;
    height: 180px;
    border-radius: 20px;
    background-position-y: -30px;
  }
}
</style>
