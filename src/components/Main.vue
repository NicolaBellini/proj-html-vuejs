<script>
import { store } from "../data/store";
export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div><p>main</p></div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;
@import "../assets/scss/main.scss";
p {
  color: $dark_green;
}
</style>
