<template>
  <div>
    <input name="name" placeholder="Test" v-model="model" required="required" />
  </div>
</template>

<script>
export default {
  props: ["name", "placeholder", "model", "required"]
};
</script>

<style scoped lang="scss">
input {
  border-radius: 5px;
  outline-color: #a28298;
  outline-width: 2px;
  height: 50px;
  outline: none;
  padding-left: 10px;
  font-family: Ubuntu;
  border: 5px solid #999;
  margin-bottom: 20px;
  font-size: 16px;

  &:required {
    box-shadow: none;
  }
}
</style>