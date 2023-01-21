<template>
  <div class="mt-1 home d-flex justify-content-center align-items-center">
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.content {
  width: 500px;
  height: max-content;
  /* height: max-content; */
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px,
    rgba(0, 0, 0, 0.117647) 0px 1px 4px;
  border-radius: 5px;
  background-color: #faf8fc;
  scroll-behavior: smooth;
  overflow-x: hidden;
}
</style>
