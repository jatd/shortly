<template>
  <div class="card" v-bind:class="{ cardActive: hover }">
    <div class="title" v-if="title">{{ title }}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    hover: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/globals";

.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px;
  align-items: center;
  border-radius: 5px;
  box-sizing: border-box;
  background: $card-background;
  min-width: 150px;
}

.cardActive {
  &:hover {
    border-color: #c4c4aa;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    box-shadow: 0px 3px 15px rgba(190, 190, 137, 0.2);
    text-decoration: underline;
  }
}

.title {
  color: $color-dark;
  font-weight: 700;
  font-family: Ubuntu;
  font-size: 23px;
  margin-bottom: 20px;
}
</style>
