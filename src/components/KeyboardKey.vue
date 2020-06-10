<template>
  <div @click.once="newAttempt" class="key" :class="{ desactivate: !activate }">
    {{ letter }}
  </div>
</template>

<script>
  import { mapActions } from "vuex";

  export default {
    name: "KeyboardKey",
    props: {
      letter: {
        type: String,
        required: true
      }
    },
    data: function() {
      return {
        activate: true
      }
    },
    methods: {
      ...mapActions(["addAttempt"]),
      newAttempt() {
        this.activate = false;
        this.addAttempt(this.letter);
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