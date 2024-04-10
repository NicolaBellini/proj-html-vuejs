<script>
export default {
  props: {
    card: Object,
  },
};
</script>

<template>
  <div class="my-card">
    <img :src="card.img" :alt="card.titolo" />
    <h4>{{ card.titolo }}</h4>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/_variables.scss" as *;
@import "../../assets/scss/main.scss";

.my-card {
  position: relative;
  padding: 15px;
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
</style>
