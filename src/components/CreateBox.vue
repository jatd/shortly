<template>
  <Card title="Create a TODO List" class="card">
    <form name="create-box" onSubmit>
      <Input :name="title" v-model="box.name" :required="true" />
    </form>
    <Button @click="createBox">Create List</Button>
  </Card>
</template>

<script>
import entitiesService from "@/services/entities";
import Card from "@/components/atomic/Card";
import Input from "@/components/atomic/Input";
import Button from "@/components/atomic/Button";

export default {
  data() {
    return {
      box: {
        name: null
      },
      rules: {
        required: value => !!value || "Required"
      }
    };
  },

  methods: {
    async createBox() {
      try {
        const userId = this.$store.getters["auth/getUserId"];
        const box =
          this.box.name &&
          (await entitiesService.create("boxes", { ...this.box, userId }));

        return box && box.data && this.$emit("addBox", box.data);
      } catch (err) {
        return err;
      }
    }
  },

  components: {
    Card,
    Input,
    Button
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
