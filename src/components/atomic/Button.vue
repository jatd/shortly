<template>
  <button @click="callback">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    click: {
      type: Function
    }
  },

  methods: {
    callback: function(e) {
      this.$emit("click", e);
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../styles/globals";

button {
  font-weight: 600;
  outline: none;
  background-color: #e0dada;
  bottom: 0px;
  margin: 0px;
  max-width: 600px;
  width: 100%;
  height: 60px;
  font-size: 26px;
  cursor: pointer;
  color: #43443d;
  word-break: break-all;
  white-space: pre-wrap;
  font-family: Ubuntu;
  border-radius: 25px;
  outline: none !important;
  border: 5px solid #ffffed;

  &:hover {
    color: $primary-color;
  }
}
</style>