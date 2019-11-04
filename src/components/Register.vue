<template>
  <div class="container">
    <Card title="Register Today!">
      <form name="shortly-form-register">
        <input type="email" name="email" placeholder="email" v-model="email" required />
        <input type="password" name="password" placeholder="password" v-model="password" required />
      </form>
      <div :class="{ error: error }" v-html="error" />
      <button @click="register">Register</button>
    </Card>
  </div>
</template>

<script>
import Card from "@/components/atomic/Card";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },

  components: {
    Card
  },

  methods: {
    async register() {
      try {
        await this.$store.dispatch("auth/register", {
          email: this.email,
          password: this.password
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/globals.scss";

.container {
  width: 100%;
}

.error {
  color: $color-dark;
  font-size: 18px;
  margin: 1rem;
  border: 1px dashed;
  padding: 5px;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
}
</style>
