<template>
  <Card title="Name Your List" class="card">
    <form name="create-list" onSubmit>
      <Input ref="listNameInput" v-model="list.name" :required="true" :autofocus="true" />
    </form>
    <Button @click="createList">Create List</Button>
  </Card>
</template>

<script>
import entitiesService from "@/services/entities";
import Card from "@/components/atomic/Card";
import Input from "@/components/atomic/Input";
import Button from "@/components/atomic/Button";

export default {
  components: {
    Card,
    Input,
    Button
  },

  data() {
    return {
      list: {
        name: null
      },
      rules: {
        required: value => !!value || "Required"
      }
    };
  },

  mounted() {
    this.$refs.listNameInput.$el.children[0].focus();
  },

  methods: {
    async createList() {
      try {
        const userId = this.$store.getters["auth/getUserId"];
        const list =
          this.list.name &&
          (await entitiesService.create("lists", { ...this.list, userId }));
        this.list.name = null;
        return list && list.data && this.$emit("addList", list.data);
      } catch (err) {
        return err;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  border: 0px;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50px;
}
</style>
