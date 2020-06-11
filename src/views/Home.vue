<template>
  <div class="home">
    <h1>Pendu</h1>
    <h2>Partie de {{ player }}</h2>
    <div id="wordToGuess">
      <Letter  v-for="(item, index) in hiddenWord"
        :letter="item"
        :key="index" />
    </div>
    <div id="keyboard">
      <KeyboardKey @add-attempt="addAttempt" v-for="item in Array.from(Array(26).keys(), i => String.fromCharCode(i + 65))"
        :key="item"
        :letter="item" />
    </div>
  </div>
</template>

<script>
  import Letter from "@/components/Letter.vue";
  import KeyboardKey from "@/components/KeyboardKey.vue";

  export default {
    name: 'Home',
    components: {
      Letter,
      KeyboardKey
    },
    data() {
      return {
        player: "Julien",
        attempts: []
      }
    },
    computed: {
      wordToGuess() {
        return "Boris".toUpperCase();
      },
      hiddenWord() {
        let word = "",
            letter;
        for (letter of this.wordToGuess)
          word += (~this.attempts.indexOf(letter)) ? letter : '_';
        return word;
      }
    },
    methods: {
      addAttempt(payload) {
        this.attempts.push(payload.letter);
      }
    }
  }
</script>

<style>
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    margin: 5px;
    font-size: 50px;
  }

  #wordToGuess {
    display: flex;
  }

  #keyboard {
    display: flex;
    flex-wrap: wrap;
    width: 1200px;
    margin-top: 50px;
  }
</style>