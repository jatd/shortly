<template>
  <div class="wrapper">
    <div class="container" @click.prevent="setCompletedTodo">
      <div class="todo" v-bind:class="{ isCompleted: item.isCompleted }">{{ item.description }}</div>
      <font-awesome-icon :icon="trashIcon" class="icon" @click.prevent="deleteTodo" />
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";
import debounce from "debounce";

export default {
  props: ["item"],

  data() {
    return {
      trashIcon: faTrash,
      listIcon: faCheck
    };
  },

  methods: {
    setCompletedTodo: debounce(function() {
      this.$emit("setCompletedTodo", this.item);
    }, 200),

    deleteTodo: debounce(function() {
      this.$emit("deleteTodo", this.item.id);
    }, 200)
  },

  components: {
    FontAwesomeIcon
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/globals";

.wrapper {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 10px 0px;
  cursor: pointer;
}

.container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
}

.create-event-modal {
  padding: 20px;
}

.create-event-text {
  color: $primary-color;
  padding-bottom: 15px;
}

.todo {
  word-wrap: break-word;
  width: 100%;
}

.isCompleted {
  text-decoration: line-through;
}

.icon {
  color: darken($color-grey, 10%);
  cursor: pointer;
  padding: 10px;

  &:hover,
  active {
    color: $color-dark;
  }
}
</style>
