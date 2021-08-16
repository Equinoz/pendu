<template>
  <div id="app">
    <main>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/results">Resultats</router-link>
      </div>
      <router-view/>
    </main>
    <Footer/>
  </div>
</template>

<script>
  import Footer from "@/components/Footer.vue";

  export default {
    name: 'App',
    components: {
      Footer
    }
  };
</script>


<style lang="scss">
  body {
    margin: 0;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  #nav {
    padding-top: 15px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
