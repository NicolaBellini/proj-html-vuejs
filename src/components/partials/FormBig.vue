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
    <div class="my-container d-flex">
      <div class="my-form d-flex flex-column justify-content-between">
        <div class="formTitle">
          <span>SEND A MESSAGE</span>
          <div class="underLine"></div>
          <h2>Get in Touch</h2>
          <p>We will responde to your message as soon as possible</p>
        </div>
        <div class="formInput">
          <div class="row g-3">
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Name"
                aria-label="First name"
              />
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Email"
                aria-label="Last name"
              />
            </div>
          </div>
          <div class="row g-3 mt-1">
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Phone"
                aria-label="First name"
              />
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="More Info"
                aria-label="Last name"
              />
            </div>
          </div>
          <textarea
            name=""
            id=""
            cols="20"
            rows="7"
            class="form-control mt-3"
            placeholder="Message"
          ></textarea>
        </div>
        <button>SEND</button>
      </div>
      <div class="text">
        <h4>Example Inc.</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos.
        </p>
        <div class="contactGroup d-flex">
          <div class="icons d-flex">
            <div class="underLine a"></div>
            <i class="fa-solid fa-phone"></i>
            <div class="underLine b"></div>
            <i class="fa-solid fa-envelope"></i>
            <div class="underLine c"></div>
            <i class="fa-solid fa-location-dot"></i>
          </div>
          <div class="d-flex flex-column my-contacts">
            <span>{{ store.contacts.phone }}</span>
            <span> {{ store.contacts.mail }}</span>
            <span> {{ store.contacts.location }}</span>
          </div>
        </div>
        <button class="btn btn-outline-success mt-4">VIEW MAP</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/_variables.scss" as *;
@import "../../assets/scss/main.scss";
.wrapper {
  height: 850px;
  .my-container {
    padding-top: 130px;
    justify-content: center;
    .my-form {
      padding-right: 40px;
      height: 580px;
      width: 720px;
      input,
      textarea {
        background-color: $body_light;
      }
      button {
        display: flex;
        align-items: center;
        border-radius: 3px;
        margin-right: 20px;
        border: none;
        height: 40px;
        width: 90px;
        padding: 10px 22px;
        background-color: $button;
        color: $whites;
        outline: 2px solid $button;
      }
    }
    .text {
      height: 460px;
      width: 360px;
      h4 {
        font-size: 700 !important;
      }
      .contactGroup {
        height: 190px;

        .icons {
          position: relative;
          color: $dark_green;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          width: 50px;
        }
        .underLine {
          position: absolute;
          height: 40px;
          width: 40px;
          background-color: $dark_green_bg;
          left: 5px;
          border-radius: 50%;
          &.a {
            top: 11px;
          }
          &.b {
            top: 75px;
          }
          &.c {
            top: 139px;
          }
        }

        .my-contacts {
          margin-left: 10px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-around;
        }
      }
    }
  }
}
</style>
