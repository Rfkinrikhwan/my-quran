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
          <h3 class="title position-relative">Jadwal Sholat</h3>
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
            <!-- <router-link
              style="text-decoration: none"
              :to="'/detail/' + surah.nomor"
            > -->
            <div class="col mt-3">
              <div class="list-kota p-3">
                <span>{{ kota.nama }}</span>
              </div>
            </div>
            <!-- </router-link> -->
          </div>
        </div>
      </div>
    </section>
  </div>
  <BottomBar />
</template>

<script>
import BottomBar from "@/components/BottomBar.vue";
// import axios from "axios";

export default {
  name: "DashBoard",
  components: {
    BottomBar,
  },
  data: () => ({
    api: "https://api.banghasan.com/sholat/format/json/kota",
    prayer: [],
    searchKota: "",
    // city: {
    //   id: 1301,
    //   lokasi: "KOTA JAKARTA",
    // },
    // forClearInterval: null,
    // prayerNext: "",
    // cityAll: [],
    // date: new Date().toLocaleDateString("en-ZA"),
    // prayerSchedule: null,
    // loading: true,
    // show: true,
  }),
  // watch: {
  //   show: function () {
  //     if (this.show) this.callTime();
  //   },
  // },
  // methods: {
  //   clearSchedule: function (data, addDate = 0) {
  //     const [year, month, day] = [
  //       new Date().getFullYear(),
  //       new Date().getMonth(),
  //       new Date().getDate() + addDate,
  //     ];
  //     return Object.entries(data)
  //       .filter((time) => {
  //         if (["date", "imsak", "tanggal", "terbit"].includes(time[0]))
  //           return false;
  //         return true;
  //       })
  //       .map((time) => {
  //         const [hour, minutes] = time[1].split(":");
  //         return [time[0], new Date(year, month, day, hour, minutes).getTime()];
  //       });
  //   },
  //   callTime: function () {
  //     const prayerSchedule = this.clearSchedule(this.prayerSchedule[0]);
  //     let interval = setInterval(() => {
  //       const now = new Date().getTime();
  //       let currentPrayer = null;

  //       for (let i = 0; i < prayerSchedule.length; i++) {
  //         if (prayerSchedule[i][i] > now) {
  //           currentPrayer = prayerSchedule[i];
  //           break;
  //         }
  //       }

  //       currentPrayer =
  //         currentPrayer != null
  //           ? currentPrayer
  //           : this.clearSchedule(this.prayerSchedule[1], 1)[0];

  //       const distance = currentPrayer[1] - now;
  //       const hour = Math.floor(distance / (1000 * 60 * 60));
  //       const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //       const second = Math.floor((distance % (1000 * 60)) / 1000);

  //       this.prayerNext = `${hour} jam ${minutes} menit ${second} detik menuju ${currentPrayer[0]}`;

  //       if (!this.show) clearInterval(interval);
  //     }, 1000);
  //   },
  //   getNearestTime: function (clear = false) {
  //     this.callTime();
  //     console.log(clear);
  //   },
  //   setCity: function (city) {
  //     this.city = city;
  //     window.localStorage.setItem("city", JSON.stringify(city));
  //     this.searchSchedule();
  //   },
  //   searchCity: function () {
  //     axios
  //       .get(this.api + "kota/cari/" + this.$refs.search.$refs.input.value)
  //       .then((resp) => {
  //         this.cityAll = resp.data.data;
  //       });
  //   },
  //   searchSchedule: function () {
  //     this.loading = true;
  //     let city = window.localStorage.getItem("city")
  //       ? JSON.parse(window.localStorage.getItem("city"))
  //       : this.city;
  //     this.city = city;

  //     axios.get(this.api + "kota/id/" + city.id).then((resp) => {
  //       let date = new Date().toLocaleDateString("en-ZA").split("/");
  //       axios
  //         .get(
  //           this.api +
  //             "jadwal/" +
  //             resp.data.data.id +
  //             "/" +
  //             date[0] +
  //             "/" +
  //             date[1]
  //         )
  //         .then((res) => {
  //           if (parseInt(date[2]) != 1) {
  //             let nextMount = date[1] == 12 ? 1 : parseInt(date[1]) + 1;
  //             axios
  //               .get(
  //                 this.api +
  //                   "jadwal/" +
  //                   resp.data.data.id +
  //                   "/" +
  //                   date[0] +
  //                   "/" +
  //                   nextMount
  //               )
  //               .then((nxt) => {
  //                 this.prayerSchedule = this.setPrayerSchedule(
  //                   res.data.data.jadwal,
  //                   nxt.data.data.jadwal,
  //                   parseInt(date[2])
  //                 );
  //                 this.date = this.prayerSchedule[0].tanggal;
  //                 this.getNearestTime();
  //                 this.loading = false;
  //                 this.show = localStorage.getItem("city") ? true : false;
  //                 this.callTime();
  //               });
  //             return;
  //           }
  //           this.prayerSchedule = res.data.data.jadwal;
  //           this.date = this.prayerSchedule[0].tanggal;
  //           this.getNearestTime();
  //           this.loading = false;
  //           this.show = localStorage.getItem("city") ? true : false;
  //           this.callTime();
  //         });
  //     });
  //   },
  //   setPrayerSchedule: function (current, next, day) {
  //     let wrapScedule = [...current, ...next];
  //     return wrapScedule.slice(day - 1, day + 29);
  //   },
  //   clearText: function (text) {
  //     return text.split("/").join(" ");
  //   },
  // },
  // created: function () {
  //   this.searchSchedule();
  // },
  // onMounted: function () {
  //   clearInterval(this.forClearInterval);
  // },

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
