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
          <Todos v-for="(item) in items" :key="item.id" :item="item" :listName="list.name" />
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
    async createEvent() {
      if (this.todo) {
        const { data } = await entitiesService.create("items", {
          description: this.todo,
          listId: this.list.id
        });
        this.items = this.items.concat([data]);
        this.todo = "";
      }
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

.title {
  font-size: 28px;
  color: $color-dark;
  text-align: center;
  margin-bottom: 20px;
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

