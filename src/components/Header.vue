<script>
import { store } from "../data/store";

export default {
  data() {
    return {
      store,
      social: {
        twitter: '<i class="fa-brands fa-x-twitter"></i>',
      },
    };
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="container d-flex">
      <div class="orari d-flex">
        <span>
          <i class="fa-solid fa-clock"></i> Open Hours
          {{ store.contacts.orari }}
        </span>
      </div>
      <!-- per mettere i loghi scrivere vhtml -->
      <!-- <p v-html="social.twitter"></p> -->
      <div class="contact d-flex">
        <span><i class="fa-solid fa-phone"></i>{{ store.contacts.phone }}</span>
        <span
          ><i class="fa-solid fa-envelope"></i>{{ store.contacts.mail }}</span
        >
        <a v-html="store.contacts.social.facebook"></a>
        <a v-html="store.contacts.social.twitter"></a>
        <a v-html="store.contacts.social.linkedin"></a>
      </div>

      <!-- menu -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;
@import "../assets/scss/main.scss";
.wrapper {
  background-color: $contacts_color;
  color: $paragraph;

  .container {
    height: 50px;
    font-size: 0.7rem;
    justify-content: space-between;
    align-items: center;
    .orari {
      width: 50%;
      align-items: center;
      span {
        color: $paragraph;
      }
    }
    .contact {
      width: 40%;
      justify-content: space-between;
      align-items: center;
      span {
        color: $paragraph;
      }
    }
  }
}
</style>
