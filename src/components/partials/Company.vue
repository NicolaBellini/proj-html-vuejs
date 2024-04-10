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
    <div class="my-container d-flex">
      <div class="blender up debug">
        <!-- <img
          src="https://static.vecteezy.com/system/resources/thumbnails/041/855/251/small_2x/dots-monochrome-pattern-seamless-vector.jpg"
          alt=""
        /> -->
      </div>

      <div class="graphics">
        <div class="text">
          <span>ABOUT THE COMPANY</span>
          <div class="underLine"></div>
          <h2>The Company</h2>
          <p>
            With all of this expertise and capability comes an unrivalled
            commitment to customer service
          </p>
        </div>
        <div class="graph d-flex">
          <div class="graphSection d-flex">
            <div class="donutPlace">
              <DonutChart class="donut" />
            </div>
            <div class="donutText">
              <h3>Leadership</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatem, labore!
              </p>
            </div>
          </div>
          <div class="graphSection d-flex">
            <div class="donutPlace">
              <DonutChart class="donut" />
            </div>
            <div class="donutText">
              <h3>Psicology</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatem, labore!
              </p>
            </div>
          </div>
          <div class="graphSection d-flex">
            <div class="donutPlace">
              <DonutChart class="donut" />
            </div>
            <div class="donutText">
              <h3>Flexibility</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatem, labore!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="blender down debug"></div>
    </div>
    <div class="image">
      <img src="/img/about-5.jpg" alt="" />
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
      overflow: hidden;

      background-image: radial-gradient(
          circle,
          $light_green 2px,
          transparent 2px
        ),
        radial-gradient(circle, $light_green 2px, transparent 2px);
      background-position: 0 0, 8px 8px;
      background-size: 16px 16px;

      // img {
      //   // filter: ;
      //   transform: scale(0.3) translateX(-910px) translateY(-598px);
      //   object-fit: contain;
      // }
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

      .text {
        .underLine {
          position: absolute;
          height: 60px;
          width: 112px;
          background-color: $dark_green_bg;
          top: 153px;
          left: 372px;
          border-radius: 4px;
        }
        width: 480px;
        height: 180px;
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
        width: 480px;
        height: 500px;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        .donutPlace {
          height: 100px;
          margin-right: 20px;
        }
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
