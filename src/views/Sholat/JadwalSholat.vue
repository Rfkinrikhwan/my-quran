<template>
  <div style="height: 99vh">
    <section>
      <nav class="nav-top navbar fixed-top navbar-light bg-light">
        <div class="">
          <div class="container">
            <input
              placeholder="Cari kota..."
              required=""
              class="input"
              name="text"
              type="text"
              autocomplete="off"
              v-model="searchKota"
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
          <h3 class="title position-relative" style="left: 4.5em">
            Jadwal Sholat
          </h3>
          <router-link to="/menu">
            <h3 class="title2 position-relative">
              <i class="fa-solid fa-house-chimney"></i>
            </h3>
          </router-link>
        </div>
      </nav>
    </section>

    <section class="mt-3 d-flex justify-content-center align-items-center">
      <div class="nav-surah mt-5">
        <div class="container">
          <div
            class="row cols-12"
            v-for="(kota, index) in searchCity"
            :key="index"
          >
            <router-link :to="'/sholat/' + kota.id + '/' + kota.nama">
              <div class="col mb-3">
                <div class="list-kota p-3">
                  <span>{{ kota.nama }}</span>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "DashBoard",
  components: {},
  data: () => ({
    api: "https://api.banghasan.com/sholat/format/json/kota",
    prayer: [],
    searchKota: "",
  }),

  methods: {
    getPrayer: async function () {
      const data = await fetch(this.api);
      const pray = await data.json();
      this.prayer = pray.kota;
    },
  },
  mounted() {
    this.getPrayer();
  },
  computed: {
    searchCity() {
      if (!this.searchKota) {
        return this.prayer;
      } else {
        return this.prayer.filter(({ nama }) =>
          nama.toLowerCase().includes(this.searchKota.toLowerCase())
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
