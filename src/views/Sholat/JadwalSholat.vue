<template>
  <div style="height: 99vh">
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
            <h3 class="mt-2 title" style="margin-left: 4.3em">Jadwal Sholat</h3>
            <span class="" style="margin-left: 3em">
              <sidebar />
            </span>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-3 d-flex justify-content-center align-items-center">
      <div class="nav-surah mt-5 mb-5">
        <div class="">
          <div
            class="row cols-12"
            v-for="(kota, index) in searchCity"
            :key="index"
          >
            <router-link :to="'/sholat/' + kota.id + '/' + kota.nama">
              <div class="col mb-1">
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
import sidebar from "@/components/SideBar.vue";

export default {
  name: "DashBoard",
  components: {
    sidebar,
  },
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
