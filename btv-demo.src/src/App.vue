<template>
  <v-app>
    <v-main>
      <BtvDemo/>
    </v-main>
  </v-app>
</template>

<script>
import BtvDemo from './components/BtvDemo';

export default {
  name: 'App',

  components: {
    BtvDemo,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
