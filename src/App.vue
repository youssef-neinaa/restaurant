<template>
  <div id="app">
    <navigation></navigation>
    <router-view />
    <c-Footer></c-Footer>
  </div>
</template>


<script>
import navigation from "./components/_layout/nav";
import cFooter from "./components/_layout/footer";
export default {
  name: "App",
  components: {
    navigation,
    cFooter
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
