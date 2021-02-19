<template>
  <div id="app">
    <div class="loading">
      <orbit-spinner :animation-duration="1200" :size="55" color="#ff1d5e" />
    </div>
    <navigation></navigation>
    <router-view />
    <c-Footer></c-Footer>
  </div>
</template>

<script>
import navigation from './components/_layout/nav'
import cFooter from './components/_layout/footer'
import { OrbitSpinner } from 'epic-spinners'

export default {
  name: 'App',
  components: {
    navigation,
    cFooter,
    OrbitSpinner,
  },
}
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
