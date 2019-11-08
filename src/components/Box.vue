<template>
  <div class="container">
    <Card class="card">
      <section v-if="errored">
        <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
      </section>
      <section v-else :style="styleLoader">
        <Loader v-if="loading" />
        <section v-else>
          <TodoList @createEvent="createEvent" :items="items" />
        </section>
      </section>
    </Card>
    <div class="input-wrapper">
      <input name="todo" v-model="todo" placeholder />
    </div>

    <button @click="createEvent">Create Event</button>
  </div>
</template>

<script>
import entitiesService from "@/services/entities";
import Loader from "./atomic/Loader";
import Card from "./atomic/Card";
import TodoList from "./TodoList";

export default {
  data() {
    return {
      box: null,
      items: [],
      loading: true,
      errored: false,
      todo: null
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
      }
    }
  },

  components: {
    Card,
    Loader,
    TodoList
  },

  async mounted() {
    try {
      const params = this.$store.state.route.params;
      const { data } = await entitiesService.getOne("boxes", params.boxId);
      this.box = data;
      this.items = data.items;
      this.loading = false;
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
}

.card {
  min-height: 350px;
}

.input-wrapper {
  margin-top: 20px;
  width: 100%;

  input {
    width: 100%;
  }
}

section {
  @extend .container;
}
</style>

