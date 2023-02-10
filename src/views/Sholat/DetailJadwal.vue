<template>
  <div style="height: 99vh">
    <section class="d-flex justify-content-center align-items-center">
      <router-link to="/sholat">
        <div class="prayerS mt-3">
          <h2 class="d-flex justify-content-center align-items-center">
            {{ $route.params.nama }}
          </h2>
          <span class="d-flex justify-content-center align-items-center h4">
            {{ detail.tanggal }}
          </span>
          <span
            class="d-flex justify-content-center align-items-center h4"
            id="time"
          ></span>
          <p
            class="d-flex justify-content-center align-items-center mt-5 h4"
            style="font-size: 10px; color: #fff; letter-spacing: 1px"
          >
            Klik Disini Untuk Kembali
          </p>
        </div>
      </router-link>
    </section>
    <section>
      <div
        class="container d-flex justify-content-center align-items-center mt-2"
      >
        <div class="row schedule">
          <div class="col-12">
            <div class="p-4 d-flex justify-content-center waktu-border">
              <span>Waktu Sholat</span>
            </div>
          </div>
          <div class="col-12">
            <div class="p-4 d-flex justify-content-between waktu-border">
              <span>Terbit</span>
              <span>
                {{ detail.terbit }}
              </span>
            </div>
          </div>
          <div class="col-12">
            <div class="p-4 d-flex justify-content-between waktu-border">
              <span>Subuh</span>
              {{ detail.subuh }}
            </div>
          </div>
          <div class="col-12">
            <div class="p-4 d-flex justify-content-between waktu-border">
              <span>Dzuhur</span>
              {{ detail.dzuhur }}
            </div>
          </div>
          <div class="col-12">
            <div class="p-4 d-flex justify-content-between waktu-border">
              <span>Ashar</span>
              {{ detail.ashar }}
            </div>
          </div>
          <div class="col-12">
            <div class="p-4 d-flex justify-content-between waktu-border">
              <span>Maghrib</span>
              {{ detail.maghrib }}
            </div>
          </div>
          <div class="col-12">
            <div class="p-4 d-flex justify-content-between waktu-border">
              <span>Isya</span>
              {{ detail.isya }}
            </div>
          </div>
          <div class="col-12">
            <div class="p-4 d-flex justify-content-between waktu-border">
              <span>Imsak</span>
              {{ detail.imsak }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    detail: [],
    time: [],
    api: "https://api.banghasan.com/sholat/format/json/jadwal/kota/",
  }),
  methods: {
    getDetail: async function () {
      let d = new Date(),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      const get = await fetch(
        this.api +
          this.$route.params.kota +
          "/tanggal/" +
          `${year}-${month}-${day}`
      );
      const data = await get.json();
      this.detail = data.jadwal.data;
    },

    timeToday: function () {
      setInterval(function myTimer() {
        const d = new Date();
        document.getElementById("time").innerHTML = d.toLocaleTimeString();
      }, 1000);
    },
  },
  mounted() {
    this.getDetail();
    this.timeToday();
  },
};
</script>
