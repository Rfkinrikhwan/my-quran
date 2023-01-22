<template>
  <nav class="nav-bottom navbar fixed-bottom navbar-light bg-light">
    <div
      class="container-fluid d-flex justify-content-center align-items-center"
    >
      <div>
        <div class="row wrap">
          <div
            class="one position-relative col d-flex justify-content-center align-items-center"
          >
            <router-link to="/doaharian">
              <img class="sajadah" src="@/assets/images/pray.svg" alt="" />
            </router-link>
          </div>
          <div class="col"></div>
          <div class="col"></div>
          <div
            class="two position-relative col d-flex justify-content-center align-items-center"
          >
            <router-link to="/listsurah">
              <img class="quran" src="@/assets/images/holy.png" alt="" />
            </router-link>
          </div>
          <div class="col"></div>
          <div class="col"></div>
          <div
            class="three position-relative col d-flex justify-content-center align-items-center"
          >
            <router-link to="/todo">
              <img class="latern" src="@/assets/images/latern.png" alt="" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "BottomBar",
};
</script>

<style scoped>
.nav-bottom {
  margin-top: 40em;
  height: 60px;
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px,
    rgba(0, 0, 0, 0.117647) 0px 1px 4px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
}

@media only screen and (min-width: 480px) {
  .nav-bottom {
    position: fixed !important;
    right: auto;
    left: auto;
    margin-top: 51em;
    height: 70px;
    width: 500px;
    border-top-left-radius: 60px;
    border-top-right-radius: 60px;
  }
}

.one,
.two,
.three {
  width: 45px;
  height: 45px;
  background: linear-gradient(to right, #ae8cdb, #9345f2);
  border-radius: 50px;
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px,
    rgba(0, 0, 0, 0.117647) 0px 1px 4px;
}

.one .sajadah {
  width: 40px;
  padding: 5px;
}

.two .quran {
  width: 50px;
  padding: 5px;
}

.three .latern {
  width: 40px;
  padding: 5px;
}
</style>
