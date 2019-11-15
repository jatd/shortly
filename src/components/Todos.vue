<template>
  <div class="wrapper">
    <div class="container" @click="setCompletedTodo">
      <div class="todo" v-bind:class="{ isCompleted: item.isCompleted }">{{ item.description }}</div>
      <font-awesome-icon :icon="trashIcon" class="icon" @click="deleteTodo" />
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";

export default {
  props: ["item"],

  data() {
    return {
      trashIcon: faTrash,
      listIcon: faCheck
    };
  },

  methods: {
    setCompletedTodo() {
      this.$emit("setCompletedTodo", this.item);
    },

    deleteTodo() {
      this.$emit("deleteTodo", this.item.id);
    }
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

  &:hover {
    background-color: #fafafa;
    transition: ease background-color 0.3s;
    border-radius: 5px;
  }
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