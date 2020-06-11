<template>
  <div class="home">
    <h1>Pendu</h1>
    <h2 v-if="results.length > 0">Meilleur score: {{ results[0].player }} - {{ results[0].score }} points</h2>
    <div id="wordToGuess">
      <Letter  v-for="(item, index) in hiddenWord"
        :letter="item"
        :key="index" />
    </div>
    <div id="keyboard">
      <KeyboardKey @add-attempt="addAttempt" v-for="item in Array.from(Array(26).keys(), i => String.fromCharCode(i + 65))"
        :key="item"
        :letter="item"
        :attempts="attempts" />
    </div>
    <div v-if="won">
      <div id="victoryMessage">
        Bravo tu as gagné en {{ attempts.length }} coups!
      </div>
      <div id="input" @keyup.enter="saveResult">
        Entre ton nom:
        <input type="text" v-model="player"/>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  import words from "./listWord.js";

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
        player: "",
        attempts: [],
        wordToGuess: ""
      }
    },
    computed: {
      ...mapState(["results"]),
      won() {
        if (!~this.hiddenWord.indexOf('_'))
          return true;
        return false;
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
        if (!~this.attempts.indexOf(payload.letter))
          this.attempts.push(payload.letter);
      },
      saveResult() {
        this.$store.dispatch("addEntries", { player: this.player, score: this.attempts.length});
        this.attempts = [];
        this.player = "";
        this.wordToGuess = this.getWord();
      },
      getWord() {
        let index = Math.floor(Math.random() * words.length);
        return words[index].toUpperCase();
      }
    },
    created() {
      this.wordToGuess = this.getWord();
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

  #victoryMessage {
    background-color: #57b8bf;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    width: 800px;
    margin-top: 40px;
    font-size: 50px;
    border: black 1px solid;
    border-radius: 20px;
  }

  #input {
    display: flex;
    flex-direction: column;
    padding-top: 40px;
    font-size: 40px;
  }

  #input > input {
    text-align: center;
    font-size: 40px;
  }
</style>