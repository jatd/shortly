<template>
  <div class="wrapper">
    <div class="container">{{ item.description }}</div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      todo: null
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/globals";

.wrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
  height: 100%;
}

.container {
  display: flex;
  flex-direction: column;
}

.create-event-modal {
  padding: 20px;
}

.create-event-text {
  color: $primary-color;
  padding-bottom: 15px;
}

li {
  padding: 5px;
  min-height: 40px;
  word-wrap: break-word;
}
</style>