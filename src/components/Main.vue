<script>
import { store } from "../data/store";
import CompanyVue from "./partials/Company.vue";
import Jumbo from "./partials/Jumbo.vue";

import LogisticServices from "./partials/LogisticServices.vue";
import LogosVue from "./partials/Logos.vue";
import LatestVue from "./partials/Latest.vue";

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
    LogosVue,
    LatestVue,
  },
};
</script>

<template>
  <div class="wrapper flex-column">
    <Jumbo />
    <LogisticServices />
    <CompanyVue />
    <LogosVue />
    <LatestVue />
    main
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;
@import "../assets/scss/main.scss";
</style>
