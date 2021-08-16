<template>
  <div @click="newAttempt" class="key" :class="{ desactivate: !activate }">
    {{ letter }}
  </div>
</template>

<script>
  export default {
    name: "KeyboardKey",
    props: {
      letter: {
        type: String,
        required: true
      },
      attempts: {
        type: Array,
        required: true
      }
    },
    computed: {
      activate() {
        if (!~this.attempts.indexOf(this.letter))
          return true;
        else
          return false;
      }
    },
    methods: {
      newAttempt() {
        this.$emit("add-attempt", { letter: this.letter });
      }
    }
  };
</script>


<style lang="scss">
  .key{
    background-color: #e3f2e3;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1 calc(100% / 13 - 1em);
    height: 70px;
    max-width: 70px;
    margin: 10px;
    font-size: 25px;
    border: solid 1px black;
    border-radius: 10px;
    box-shadow: 4px 4px 2px grey;

    @media all and (max-width: 1230px) {
      flex: 1 1 calc(100% / 9 - 1em);
      height: 60px;
      max-width: 60px;
    }

    @media all and (max-width: 850px) {
      flex: 1 1 calc(100% / 7 - 1em);
      height: 40px;
      max-width: 40px;
      margin: 5px;
      font-size: 15px;
      box-shadow: 2px 2px 1px #a8a8a8;
    }
  }

  .key:hover {
    cursor: pointer;
  }

  .desactivate {
    background-color: #b3b6b2;
    box-shadow: none;
  }

  .desactivate:hover {
    cursor: default;
  }
</style>