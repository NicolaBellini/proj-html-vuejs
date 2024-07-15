<script>
import { store } from "../../data/store";
export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="my-container d-flex flex-column flex-xl-row">
      <div class="logo" v-for="(item, index) in store.logoList" :key="index">
        <img :src="item" alt="" />
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
    padding: 6% 0px;

    filter: invert(80%);
    .logo {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      margin: 3px 40px;
      width: calc(100% / 6);
      img {
        max-height: 100%;
        max-width: 100%;
        min-width: 60px;
      }
    }
  }
}
</style>
