<script>
export default {};
</script>

<template>
  <div class="wrapper">
    <div class="my-container d-flex debug">
      <div class="text debug"></div>
      <div class="my-form debug"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/_variables.scss" as *;
@import "../../assets/scss/main.scss";
.wrapper {
  height: 455px;
  .my-container {
    justify-content: center;
    align-items: center;
    .text {
      height: 220px;
      width: 450px;
    }
    .my-form {
      height: 220px;
      width: 440px;
    }
  }
}
</style>
