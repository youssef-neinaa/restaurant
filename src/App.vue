<template>
  <div id="app">
    <div class="loading">
      <swapping-squares-spinner
        :animation-duration="1000"
        :size="65"
        color="#474787"
      />
    </div>
    <navigation></navigation>
    <router-view />
    <c-Footer></c-Footer>
  </div>
</template>

<script>
import navigation from './components/_layout/nav'
import cFooter from './components/_layout/footer'
import { SwappingSquaresSpinner } from 'epic-spinners'

export default {
  name: 'App',
  components: {
    navigation,
    cFooter,
    SwappingSquaresSpinner,
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
