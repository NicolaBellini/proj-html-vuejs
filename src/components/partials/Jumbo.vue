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
    <div class="overlay">
      <div class="my-container">
        <div class="nav">
          <div class="logo">
            <span class="nex">NEX</span>
            <span class="gen">GEN</span>
          </div>
          <div class="menu d-flex">
            <!-- nav lbar dinamica -->
            <ul class="d-flex">
              <li v-for="(element, index) in store.navNames" :key="index">
                <a href="">{{ element }}</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="text-wrapper d-flex">
          <div class="text">
            <div class="underLine"></div>
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
  height: 860px;
  background-image: url(/img/jumbo.jpg);
  background-size: cover;
  .overlay {
    background-color: rgba(0, 0, 0, 0.45);
    width: 100%;
    display: flex;
    justify-content: center;
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
            li {
              list-style: none;
              margin: 0 30px;
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
      }
      .text-wrapper {
        justify-content: flex-end;
        height: 700px;
        align-items: center;
        .text {
          position: relative;
          color: $whites;
          width: 450px;
          .underLine {
            position: absolute;
            height: 40px;
            width: 350px;
            background-color: $dark_green_bg;
            top: 60px;
            left: 3px;
          }
          h1 {
            position: relative;
            z-index: 2;
            font-weight: 900;
            font-size: 5rem;
          }
          p {
            color: $paragraph;
            font-size: 1.5rem;
          }
          .buttons {
            .first {
              border-radius: 3px;
              margin-right: 20px;
              background-color: $button;
              border: none;
              outline: 2px solid $button;
              padding: 10px 22px;
              transition: 0.3s all;
              &:hover {
                background-color: lighten($button, 5%);
                outline: 2px solid lighten($button, 5%);
              }
            }
            .second {
              padding: 10px 22px;
              border-radius: 3px;
              background-color: transparent;
              border: none;
              outline: 2px solid $button;
              transition: 0.3s all;
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
