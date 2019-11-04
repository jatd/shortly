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
  height: 100%;
  margin: 0px auto;
  padding: 0px auto;
}

a {
  text-decoration: none;
}

#app {
  font-family: "Ubuntu", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
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
  height: 100%;
  justify-content: flex-start;
  overflow-x: auto;
  max-width: 600px;
  background-color: #43443d;
}

input {
  border-radius: 5px;
  outline-color: #a28298;
  outline-width: 2px;
  height: 50px;
  outline: none;
  padding-left: 10px;
  font-family: Ubuntu;
  border: 5px solid #999;
  margin-bottom: 20px;
  font-size: 16px;

  &:required {
    box-shadow: none;
  }
}

button {
  position: sticky;
  text-transform: uppercase;
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
  color: #a28298;
  word-break: break-all;
  white-space: pre-wrap;
  font-family: Ubuntu;
  border-radius: 8px;

  &:hover {
    transition: ease-in-out all 0.2s;
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
