<template>
  <section id="home">
    <div class="content-in d-flex justify-content-center align-items-center">
      <div class="container text-center">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="title-menu col-6 mt-0">
            <span>أبيزار</span>
          </div>
        </div>
        <div class="row d-flex justify-content-center align-items-center">
          <div class="sub-title col-12 mt-0">
            <p>Learn Quran and Recite once everyday</p>
          </div>
        </div>
        <div class="row d-flex justify-content-center align-items-center">
          <div class="front col-6 mt-3">
            <!-- <img class="quran-one" src="@/assets/images/quranhome.png" alt="" /> -->
          </div>
          <div class="col-6">
            <router-link
              style="text-decoration: none; color: #faf8fc"
              to="/menu"
            >
              <button class="started">Get started</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>

<style scoped>
.content-in {
  height: 99vh;
}
.front {
  border: 1px solid black;
  height: 450px;
  width: 350px;
  border-radius: 30px;
  background-color: #5222c2;
  background-image: url(@/assets/images/started.svg);
  background-size: cover;
}

.started {
  position: relative;
  bottom: 40px;
  width: 150px;
  border: none;
  padding: 15px;
  background-color: #f9b091;
  color: #faf8fc;
  border-radius: 30px;
  font-weight: 800;
  font-family: revert;
  transition: 1s;
}

.started:hover {
  color: #251441;
}

.sub-title {
  font-weight: 800;
  color: #b9a2d8;
}

@media only screen and (min-width: 480px) {
  .quran-one {
    width: 235px;
    animation: MoveUpDown 2s linear infinite;
    position: absolute;
    margin-top: 350px;
    margin-left: -7em;
    /* display: block; */
    filter: drop-shadow(5px 5px 3px #e68e70);
  }
}

@media only screen and (max-width: 680px) {
  .quran-one {
    width: 235px;
    animation: MoveUpDown 2s linear infinite !important;
    position: absolute !important;
    margin-top: 300px !important;
    margin-left: -7em !important;
    /* display: block; */
    filter: drop-shadow(5px 5px 3px #e68e70);
  }
}

@media only screen and (max-width: 800px) {
  .quran-one {
    width: 235px;
    animation: MoveUpDown 2s linear infinite;
    position: absolute;
    margin-top: 400px;
    margin-left: -7em;
    /* display: block; */
    filter: drop-shadow(5px 5px 3px #e68e70);
  }
}

@keyframes MoveUpDown {
  0%,
  100% {
    top: 0;
  }
  50% {
    top: 20px;
  }
}
</style>
