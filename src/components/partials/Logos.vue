<script>
export default {};
</script>

<template>
  <div class="wrapper">
    <div class="my-container">
      <div class="logo">
        <img src="../../../public/img/logo-1.png" alt="" />
      </div>
      <div class="logo">
        <img src="../../../public/img/logo-2.png" alt="" />
      </div>
      <div class="logo">
        <img src="../../../public/img/logo-3.png" alt="" />
      </div>
      <div class="logo">
        <img src="../../../public/img/logo-4.png" alt="" />
      </div>
      <div class="logo">
        <img src="../../../public/img/logo-5.png" alt="" />
      </div>
      <div class="logo">
        <img src="../../../public/img/logo-1.png" alt="" />
      </div>
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
    // filter: grayscale(100%);
    filter: invert(80%);
    .logo {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      margin: 0 40px;
      width: calc(100% / 6);
      img {
        max-height: 100%;
        max-width: 100%;
      }
    }
  }
}
</style>
