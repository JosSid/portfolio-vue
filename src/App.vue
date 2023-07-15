<template>
  <div id="app" :class="theme">
    <LayuotApp />
    <ThemeProvider @theme-changed="updateTheme" />
    <div>Hola</div>
  </div>
</template>

<script>
import LayuotApp from "./components/layout/LayoutApp.vue";
import ThemeProvider from "./components/ThemeProvider.vue";

export default {
  name: "App",
  components: {
    LayuotApp,
    ThemeProvider,
  },
  data() {
    return {
      theme: "dark",
    };
  },
  methods: {
    updateTheme(theme) {
      this.theme = theme;
    },
  },
};
</script>

<style>
@import "@/styles/main.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-color);
  background-color: var(--bg-color);
}
html,
body {
  margin: 0;
  padding: 0;
}
</style>
