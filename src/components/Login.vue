<template>
  <div class="container">
    <Card title="Login">
      <form name="shortly-form-login">
        <input type="email" name="email" placeholder="email" v-model="email" required />
        <input type="password" name="password" placeholder="password" v-model="password" required />
      </form>
      <div class="error" v-html="error" />
      <button @click="login">Login</button>
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

  methods: {
    async login() {
      try {
        await this.$store.dispatch("auth/login", {
          email: this.email,
          password: this.password
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  },

  components: {
    Card
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../styles/globals";
h1,
h2 {
  font-weight: normal;
}
.error {
  color: $error-color;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
}

.container {
  width: 100%;
}
</style>
