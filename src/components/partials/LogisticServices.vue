<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="my-container d-flex flex-column flex-xl-row">
      <div class="w-100 w-xl-50 me-5">
        <span>OUR BUSINESS AREAS</span>
        <h2>Logistics Services</h2>
        <p>
          We are leaders in providing logistiscs services with a set of cutting
          edge technologies and a team of experienced and renowed professionals.
        </p>
        <div class="my-badges d-flex">
          <div class="my-badge">Tradition</div>
          <div class="my-badge">Quality</div>
          <div class="my-badge">Security</div>
        </div>
        <button class="readMore">READ MORE</button>
      </div>
      <div
        class="cards d-flex flex-column flex-xxl-row w-100 w-xl-50 justify-content-center align-items-center"
      >
        <div class="photo m-3">
          <img src="../../../public/img/gallery-3.jpg" alt="" />
          <h3>Technology</h3>
          <p>
            Focused on developing technology solutions adapted to our client's
            needs
          </p>
        </div>
        <div class="photo m-3">
          <img src="../../../public/img/gallery-5.jpg" alt="" />
          <h3>Transport</h3>
          <p>
            wWe develop operational strategies to improve logistical efficiency
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/_variables.scss" as *;
@import "../../assets/scss/main.scss";
.wrapper {
  background-color: $body_light;
  .my-container {
    justify-content: space-between;
    align-items: center;
    div {
      width: 30%;
      span {
        color: $dark_green;
        font-weight: 600;
      }
      h2 {
        margin: 35px 0;
        font-size: 3rem;
        font-weight: 800;
      }
      p {
        color: $paragraph;
        margin-bottom: 30px;
        font-size: 1.1rem;
      }
      .my-badges {
        height: 40px;
        .my-badge {
          display: flex;
          align-items: center;
          color: $dark_green;
          background-color: $light_green_bg;
          height: 40px;
          padding: 10px 18px 10px;
          width: auto;
          margin-right: 8px;
        }
      }
      .readMore {
        margin-top: 20px;
        color: $whites;
        border-radius: 3px;
        margin-right: 20px;
        background-color: $button;
        border: none;
        outline: 2px solid $button;
        padding: 10px 22px;
      }
    }
    .photo {
      width: 360px;
      padding: 40px 60px;
      background-color: $whites;
      border-radius: 13px;
      img {
        width: 240px;
        height: 160px;
        margin-bottom: 25px;
      }
      h3 {
        margin-bottom: 30px;
        font-weight: 600;
      }
    }
  }
}
</style>
