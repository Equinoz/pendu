<template>
  <div class="letter">
    {{ getLetter }}
  </div>
</template>

<script>
  export default {
    name: "Letter",
    props: {
      letter: {
        type: String,
        required: true
      }
    },
    data: function(){
      return {
        found: false
      }
    },
    computed: {
      getLetter() {
        if (this.found)
          return this.letter;
        else
          return '_';
      }
    }
  };
</script>

<style>
  .letter {
    background-color: #40bb36;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100px;
    margin: 20px;
    border: solid 1px black;
    border-radius: 20px;
    box-shadow: 3px 3px 0px grey;
    font-size: 35px;
  }
</style>