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
    <div class="overlay d-flex justify-content-center align-items-center">
      <div class="container my-container">
        <div class="nav row align-items-center justify-content-between">
          <div class="logo col-6 col-md-4">
            <span class="nex">NEX</span>
            <span class="gen">GEN</span>
          </div>
          <div class="menu col-6 col-md-8 d-none d-xl-block">
            <ul class="d-flex justify-content-end">
              <li v-for="(element, index) in store.navNames" :key="index">
                <a href="">{{ element }}</a>
              </li>
            </ul>
          </div>
          <div class="dropdown d-xl-none d-inline">
            <a
              class="btn dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Menu
            </a>

            <ul class="dropdown-menu">
              <li v-for="(element, index) in store.navNames" :key="index">
                <a href="">{{ element }}</a>
              </li>
            </ul>
          </div>
        </div>

        <div
          class="text-wrapper row justify-content-center justify-content-md-end align-items-center"
        >
          <div class="text col-12 col-md-8 col-lg-6">
            <div class="underLine d-none d-lg-block"></div>
            <h1>Logistics that goes further</h1>
            <p>
              For 20 years working with the most innovative in the field of
              transport
            </p>
            <div class="buttons">
              <button class="first"><span>GET IN TOUCH</span></button>
              <button class="second"><span>READ MORE</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/_variables.scss" as *;
@import "../../assets/scss/main.scss";

.wrapper {
  min-height: 700px;
  background-image: url(/img/jumbo.jpg);
  background-size: cover;
  background-position: center;
  .overlay {
    background-color: rgba(0, 0, 0, 0.45);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .my-container {
      .nav {
        color: $whites;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100px;
        .logo {
          font-size: 1.3rem;
          letter-spacing: 0.3rem;
          font-weight: 700;
          .nex {
            color: $light_green;
            padding: 7px 0 7px 27px;
            background-color: $light_green_bg;
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
          }
          .gen {
            color: $whites;
            margin-left: 3px;
            font-weight: 600;
          }
        }
        .menu {
          ul {
            display: flex;
            li {
              list-style: none;
              margin: 0 15px;
              display: flex;
              align-items: center;
              height: 50px;
              transition: 0.2s all;
              &:hover {
                border-bottom: 2px solid $dark_green;
              }

              a {
                font-weight: 600;
                color: $whites;
                text-decoration: none;
              }
            }
            li:last-child {
              border-radius: 3px;
              background-color: $button;
              padding: 10px 20px;
              margin-right: 0;
              &:hover {
                border-bottom: none;
              }
            }
          }
        }
        .dropdown {
          .dropdown-toggle {
            background-color: #048383;
            color: white;
          }
          ul {
            background-color: rgb(184, 184, 184);
            padding: 5%;
            li {
              a {
                text-decoration: none;
                color: white;
              }
            }
          }
        }
      }

      .text-wrapper {
        justify-content: flex-end;

        align-items: center;
        .text {
          margin-bottom: 10%;
          position: relative;
          color: $whites;
          width: 100%;
          max-width: 450px;
          text-align: center;
          .underLine {
            position: absolute;
            height: 40px;
            width: 100%;
            max-width: 350px;
            background-color: $dark_green_bg;
            top: 60px;
            left: 50%;
            transform: translateX(-50%);
          }
          h1 {
            position: relative;
            z-index: 2;
            font-weight: 900;
            font-size: clamp(2rem, 5vw, 5rem);
          }
          p {
            color: $paragraph;
            font-size: clamp(1rem, 2.5vw, 1.5rem);
          }
          .buttons {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 10px;

            .first,
            .second {
              border-radius: 3px;
              padding: 10px 22px;
              transition: 0.3s all;
            }

            .first {
              background-color: $button;
              border: none;
              outline: 2px solid $button;
              &:hover {
                background-color: lighten($button, 5%);
                outline: 2px solid lighten($button, 5%);
              }
            }

            .second {
              background-color: transparent;
              border: none;
              outline: 2px solid $button;
              &:hover {
                background-color: darken($light_green, 20%);
                outline: 2px solid darken($light_green, 20%);
              }
            }

            span {
              color: $whites;
            }
          }
        }
      }
    }
  }
}
</style>
