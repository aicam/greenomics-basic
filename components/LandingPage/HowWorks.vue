<template>
  <v-container fluid style="background: #213058" class="text-center">
    <h1 style="padding: 40px; color: white">Our Solution
      <v-icon color="white" size="150px">mdi-chat-question-outline</v-icon>
    </h1>
    <v-row justify="center" align="center" style="padding-bottom: 50px">
      <v-col lg="6">
        <v-row style="padding: 30px" class="text-center">
          <h3 style="color: #963eeb; font-size: 25px; font-family: Chandas">We provide a transparent and global
            marketplace for carbon assets using blockchain
            technology. Our solution allows capturing diversity of the carbon assets, by minting
            NFTs for the projects pre-carbon absorption, while providing a fungible carbon token
            market, by minting carbon tokens post-absorption.
            We also increase the verification speed by 80% by enabling crowd verification and
            facilitating use of technologies, e.g. satellite imaging and IoT. We provide certificates
            to verifier to verify assets and get a share of their trade. We use smart contracts to
            automate the financial incentives.</h3>
        </v-row>
      </v-col>
      <v-col class="justify-center tile">
        <v-container>
          <img width="400" src="@/static/landing/tree-earth.gif"/><br>
          <img :src="polygonI" class="img-spin" width="150px"/>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import polygonImg from '../../static/polygon.png';

export default {
  name: "HowWorks",
  data() {
    return {
      polygonI: polygonImg
    }
  },
  mounted() {
    let elementsArray = document.querySelectorAll(".tile");
    window.addEventListener('scroll', fadeIn);

    function fadeIn() {
      for (var i = 0; i < elementsArray.length; i++) {
        var elem = elementsArray[i]
        var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
        if (distInView < 0) {
          elem.classList.add("inView");
        } else {
          elem.classList.remove("inView");
        }
      }
    }

    fadeIn();
  }
}
</script>

<style scoped>
.tile {
  -webkit-transform: translateY(50px) rotate(-5deg) translateZ(0);
  transform: translateX(100px) translateY(100px) rotate(-5deg) translateZ(0);
  -webkit-transition-delay: .3s;
  -o-transition-delay: .3s;
  transition-delay: .3s;
  -webkit-transition: .4s;
  -o-transition: .4s;
  transition: 1.5s;
  opacity: 0;
}

.bottom-right.inView {
  opacity: 1;
  -webkit-transform: translateY(0px) rotate(0deg) translateZ(0);
  transform: translateY(0px) rotate(0deg) translateZ(0);
}

.inView {
  opacity: 1;
  -webkit-transform: translateY(0px) rotate(0deg) translateZ(0);
  transform: translateY(0px) rotate(0deg) translateZ(0);
}

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
