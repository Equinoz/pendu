<template>
  <div class="home">
    <h1>Pendu</h1>
    <h2>Partie de {{ player }}</h2>
    <div id="wordToGuess">
      <Letter  v-for="(item, index) in wordToGuess.toUpperCase()"
        :letter="item"
        :key="index" />
    </div>
  </div>
</template>

<script>
  import Letter from "@/components/Letter.vue";

  export default {
    name: 'Home',
    components: {
      Letter
    },
    data() {
      return {
        player: "Julien",
        wordToGuess: "Boris"
      }
    }
  }
</script>

<style>
  h1 {
    margin: 5px;
    font-size: 50px;
  }

  #wordToGuess {
    display: flex;
    justify-content: center;
  }
</style>