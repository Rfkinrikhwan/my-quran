<template>
  <div style="height: 99vh">
    <section>
      <div class="nav-top fixed-top navbar-light bg-light">
        <div class="">
          <div class="container d-flex justify-content-start mt-2">
            <h3 class="mt-2 title" style="margin-left: 3.5em">Asmaul Husnah</h3>
            <span class="" style="margin-left: 3em">
              <sidebar />
            </span>
          </div>
        </div>
      </div>
    </section>
    <section class="sec-asmaul">
      <div class="container mb-5 content-asmaul">
        <div class="row">
          <div
            class="col-12 mt-4"
            v-for="(husna, index) in asmaul"
            :key="index"
          >
            <div class="wrap-asmaul">
              <div
                class="asmaul-wrap d-flex justify-content-center align-items-center"
              >
                <span class="asmaul-ayat">{{ husna.arab }}</span>
              </div>
              <div class="asmaul-latin">
                <span>{{ husna.latin }}</span
                ><br />
                <span>{{ husna.arti }}</span
                ><br /><br />
                <span class="index">{{ husna.urutan }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import sidebar from "@/components/SideBar.vue";

export default {
  components: {
    sidebar,
  },
  data: () => ({
    api: "https://api.npoint.io/3bf5f4488e7115d4fd87",
    asmaul: [],
  }),
  methods: {
    getAsmaulHusnah: async function () {
      const get = await fetch(this.api);
      const data = await get.json();
      this.asmaul = data;
      console.log(data);
    },
  },
  mounted() {
    this.getAsmaulHusnah();
  },
};
</script>

<style lang="scss" scoped></style>
