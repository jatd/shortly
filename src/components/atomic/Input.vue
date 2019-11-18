<template>
  <div class="input-container">
    <input
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :value="value"
      :required="required"
      @input="handleInput"
      :autofocus="true"
      :ref="refVar"
    />
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
    },
    type: {
      type: String
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    refVar: {
      type: String,
      default: ""
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
  width: 100%;
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
  width: 100%;

  &:required {
    box-shadow: none;
  }
}
</style>