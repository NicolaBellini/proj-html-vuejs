<script>
import { store } from "../../data/store";
import CardLatest from "./CardLatest.vue";
export default {
  components: {
    CardLatest,
  },
  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <div class="wrapper">
    <div class="my-container d-flex flex-column">
      <div class="text">
        <span>OUR EDITORIAL CONTENT</span>
        <div class="underLine d-none d-md-block"></div>
        <h2>Latest News</h2>
        <div class="textDown d-flex justify-content-between">
          <p>
            Every week we publish content about what is best in the business
            world
          </p>
          <button>SEE ALL</button>
        </div>
      </div>
      <div class="photo d-lg-flex">
        <CardLatest
          v-for="(item, index) in store.cardList"
          :key="index"
          :card="item"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/_variables.scss" as *;
@import "../../assets/scss/main.scss";
.wrapper {
  padding: 5%;
  .my-container {
    justify-content: center;
    .text {
      position: relative;

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
      .photo {
        width: 100%;
      }
    }
  }
}
</style>
