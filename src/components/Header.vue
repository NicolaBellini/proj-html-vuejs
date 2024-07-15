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
          <i class="fa-solid fa-clock"></i>
          <span>
            Open Hours
            {{ store.contacts.orari }}
          </span>
        </span>
      </div>
      <!-- per mettere i loghi scrivere vhtml -->
      <!-- <p v-html="social.twitter"></p> -->
      <div class="contact d-flex">
        <span
          ><i class="fa-solid fa-phone"></i>
          <span> {{ store.contacts.phone }}</span>
        </span>
        <span
          ><i class="fa-solid fa-envelope"></i>
          <span>
            {{ store.contacts.mail }}
          </span>
        </span>
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
    display: flex;
    justify-content: space-between;
    align-items: center;

    .orari {
      width: 50%;
      display: flex;
      align-items: center;

      span {
        color: $paragraph;
      }
    }

    .contact {
      width: 40%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        color: $paragraph;
      }

      a {
        color: $paragraph;
        text-decoration: none;
        margin-left: 10px;
      }
    }
  }

  @media (max-width: 1024px) {
    .container {
      flex-direction: column;
      align-items: flex-start;
      height: auto;
      padding: 10px 0;

      .orari,
      .contact {
        width: 100%;
        margin-bottom: 10px;
      }

      .contact {
        justify-content: flex-start;

        span {
          margin-right: 15px;
          span {
            display: none;
          }
        }

        a {
          margin-right: 15px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .container {
      padding: 5px 0;

      .orari,
      .contact {
        align-items: center;
        justify-content: center;
      }

      .contact {
        flex-wrap: wrap;

        span,
        a {
          i {
            margin: 5px 0;
          }
        }
      }
    }
  }
}
</style>
