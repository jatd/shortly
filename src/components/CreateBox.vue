<template>
  <Card title="Create a New Box" class="card">
    <div>
      <form name="create-box" onSubmit>
        <input name="title" v-model="box.name" placeholder="box" required />
      </form>
      <button @click="createBox">Create Box</button>
    </div>
  </Card>
</template>

<script>
import entitiesService from "@/services/entities";
import Card from "@/components/atomic/Card";

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
    Card
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
