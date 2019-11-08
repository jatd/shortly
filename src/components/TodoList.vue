<template>
  <div class="wrapper">
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
  props: ["items"],
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
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
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
</style>