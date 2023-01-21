<template>
  <nav class="nav-top navbar fixed-top navbar-light bg-light">
    <div class="">
      <div class="container">
        <input
          placeholder="search for surahs of the quran"
          required=""
          class="input"
          name="text"
          type="text"
          autocomplete="off"
          :v-model="Search"
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
              stroke="currentColor"
              fill="none"
              d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
            ></path>
            <path
              d="M338.29 338.29L448 448"
              stroke-width="32"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke="currentColor"
              fill="none"
            ></path>
          </svg>
        </div>
      </div>
      <h3 class="title position-relative">Quran App</h3>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarVue",
  props: {
    Search: String,
  },
};
</script>

<style scoped></style>
