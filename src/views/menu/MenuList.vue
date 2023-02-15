<template>
  <div style="height: 100vh; overflow-y: scroll" class="menu">
    <section
      class="title-menu d-flex justify-content-center align-item-center mt-3"
    >
      <span>أبيزار</span>
    </section>
    <section class="mt-4 mb-5">
      <div class="container px-4">
        <div class="row">
          <div class="col">
            <router-link to="/listsurah">
              <div class="active">
                <div class="p-3 border alquran">
                  <p>Al-Qur'an</p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col">
            <router-link to="/doaharian">
              <div class="active">
                <div class="p-3 border doa-doa">
                  <p>Doa Harian</p>
                </div>
              </div>
            </router-link>
            <div class="col mt-4">
              <router-link to="/asmaulhusnah">
                <div class="active">
                  <div class="p-3 border asmaul">
                    <p>Asmasul Husna</p>
                  </div>
                </div>
              </router-link>
              <router-link to="/todo">
                <div class="col mt-4 active">
                  <div class="p-3 border notes">
                    <p>Catatan Kegiatan</p>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
          <div class="col">
            <router-link to="/sholat">
              <div class="active">
                <div class="p-3 border jadwalshalat">
                  <p>Jadwal Sholat</p>
                </div>
              </div>
            </router-link>
            <div class="col mt-4">
              <div class="active">
                <router-link to="/tafsir">
                  <div class="p-3 border tafsir">
                    <p>Tafsir Qur`an</p>
                  </div>
                </router-link>
              </div>
              <div class="col mt-4 cooming">
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

<style></style>
