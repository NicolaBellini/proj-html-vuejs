<script>
export default {};
</script>

<template>
  <div class="wrapper">
    <div class="my-container d-flex debug">
      <div class="blender up debug"></div>
      <div class="graphics debug">
        <div class="text debug"></div>
        <div class="graph debug"></div>
      </div>
      <div class="image debug"></div>
      <div class="blender down debug"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/_variables.scss" as *;
@import "../../assets/scss/main.scss";
.wrapper {
  height: 1030px;
  background-color: $body_dark;
  .my-container {
    position: relative;
    .blender {
      position: absolute;
      height: 60px;
      width: 140px;
    }
    & .up {
      top: -30px;
      left: 50%;
      transform: translateX(-50%);
    }
    & .down {
      bottom: -30px;
      left: 50%;
      transform: translateX(-50%);
    }
    .graphics {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      .text {
        width: 480px;
        height: 180px;
        margin-bottom: 100px;
      }
      .graph {
        width: 480px;
        height: 500px;
      }
    }
    .image {
      width: 50%;
      height: 100%;
    }
  }
}
</style>
