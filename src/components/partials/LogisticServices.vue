<script>
export default {};
</script>

<template>
  <div class="wrapper">
    <div class="my-container d-flex">
      <div class="debug">testo</div>
      <div class="debug">foto</div>
      <div class="debug">foto</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/_variables.scss" as *;
@import "../../assets/scss/main.scss";
.wrapper {
  height: 730px;
  background-color: $body_light;
  .my-container {
    justify-content: space-between;
    align-items: center;
    div {
      height: 420px;
      width: 30%;
    }
  }
}
</style>
