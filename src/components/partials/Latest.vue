<script>
export default {};
</script>
<template>
  <div class="wrapper">
    <div class="my-container d-flex flex-column debug">
      <div class="text debug"></div>
      <div class="photo debug d-flex">
        <div class="my-card debug"></div>
        <div class="my-card debug"></div>
        <div class="my-card debug"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/_variables.scss" as *;
@import "../../assets/scss/main.scss";
.wrapper {
  height: 830px;
  .my-container {
    justify-content: center;
    .text {
      height: 170px;
    }
    .photo {
      height: 360px;
      .my-card {
        padding: 30px;
        height: 360px;
        width: calc(100% / 3);
      }
    }
  }
}
</style>
