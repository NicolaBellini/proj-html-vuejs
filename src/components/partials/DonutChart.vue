<script>
export default {};
</script>

<template>
  <div class="donutWrapper d-flex">
    <div class="donutCenter d-flex">
      <h2>0</h2>
      <h6>%</h6>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/_variables.scss" as *;
@import "../../assets/scss/main.scss";
.donutWrapper {
  border-radius: 50%;
  height: 110px;
  width: 110px;
  justify-content: center;
  align-items: center;
  background-color: $logos;
  position: relative;

  .donutCenter {
    height: 90px;
    width: 90px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    background-color: $body_dark;
    color: $whites;
    h2 {
      font-size: 2.5rem;
    }
    h6 {
      font-size: 1.3rem;
    }
  }
}
</style>
