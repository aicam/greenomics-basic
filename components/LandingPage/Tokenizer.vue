<template>
  <v-container fluid style="background: white" class="text-center">
    <h1 style="padding: 20px; color: black; font-size: 45px;">Tokenization</h1>
    <v-row justify="center" align="center" style="padding: 50px">
      <v-col lg="6">
        <v-row justify="center" align="center">
          <img :src="polygonI" class="img-spin" width="300px"/>
        </v-row>
      </v-col>
      <v-col lg="6">
        <v-row justify="center" align="center">
          <h2 style="color: black; font-size: 20px;">Each project has its own ERC721 token, in this regard, projects
            have different values based on their
            carbon removal rate, timing and ...</h2>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import polygonImg from '../../static/polygon.png';

export default {
  name: "Tokenizer",
  data() {
    return ({
      polygonI: polygonImg
    });
  }
}
</script>

<style scoped>
.img-spin {
  -webkit-animation: spin 4s linear infinite;
  -moz-animation: spin 4s linear infinite;
  animation: spin 6s linear infinite;
}

@-moz-keyframes spin {
  100% {
    -moz-transform: rotate(360deg);
  }
}

@-webkit-keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
