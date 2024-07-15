<script>
export default {
  props: {
    card: Object,
  },
};
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col">
        <div class="my-card">
          <img :src="card.img" :alt="card.titolo" />
          <h4>{{ card.titolo }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/_variables.scss" as *;
@import "../../assets/scss/main.scss";

.my-card {
  margin-top: 40px;
  margin-right: 20px;
  position: relative;

  &:last-child {
    margin-right: 0;
  }
  h4 {
    width: 80%;
    font-weight: 700;
    color: $whites;
    position: absolute;
    bottom: 30px;
    left: 5%;
    text-align: center;
  }
  img {
    max-width: 100%;
    border-radius: 10px;
    filter: brightness(60%);
  }
  @media (max-width: 576px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: auto;

    h4 {
      position: static;
      bottom: -5%;
      width: auto;
      margin-left: 20px;
      color: rgb(69, 69, 69);
      transform: none;
    }

    img {
      max-width: 80%;
      filter: brightness(100%);
    }
  }
}
</style>
