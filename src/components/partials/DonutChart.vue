<script>
export default {};
</script>

<template>
  <div class="donutWrapper debug d-flex">
    <div class="donutCenter d-flex debug">
      <h2>0</h2>
      <span>%</span>
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
    span {
      font-size: 1.3rem;
    }
  }
}
</style>
