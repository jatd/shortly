<template>
  <div class="container">
    <Card title="Login">
      <form name="shortly-form-login">
        <Input type="email" placeholder="email" name="email" v-model="email" :required="true" />
        <Input
          type="password"
          placeholder="password"
          :name="password"
          v-model="password"
          :required="true"
        />
      </form>
      <div class="error" v-html="error" />
      <Button @click="login">Login</Button>
    </Card>
  </div>
</template>

<script>
import Card from "@/components/atomic/Card";
import Input from "@/components/atomic/Input";
import Button from "@/components/atomic/Button";

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
        this.email &&
          this.password &&
          (await this.$store.dispatch("auth/login", {
            email: this.email,
            password: this.password
          }));
      } catch (error) {
        this.error = error.response.data.error;
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

.input-container:first-child {
  margin-bottom: 10px;
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
