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

      <div
        class="footer-list glass"
        v-for="(item, index) in store.footerGroup"
        :key="index"
      >
        <h4>{{ item.title }}</h4>
        <ul>
          <li v-for="(item, index) in item.names" :key="index">
            <a href="#">{{ item }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/_variables.scss" as *;
@import "../assets/scss/main.scss";

.wrapper {
  // height: 670px;
  background-image: url(/img/bg-10.jpg);
  padding-bottom: 5%;
  background-size: cover;
  background-position: bottom center;

  .container {
    font-size: 1.2rem;
    padding-top: 130px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;

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
      padding: 5%;
      width: 260px;
      margin: 0 15px;
      border-radius: 7px;
      background-color: rgba(255, 255, 255, 0.101);

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

  @media (max-width: 1024px) {
    .container {
      flex-direction: column;
      align-items: center;
      padding-top: 80px;

      .contacts,
      .glass {
        width: 100%;
        margin: 15px 0;
      }

      .contacts {
        margin-bottom: 30px;

        .logo {
          text-align: center;
        }

        ul {
          text-align: center;

          li {
            display: inline-block;
            margin-right: 10px;
          }
        }

        button {
          display: inline-block;
        }
      }

      .glass {
        ul {
          display: block;
          text-align: center;

          li {
            display: inline-block;
            margin: 5px 10px;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    height: auto;
    .container {
      padding-top: 60px;

      .contacts,
      .glass {
        width: 90%;
        margin: 10px 0;
      }

      .contacts {
        .logo {
          font-size: 1.1rem;

          .nex {
            padding: 5px 0 5px 15px;
          }
        }

        ul {
          li {
            display: block;
            margin: 10px 0;
          }
        }

        button {
          margin-top: 20px;
          padding: 5px 15px;
        }
      }

      .glass {
        ul {
          li {
            display: block;
            margin: 10px 0;
          }
        }
      }
    }
  }
}
</style>
