<template>
  <div class="about">
    <h1>Résultats</h1>
    <div id="results">
      <div class="results" v-for="(item, index) in results"
        :key="index">
        {{ item.player }} : {{ item.score }} points
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex";

  export default {
    computed: {
      ...mapState(["results"])
    }
  };
</script>

<style>
  h1 {
    padding-top: 40px;
  }

  #results {
    padding-top: 30px;
    font-size: 30px;
  }

  .results {
    padding-bottom: 10px;
  }
</style>