<template>
  <section>
    <div class="d-flex justify-content-center align-items-center">
      <h3>this is page prayer schedule</h3>
    </div>
    <div class="kota border d-flex justify-content-center align-items-center">
      test
    </div>
  </section>

  <BottomBar />
</template>

<script>
import BottomBar from "@/components/BottomBar.vue";

export default {
  components: {
    BottomBar,
  },
  data: () => ({
    url: "https://api.myquran.com/v1/sholat/",
  }),
  methods: {},
};
</script>

<style lang="scss" scoped></style>
