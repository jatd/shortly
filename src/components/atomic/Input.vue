<template>
  <div class="input-container">
    <input :name="name" :placeholder="placeholder" :required="required" @input="handleInput" />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    },
    placeholder: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    required: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    }
  }
};
</script>

<style scoped lang="scss">
.input-container {
  height: 50px;
}

input {
  border-radius: 5px;
  outline-color: #a28298;
  outline-width: 2px;
  height: 50px;
  outline: none;
  padding-left: 10px;
  font-family: Ubuntu;
  border: 5px solid #999;
  font-size: 16px;

  &:required {
    box-shadow: none;
  }
}
</style>