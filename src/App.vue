<template>
  <div id="app">
    <main id="main">
      <PageHeader />
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </main>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    PageHeader: Header
  }
};
</script>

<style lang="scss" >
@import "./styles/globals";
body,
html {
  margin: 0px auto;
  padding: 0px auto;
  background-color: #43443d;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%235e5f56' points='800 100 0 200 0 800 1600 800 1600 200'/%3E%3Cpolygon fill='%2379796f' points='800 200 0 400 0 800 1600 800 1600 400'/%3E%3Cpolygon fill='%23949488' points='800 300 0 600 0 800 1600 800 1600 600'/%3E%3Cpolygon fill='%23aeafa2' points='1600 800 800 400 0 800'/%3E%3Cpolygon fill='%23c9cabb' points='1280 800 800 500 320 800'/%3E%3Cpolygon fill='%23e4e4d4' points='533.3 800 1066.7 800 800 600'/%3E%3Cpolygon fill='%23ffffed' points='684.1 800 914.3 800 800 700'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}

a {
  text-decoration: none;
}

body {
  font-family: "Ubuntu", Helvetica, Arial, sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#main {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 15px 20px;
  margin: 0 auto;
  justify-content: flex-start;
  max-width: 600px;
  background-color: transparent;
}

button {
  font-weight: 600;
  outline: none;
  background-color: #e0dada;
  bottom: 0px;
  margin: 0px;
  max-width: 600px;
  width: 100%;
  height: 60px;
  font-size: 26px;
  cursor: pointer;
  color: #43443d;
  word-break: break-all;
  white-space: pre-wrap;
  font-family: Ubuntu;
  border-radius: 16px;
  outline: none !important;
  border: 5px solid #ffffed;

  &:hover {
    color: $primary-color;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease-in-out;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
