<script>
export default {};
</script>

<template>
  <div class="wrapper">
    <div class="my-container d-flex debug">
      <div class="my-form debug"></div>
      <div class="text debug"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/_variables.scss" as *;
@import "../../assets/scss/main.scss";
.wrapper {
  height: 850px;
  .my-container {
    padding-top: 130px;
    justify-content: center;
    .my-form {
      height: 580px;
      width: 720px;
    }
    .text {
      height: 460px;
      width: 360px;
    }
  }
}
</style>
