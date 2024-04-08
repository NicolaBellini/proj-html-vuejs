<script>
export default {};
</script>
<template>
  <div class="wrapper">
    <div class="overlay">
      <div class="container">
        <div class="nav">
          <div class="logo">
            <span class="nex">NEX</span>
            <span class="gen">GEN</span>
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
  background-image: url(../../../public/img/jumbo.jpg);

  .overlay {
    background-color: rgba(0, 0, 0, 0.45);
    width: 100%;
    .container {
      .nav {
        color: $whites;
        display: flex;
        align-items: center;
        height: 80px;
        .logo {
          letter-spacing: 0.3rem;
          .nex {
            font-weight: 600;
            color: $light_green;
            padding: 10px 0 10px 27px;
            background-color: $light_green_bg;
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
          }
          .gen {
            font-weight: 600;
          }
        }
      }
    }
  }
}
</style>
