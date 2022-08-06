<template>
  <v-container fluid style="background: white" class="text-center">
    <h1 style="padding: 25px; color: black">Our Services in One Glance</h1>
    <v-row justify="center" align="center">
      <v-col lg="4">
        <v-row justify="center">
          <v-card
            style="background: white"
            elevation="10"
            max-width="350"
          >
            <img class="tile" src="@/static/dao.png" height="200px"/>
            <v-card-text>
              <h3 style="color: #672f08; font-size: 35px; margin-top: 20px; font-family: 'DejaVu Sans'">Verification</h3>
              <p style="color: black; font-size: 20px; padding-top: 30px;">How do you know the technology or the project
                is real and remove carbon? Blockchain provides the most transparent and easiest way.</p>
            </v-card-text>
          </v-card>
        </v-row>
      </v-col>

      <v-col lg="4">
        <v-row justify="center">
          <v-card
            style="background: white"
            elevation="10"
            max-width="350"
          >
            <img class="tile" src="@/static/dao.png" height="200px"/>
            <v-card-text>
              <h3 style="color: #672f08; font-size: 35px; margin-top: 20px; font-family: 'DejaVu Sans'">Investment</h3>
              <p style="color: black; font-size: 20px; padding-top: 30px;">How do you know the technology or the project
                is real and remove carbon? Blockchain provides the most transparent and easiest way.</p>
            </v-card-text>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "OurGoal",
  mounted() {
    window.addEventListener('scroll', fadeIn );
    let elementsArray = document.querySelectorAll(".tile");
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
  transform: translateY(50px) rotate(-5deg) translateZ(0);
  -webkit-transition-delay: .3s;
  -o-transition-delay: .3s;
  transition-delay: .3s;
  -webkit-transition: .4s;
  -o-transition: .4s;
  transition: .4s;
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
