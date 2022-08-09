<template>
  <v-container fluid style="background: #213058" class="text-center">
    <h1 style="padding: 40px; color: white">Main Question is How
      <v-icon color="white" size="150px">mdi-chat-question-outline</v-icon>
    </h1>
    <v-row justify="center" align="center" style="padding-bottom: 50px">
      <v-col lg="6">
        <v-row style="padding: 30px" class="tile text-center">
          <h2>Problem</h2>
          <h3 style="color: #963eeb; font-size: 25px; font-family: Chandas">Carbon removal is an essential part of climate change actions with an
            estimated target of 7GTC by 2030, yet it is way behind target due to lack of
            sufficient investment and lack of projects reliability. On the other hand, the
            limited carbon allowances are also not allocated efficiently globally due to lack
            of a global and transparent marketplace.</h3>
          <h2>Our Solution</h2>
          <h3 style="color: #963eeb; font-size: 25px; font-family: Chandas">We enable crowd-verification, crow-investment, and a global transparent trade
            using a blockchain infrastructure. We use Greenomics fungible carbon token
            as well as non-fungible project tokens to facilitate investment and trade of the
            carbon permits and carbon offsets in a transparent way. We also enable
            crowd-verification with financial incentives (via token shares) and governance
            incentives (via our Decentralized Autonomous Organization solution). We will
            provide high quality verification when required with our own certified verifiers.</h3>
        </v-row>
      </v-col>
      <v-col class="justify-center tile">
        <img width="400" src="@/static/landing/tree-earth.gif"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HowWorks",
  mounted() {
    let elementsArray = document.querySelectorAll(".tile");
    window.addEventListener('scroll', fadeIn );
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
</style>
