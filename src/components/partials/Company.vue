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
    <div
      class="my-container d-flex justify-content-start justify-content-lg-center justify-content-xxl-start me-4"
    >
      <div class="blender up"></div>

      <div class="graphics mt-3">
        <div class="text w-100">
          <span>ABOUT THE COMPANY</span>

          <div>
            <h2>The Company</h2>
            <p>
              With all of this expertise and capability comes an unrivalled
              commitment to customer service
            </p>
          </div>
        </div>
        <div class="graph d-flex">
          <div class="graphSection d-flex flex-column flex-sm-row">
            <div class="donutPlace">
              <DonutChart class="donut" />
            </div>
            <div class="donutText m-4">
              <h3>Leadership</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatem, labore!
              </p>
            </div>
          </div>
          <div class="graphSection d-flex flex-column flex-sm-row">
            <div class="donutPlace">
              <DonutChart class="donut" />
            </div>
            <div class="donutText m-4">
              <h3>Psicology</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatem, labore!
              </p>
            </div>
          </div>
          <div class="graphSection d-flex flex-column flex-sm-row">
            <div class="donutPlace">
              <DonutChart class="donut" />
            </div>
            <div class="donutText m-4">
              <h3>Flexibility</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatem, labore!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="blender down"></div>
    </div>
    <div class="image d-none d-xxl-block">
      <img src="/img/about-5.jpg" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/_variables.scss" as *;
@import "../../assets/scss/main.scss";
.wrapper {
  background-color: $body_dark;
  position: relative;
  .my-container {
    .blender {
      position: absolute;
      height: 60px;
      width: 150px;
      z-index: 3;
      overflow: hidden;
      background-image: radial-gradient(
          circle,
          $light_green 4px,
          transparent 4px
        ),
        radial-gradient(circle, $light_green 4px, transparent 4px);
      background-position: 3px 12px, 3px 12px;
      background-size: 16px 16px;
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
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .text {
        margin-bottom: 100px;
        h2 {
          color: $whites;
          position: relative;
          z-index: 4;
        }
        span {
          color: $dark_green;
          font-weight: 600;
        }
      }
      .graph {
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        .donutPlace {
          height: 100px;
          margin-right: 20px;
        }
        .donutText {
          width: 300px;
          span {
            color: $whites !important;
          }
          h3 {
            color: $whites;
            font-weight: 600;
          }
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
  @media (min-width: 1400px) {
    .text {
      width: 50% !important;
    }
  }
}
</style>
