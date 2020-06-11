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


<style>
  .key{
    background-color: #e3f2e3;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1 calc(100% / 13 - 1em);
    height: 70px;
    width: 70px;
    margin: 10px;
    font-size: 25px;
    border: solid 1px black;
    border-radius: 10px;
    box-shadow: 4px 4px 2px grey;
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