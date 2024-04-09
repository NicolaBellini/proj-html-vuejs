<script>
import DonutChart from "./DonutChart.vue";
export default {
  components: {
    DonutChart,
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="my-container d-flex debug">
      <div class="blender up debug"></div>

      <div class="graphics debug">
        <div class="text debug">
          <span>ABOUT THE COMPANY</span>
          <div class="underLine"></div>
          <h2>The Company</h2>
          <p>
            With all of this expertise and capability comes an unrivalled
            commitment to customer service
          </p>
        </div>
        <div class="graph debug">
          <DonutChart class="donut" />
        </div>
      </div>

      <div class="blender down debug"></div>
    </div>
    <div class="image debug">
      <img src="../../../public/img/about-5.jpg" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/_variables.scss" as *;
@import "../../assets/scss/main.scss";
.wrapper {
  height: 1030px;
  background-color: $body_dark;
  position: relative;
  .my-container {
    .blender {
      position: absolute;
      height: 60px;
      width: 140px;
      z-index: 3;
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
        .underLine {
          position: absolute;
          height: 60px;
          width: 112px;
          background-color: $dark_green_bg;
          top: 153px;
          left: 465px;
        }
        width: 480px;
        height: 180px;
        margin-bottom: 100px;
        h2 {
          color: $whites;
        }
        span {
          color: $dark_green;
          font-weight: 600;
        }
      }
      .graph {
        width: 480px;
        height: 500px;
        DonutChart {
          height: 100px;
        }
      }
    }
  }
  .image {
    overflow: hidden;
    width: 50%;
    height: 100%;
    position: absolute;
    left: 50%;
    img {
      object-fit: cover;
    }
  }
}
</style>
