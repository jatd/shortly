<template>
  <div class="container">
    <Card title="Login">
      <form name="shortly-form-login">
        <Input
          v-model="email"
          type="email"
          placeholder="email"
          name="email"
          :required="true"
        />
        <Input
          v-model="password"
          type="password"
          placeholder="password"
          :name="password"
          :required="true"
        />
      </form>
      <div
        v-show="error"
        class="error"
        v-html="error"
      />
      <Button @click="login">
        Login
      </Button>
    </Card>
  </div>
</template>

<script>
import Card from '@/components/atomic/Card';
import Input from '@/components/atomic/Input';
import Button from '@/components/atomic/Button';

export default {

  components: {
    Card,
    Input,
    Button,
  },
  data() {
    return {
      email: '',
      password: '',
      error: null,
    };
  },

  methods: {
    async login() {
      try {
        this.email
          && this.password
          && (await this.$store.dispatch('auth/login', {
            email: this.email,
            password: this.password,
          }));
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../styles/globals';
h1,
h2 {
  font-weight: normal;
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

.container {
  width: 100%;
}
</style>
