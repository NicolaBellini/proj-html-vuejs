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
        <div class="logo">
          <span class="nex">NEX</span>
          <span class="gen">GEN</span>
        </div>
        <ul>
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
          <button><span>GET IN TOUCH</span></button>
        </ul>
      </div>

      <div class="footer-list glass">
        <h4>Lista 2</h4>
        <ul>
          <li><a href="#">Elemento 2.1</a></li>
          <li><a href="#">Elemento 2.2</a></li>
          <li><a href="#">Elemento 2.3</a></li>
          <li><a href="#">Elemento 2.4</a></li>
          <li><a href="#">Elemento 2.5</a></li>
        </ul>
      </div>

      <div class="footer-list glass">
        <h4>Lista 3</h4>
        <ul>
          <li><a href="#">Elemento 3.1</a></li>
          <li><a href="#">Elemento 3.2</a></li>
          <li><a href="#">Elemento 3.3</a></li>
          <li><a href="#">Elemento 3.4</a></li>
          <li><a href="#">Elemento 3.5</a></li>
        </ul>
      </div>

      <div class="footer-list glass">
        <h4>Lista 4</h4>
        <ul>
          <li><a href="#">Elemento 4.1</a></li>
          <li><a href="#">Elemento 4.2</a></li>
          <li><a href="#">Elemento 4.3</a></li>
          <li><a href="#">Elemento 4.4</a></li>
          <li><a href="#">Elemento 4.5</a></li>
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
  background-image: url(../../public/img/bg-10.jpg);
  background-size: cover;
  background-position: bottom center;
  .container {
    padding-top: 130px;
    display: flex;
    justify-content: space-between;
    .contacts {
      width: 240px;
      margin-left: 0;
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
        li {
          list-style: none;
          a {
            color: $paragraph;
            text-decoration: none;
          }
        }
      }
    }
  }
}
</style>
