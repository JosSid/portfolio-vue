<template>
  <div id="app">
    <NavBar />
    <HelloWorld msg="Jossid Factory" />
  </div>
</template>

<script>
import HelloWorld from "./components/Home.vue";
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    NavBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: black;
}
html,
body {
  margin: 0;
  padding: 0;
  background-color: black;
}
</style>
