<template>
  <header class="header">
    <h2>Shortly</h2>
    <section>
      <router-link to="/login" v-if="!isLoggedIn">Login</router-link>
      <router-link to="/register" v-if="!isLoggedIn">Register</router-link>
      <router-link to="/" v-if="isLoggedIn">Boxes</router-link>
      <a href="#" @click="logout" v-if="isLoggedIn">logout</a>
    </section>
  </header>
</template>

<script>
import router from "@/router";

export default {
  computed: {
    isLoggedIn() {
      return this.$store.state.auth.isUserLoggedIn;
    }
  },

  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
      router.push("/login");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/globals";

.header {
  font-size: 18px;
  padding: 10px 20px 0px 20px;
  display: flex;
  flex-direction: row;
  text-align: center;
  margin-bottom: 20px;
}

a {
  color: $primary-color !important;
  font-weight: 600;
  font-size: 18px;

  &:hover,
  :active,
  :visited,
  :focus {
    color: #b7aac4 !important;
  }
}

a:not(first-child) {
  margin-right: 5px;
}

h2 {
  margin: 5px;
  color: $primary-color;
}
</style>
