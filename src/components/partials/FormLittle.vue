<script>
export default {};
</script>

<template>
  <div class="wrapper">
    <div class="my-container d-flex">
      <div class="text d-flex flex-column justify-content-between">
        <span>NEWSLETTER</span>
        <div class="underLine"></div>
        <h2>Know First</h2>
        <p>
          Follow closely and receive content about our company and the news of
          the current market
        </p>
      </div>
      <div class="my-form d-flex flex-column justify-content-between">
        <input type="text" class="form-control" placeholder="Name" />
        <input type="mail" class="form-control" placeholder="Email" />
        <button class="">SUBSCRIBE</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/_variables.scss" as *;
@import "../../assets/scss/main.scss";
.wrapper {
  height: 455px;
  background-image: url(/img/bg-1.jpg);
  background-position: center;
  .my-container {
    justify-content: center;
    align-items: center;
    position: relative;
    .text {
      height: 220px;
      width: 450px;

      .underLine {
        position: absolute;
        height: 60px;
        width: 160px;
        background-color: $dark_green_bg;
        top: 167px;
        left: 105px;
        border-radius: 4px;
      }
      h2 {
        color: $whites;
      }
    }
    .my-form {
      height: 220px;
      width: 440px;
      margin-left: 20px;
      input {
        padding: 15px 20px;
      }
      button {
        color: $whites;
        border-radius: 3px;
        margin-right: 20px;
        background-color: $button;
        border: none;
        height: 40px;
        width: 120px;
        outline: 2px solid $button;
        padding: 10px 22px;
      }
    }
  }
}
</style>
