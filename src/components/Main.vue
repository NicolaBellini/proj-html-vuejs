<script>
import { store } from "../data/store";
import Jumbo from "./partials/Jumbo.vue";
export default {
  data() {
    return {
      store,
    };
  },
  components: {
    Jumbo,
  },
};
</script>

<template>
  <div class="wrapper">
    <Jumbo />
    main
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;
@import "../assets/scss/main.scss";
p {
  color: $dark_green;
}
</style>
