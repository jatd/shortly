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
  background-color: $color-dark;
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
  max-width: $max-width;
  background-color: transparent;
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
