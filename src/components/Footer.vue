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
  <div class="wrapper">
    <div class="container">
      <div class="footer-list contacts">
        <ul>
          <li>
            <div class="logo">
              <span class="nex">NEX</span>
              <span class="gen">GEN</span>
            </div>
          </li>
          <li>
            <a href="#">A Functional HTML Template for Corporate & Business</a>
          </li>
          <li>
            <a href="#"
              ><i class="fa-solid fa-phone"></i> {{ store.contacts.phone }}</a
            >
          </li>
          <li>
            <a href="#"
              ><i class="fa-solid fa-envelope"></i> {{ store.contacts.mail }}</a
            >
          </li>
          <li>
            <a href="#"
              ><i class="fa-solid fa-location-dot"></i>
              {{ store.contacts.location }}</a
            >
          </li>
          <button>GET IN TOUCH</button>
        </ul>
      </div>

      <div class="footer-list glass">
        <h4>About</h4>
        <ul>
          <li><a href="#">The Company</a></li>
          <li><a href="#">Institutional</a></li>
          <li><a href="#">Social & Events</a></li>
          <li><a href="#">Innovation</a></li>
          <li><a href="#">Enviroment</a></li>
          <li><a href="#">Technology</a></li>
        </ul>
      </div>

      <div class="footer-list glass">
        <h4>Transport</h4>
        <ul>
          <li><a href="#">Industrialized</a></li>
          <li><a href="#">Chemicals</a></li>
          <li><a href="#">Packaage Liquids</a></li>
          <li><a href="#">Construction</a></li>
          <li><a href="#">Laminated Woods</a></li>
          <li><a href="#">And Others</a></li>
        </ul>
      </div>

      <div class="footer-list glass">
        <h4>Support</h4>
        <ul>
          <li><a href="#">Responsability</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">About cookies</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Accessibility</a></li>
          <li><a href="#">Information</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/_variables.scss" as *;
@import "../assets/scss/main.scss";
.wrapper {
  height: 670px;
  background-image: url(/img/bg-10.jpg);
  background-size: cover;
  background-position: bottom center;
  .container {
    font-size: 1.2rem;
    padding-top: 130px;
    display: flex;
    justify-content: space-between;
    h4 {
      color: $whites;
    }
    .contacts {
      width: 240px;
      margin-right: 30px;

      .logo {
        margin-bottom: 25px;
        color: $whites;
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
          margin-left: 3px;
          font-weight: 600;
        }
      }
      ul {
        margin: 0;
        li {
          list-style: none;
          margin-bottom: 15px;
          a {
            color: $paragraph;
            text-decoration: none;
          }
        }
        button {
          background-color: transparent;
          color: $whites;
          margin-top: 30px;
          outline: 1px solid $dark_green;
          border: none;
          border-radius: 4px;
          padding: 7px 20px;
          transition: 0.5s ease all;
          &:hover {
            background-color: $dark_green;
          }
        }
      }
    }
    .glass {
      padding: 30px 0 0 20px;
      width: 260px;
      margin: 0 15px;
      border-radius: 7px;
      background-color: rgba(255, 255, 255, 0.101);
      height: 330px;
      ul li::before {
        content: "\203A";
        color: $paragraph;
        font-size: 2rem;
        line-height: 16px;
        vertical-align: text-top;
        margin-right: 5px;
      }
      h4 {
        margin-left: 10px;
      }
      ul {
        margin-left: -20px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        li {
          list-style: none;
          margin-top: 7px;
          a {
            text-decoration: none;
            color: $paragraph;
          }
        }
      }
    }
  }
}
</style>
