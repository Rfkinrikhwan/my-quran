<template>
  <div style="height: 99vh">
    <section>
      <router-link to="/sholat">
        <h2 class="d-flex justify-content-center align-items-center mt-5">
          {{ $route.params.nama }}
        </h2>
      </router-link>
    </section>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-12 mt-3">
            <span>TERBIT</span>
            <div class="p-3 border bg-light">{{ detail.terbit }}</div>
          </div>
          <div class="col-12 mt-3">
            <span>SUBUH</span>
            <div class="p-3 border bg-light">{{ detail.subuh }}</div>
          </div>
          <div class="col-12 mt-3">
            <span>DZUHUR</span>
            <div class="p-3 border bg-light">{{ detail.dzuhur }}</div>
          </div>
          <div class="col-12 mt-3">
            <span>ASHAR</span>
            <div class="p-3 border bg-light">{{ detail.ashar }}</div>
          </div>
          <div class="col-12 mt-3">
            <span>MAGHRIB</span>
            <div class="p-3 border bg-light">{{ detail.maghrib }}</div>
          </div>
          <div class="col-12 mt-3">
            <span>ISYA</span>
            <div class="p-3 border bg-light">{{ detail.isya }}</div>
          </div>
          <div class="col-12 mt-3">
            <span>IMSAK</span>
            <div class="p-3 border bg-light">{{ detail.imsak }}</div>
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

      console.log(this.detail);
    },
  },
  mounted() {
    this.getDetail();
  },
};
</script>
