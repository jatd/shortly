<template>
  <header class="header">
    <h2>Shortly</h2>
    <section>
      <router-link
        v-if="!isLoggedIn"
        to="/login"
      >
        Login
      </router-link>
      <router-link
        v-if="!isLoggedIn"
        to="/register"
      >
        Register
      </router-link>
      <router-link
        v-if="isLoggedIn"
        to="/"
      >
        Lists
      </router-link>
      <a
        v-if="isLoggedIn"
        href="#"
        @click="logout"
      >logout</a>
    </section>
  </header>
</template>

<script>
import router from '@/router';

export default {
  computed: {
    isLoggedIn() {
      return this.$store.state.auth.isUserLoggedIn;
    },
  },

  methods: {
    logout() {
      this.$store.dispatch('auth/logout');
      router.push('/login');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/globals';

.header {
  font-size: 28px;
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

section {
  margin-left: 10px;
}

a:not(first-child) {
  margin-right: 5px;
}

h2 {
  margin: 5px;
  color: $secondary-color;
}

@media screen and (max-width: 320px) {
  h2 {
    font-size: 28px;
  }
}
</style>
