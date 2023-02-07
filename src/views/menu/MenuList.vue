<template>
  <div style="height: 100vh; overflow-y: scroll" class="menu">
    <section class="d-flex justify-content-center align-item-center mt-3">
      <h1>ABIZAR</h1>
    </section>
    <section class="mt-5 mb-5">
      <div class="container px-4">
        <div class="row">
          <div class="col">
            <router-link to="/listsurah">
              <div class="p-3 border alquran">
                <p>Al-Qur'an</p>
                <img src="@/assets/images/read.png" alt="" />
              </div>
            </router-link>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col">
            <router-link to="doaharian">
              <div class="p-3 border doa-doa">
                <!-- <img src="@/assets/images/hand.png" alt="" /> -->
                <p>Doa Harian</p>
              </div>
            </router-link>
            <div class="col mt-4">
              <div class="p-3 border asmaul">
                <p>Asmasul Husna</p>
              </div>
              <div class="col mt-4">
                <div class="p-3 border qoute">
                  <p>Quote Islamic</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <router-link to="/sholat">
              <div class="p-3 border jadwalshalat">
                <p>Jadwal Sholat</p>
              </div>
            </router-link>
            <div class="col mt-4">
              <div class="p-3 border tafsir">
                <p>Tafsir</p>
              </div>
              <div class="col mt-4">
                <div class="p-3 border dzikir">
                  <p>Dzikir Pagi Petang</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  components: {},
  data: () => ({}),
};
</script>
