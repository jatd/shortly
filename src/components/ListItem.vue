<template>
  <div class="container">
    <Card class="card">
      <section v-if="errored">
        <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
      </section>
      <section v-else :style="styleLoader">
        <Loader v-if="loading" />
        <section v-else>
          <div class="title">{{list.name}}</div>
          <Todos
            v-for="(item) in items"
            :key="item.id"
            :item="item"
            :listName="list.name"
            @deleteTodo="deleteTodo"
            @setCompletedTodo="setCompletedTodo"
          />
        </section>
      </section>
    </Card>
    <Input
      ref="todoInput"
      name="todo"
      v-model="todoInput"
      placeholder="Enter Todo Here..."
      :autofocus="true"
    />

    <Button @click="addTodo">Add Todo</Button>
  </div>
</template>

<script>
import entitiesService from "@/services/entities";
import Loader from "./atomic/Loader";
import Card from "./atomic/Card";
import Input from "./atomic/Input";
import Todos from "./Todos";
import Button from "./atomic/Button";

export default {
  data() {
    return {
      list: null,
      items: [],
      loading: true,
      errored: false,
      todoInput: ""
    };
  },

  computed: {
    styleLoader() {
      return this.loading
        ? { justifyContent: "flex-start", alignItems: "center " }
        : {};
    }
  },

  methods: {
    async addTodo() {
      if (this.todoInput) {
        const { data } = await entitiesService.create("items", {
          description: this.todoInput,
          listId: this.list.id
        });
        this.items = this.items.concat([data]);
        this.todoInput = "";
      }
    },

    async setCompletedTodo(todo) {
      const { status, data } = await entitiesService.update("items", todo.id, {
        ...todo,
        isCompleted: !todo.isCompleted
      });

      if (status === 200) {
        this.updateItemById(todo.id, data);
      }
    },

    async deleteTodo(id) {
      const resp = await entitiesService.delete("items", {
        data: { id }
      });

      if (resp.status === 204) {
        this.filterItemsById(id);
      }
    },

    updateItemById(id, updatedItem) {
      const index = this.items.findIndex(item => item.id === id);

      if (index !== -1) {
        this.items.splice(index, 1, updatedItem);
      }
    },

    filterItemsById(id) {
      this.items = this.items.filter(item => item.id !== id);
    }
  },

  components: {
    Card,
    Loader,
    Todos,
    Input,
    Button
  },

  async mounted() {
    try {
      const params = this.$store.state.route.params;

      const { data } = await entitiesService.getOne("lists", params.listId);
      this.list = data;
      this.items = data.items;
      this.loading = false;
      this.$refs.todoInput.$el.focus();
    } catch (error) {
      this.errored = true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/globals";

.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
}

.input-container {
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  position: sticky;
}

.title {
  font-size: 28px;
  color: $color-dark;
  text-align: center;
  font-style: italic;
  opacity: 0.2;
}

section {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
}
</style>

