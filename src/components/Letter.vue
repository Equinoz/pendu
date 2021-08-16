<template>
  <div class="letter">
    {{ letter }}
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
    }
  };
</script>

<style>
  .letter {
    background-color: #40bb36;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90px;
    width: 90px;
    margin: 20px;
    border: solid 1px black;
    border-radius: 20px;
    box-shadow: 3px 3px 0px grey;
    font-size: 35px;
  }
</style>