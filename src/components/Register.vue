<template>
  <div class="container">
    <Card title="Register Today!">
      <form name="shortly-form-register">
        <Input type="email" name="email" placeholder="email" v-model="email" required />
        <Input type="password" name="password" placeholder="password" v-model="password" required />
      </form>
      <div :class="{ error: error }" v-html="error" />
      <Button @click="register">Register</Button>
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

  components: {
    Button,
    Card,
    Input
  },

  methods: {
    async register() {
      try {
        this.email &&
          this.password &&
          (await this.$store.dispatch("auth/register", {
            email: this.email,
            password: this.password
          }));
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

.input-container:first-child {
  margin-bottom: 10px;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
}
</style>
