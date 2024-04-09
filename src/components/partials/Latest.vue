<script>
export default {};
</script>
<template>
  <div class="wrapper">
    <div class="my-container d-flex flex-column">
      <div class="text">
        <span>OUR EDITORIAL CONTENT</span>
        <div class="underLine"></div>
        <h2>Latest News</h2>
        <div class="textDown d-flex justify-content-between">
          <p>
            Every week we publish content about what is best in the business
            world
          </p>
          <button>SEE ALL</button>
        </div>
      </div>
      <div class="photo d-flex">
        <div class="my-card">
          <img src="../../../public/img/news-1.jpg" alt="" />
          <h4>Increasing creativity is possible for everyone</h4>
        </div>
        <div class="my-card">
          <img src="../../../public/img/news-2.jpg" alt="" />
          <h4>Because market research is part of the business plan</h4>
        </div>
        <div class="my-card">
          <img src="../../../public/img/news-3.jpg" alt="" />
          <h4>Working from home is now a trend</h4>
        </div>
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
      position: relative;
      height: 170px;
      .underLine {
        position: absolute;
        height: 60px;
        width: 150px;
        background-color: $dark_green_bg;
        top: 59px;
        left: 147px;
        border-radius: 4px;
      }
      button {
        color: $whites;
        border-radius: 3px;
        margin-right: 20px;
        background-color: $button;
        border: none;
        height: 40px;
        outline: 2px solid $button;
        padding: 10px 22px;
      }
      p {
        margin-top: 20px;
      }
      h2 {
        margin-top: 30px;
      }
      span {
        color: $dark_green;
        font-weight: 700;
      }
    }
    .photo {
      height: 360px;
      .my-card {
        position: relative;
        padding: 30px;
        height: 360px;
        width: calc(100% / 3);
        h4 {
          width: 80%;
          font-weight: 700;
          color: $whites;
          position: absolute;
          bottom: 30px;
          left: 35px;
          text-align: center;
        }
        img {
          max-width: 100%;
          border-radius: 10px;
          filter: brightness(60%);
        }
      }
    }
  }
}
</style>
