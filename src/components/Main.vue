<script>
import { store } from "../data/store";
import CompanyVue from "./partials/Company.vue";
import Jumbo from "./partials/Jumbo.vue";
import LogisticServices from "./partials/LogisticServices.vue";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    Jumbo,
    LogisticServices,
    CompanyVue,
  },
};
</script>

<template>
  <div class="wrapper flex-column">
    <Jumbo />
    <LogisticServices />
    <CompanyVue />
    main
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;
@import "../assets/scss/main.scss";
</style>
