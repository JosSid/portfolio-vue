<template>
  <div id="layout">
    <header class="header">
      <NavBar />
    </header>
    <main id="main">
      <router-view />
    </main>
    <footer id="footer">
      <h1 class="footerText">@Footer</h1>
    </footer>
  </div>
</template>

<script>
import NavBar from "../NavBar.vue";

export default {
  name: "LayuotApp",
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
}
#footer {
  background-color: rgb(35, 36, 31);
  color: aliceblue;
  min-height: 50px;
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
}
</style>
