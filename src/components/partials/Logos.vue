<script>
export default {};
</script>

<template>
  <div class="wrapper">
    <div class="my-container">
      <div class="logo debug"></div>
      <div class="logo debug"></div>
      <div class="logo debug"></div>
      <div class="logo debug"></div>
      <div class="logo debug"></div>
      <div class="logo debug"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/_variables.scss" as *;
@import "../../assets/scss/main.scss";
.wrapper {
  background-color: $body_light;
  height: 280px;
  .my-container {
    display: flex;
    align-items: center;
    .logo {
      height: 40px;
      margin: 0 40px;
      width: calc(100% / 6);
    }
  }
}
</style>
