<template>
  <div class="wrapper">
    <div class="title">{{listName}}</div>
    <div class="form-container">
        <li v-for="(item) in items" :key="item.id">
          {{item.title}}
        </li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["items", "listName"],
  data() {
    return {
      todo: null,
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/globals";

.wrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width:100%;
  height: 100%;
}

.title {
  font-size: 28px;
  color: $color-dark;
  text-align: center;
  margin-bottom: 10px;
  font-style:italic;
  opacity: 0.2;
}

.form-container {
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
  word-wrap: break-word;
}
</style>