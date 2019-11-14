<template>
  <div class="container">
    <Card class="card">
      <section v-if="errored">
        <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
      </section>
      <section v-else :style="styleLoader">
        <Loader v-if="loading" />
        <section v-else>
          <TodoList @createEvent="createEvent" :items="items" :boxName="box.name" />
        </section>
      </section>
    </Card>
    <Input
      ref="todo"
      name="todo"
      v-model="todo"
      placeholder="Enter Todo Here..."
      :autofocus="true"
    />

    <Button @click="createEvent">Create Event</Button>
  </div>
</template>asdf

<script>
import entitiesService from "@/services/entities";
import Loader from "./atomic/Loader";
import Card from "./atomic/Card";
import Input from "./atomic/Input";
import TodoList from "./TodoList";
import Button from "./atomic/Button";

export default {
  data() {
    return {
      box: null,
      items: [],
      loading: true,
      errored: false,
      todo: ""
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
    async createEvent({ title, date }) {
      if (this.todo) {
        const { data } = await entitiesService.create("items", {
          title: this.todo,
          description: "test descript",
          date: null,
          boxId: this.box.id
        });
        this.items = this.items.concat([data]);
        this.todo = "";
      }
    }
  },

  components: {
    Card,
    Loader,
    TodoList,
    Input,
    Button
  },

  async mounted() {
    try {
      const params = this.$store.state.route.params;
      const { data } = await entitiesService.getOne("boxes", params.boxId);
      this.box = data;
      this.items = data.items;
      this.loading = false;
      this.$refs.todo.$el.focus();
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

section {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
}
</style>

