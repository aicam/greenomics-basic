<template>
  <v-container fluid>
    <v-row>
      <div class="title">Welcome</div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AnimatedTitle"
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Bevan);

body {
  margin: 10px;
}

.title {
  animation-name: fade-bg;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  background-color: yellow;
  width: 400px;
  padding:50px;
  margin: 0 auto;
  margin-top: 50px;
  font-family: 'Bevan', cursive;
  font-size: 50px;
  text-transform: uppercase;
  text-align: center;
}

.title {
  animation-duration: 2s;
  animation-name: bounceIn;
}

@keyframes bounceIn {
  0% {
    transform: scale(0.1);
    opacity: 0;
  }
  60% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}


</style>
