<template>
  <v-container fluid style="background: #213058" class="text-center">
    <h1 style="padding: 40px; color: white">Main Question is How
      <v-icon color="white" size="150px">mdi-chat-question-outline</v-icon>
    </h1>
    <v-row justify="center" align="center" style="padding-bottom: 50px">
      <v-col lg="6">
        <v-row style="padding: 30px" class="tile">
          <h3 style="color: #963eeb; font-size: 25px; font-family: Chandas">In simple words, project managers provide a white paper of what they are going
            to invent.
            Verifiers visit and test projects and write reviews. The more reviews a project has the more trustable it
            will be and
            obviously it gets more fund. Investors pick projects and invest on them to be a part of <p
              style="color: #19a60a">GREEN EARTH.</p></h3>
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
