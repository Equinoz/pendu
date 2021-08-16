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

<style lang="scss">
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

    @media all and (max-width: 1350px) {
      height: 65px;
      width: 65px;
      margin: 10px;
    }

    @media all and (max-width: 900px) {
      height: 45px;
      width: 45px;
      margin: 7px;
      border-radius: 15px;
    }

    @media all and (max-width: 600px) {
      height: 30px;
      width: 30px;
      margin: 5px;
      border-radius: 10px;
      font-size: 15px;
    }
  }
</style>