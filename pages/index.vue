<template>
  <div>
    <v-container fluid :style="{backgroundImage: `url('${require('static/earth_wallpaper.png')}')`}" class="background">
      <v-row style="padding: 150px">
        <v-col lg="4" style="color: chocolate">
          <v-row justify="center" align="center">
            <h1 class="trans" style="font-family: 'Bitstream Charter'">Now or Never!</h1>
          </v-row>
        </v-col>
        <v-spacer></v-spacer>
        <v-col lg="4">
          <v-row justify="center" align="center">
            <h2><p class="trans" style="color: #19a60a; font-family: unfair; font-size: 45px">GREENOMICS</p>
              <p class="trans" style="color: black; font-family: 'Bitstream Charter'">Makes The Future</p></h2>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <!-- Who we are -->
    <v-container fluid style="background: white">
      <v-row style="padding-top: 50px; padding-bottom: 50px;">
        <v-col lg="6" style="padding: 50px">
          <v-row justify="center" align="center">
            <img class="tile" src="@/static/polygon.png" width="100" />
            <img class="tile" src="@/static/logo.png" width="250" />
          </v-row>
        </v-col>
        <v-col style="padding-left: 30px; padding-right: 30px;">
          <v-row justify="center" align="center">
            <h2 style="color: black; font-size: 25px; font-family: 'DejaVu Sans'">
              Our mission is removing every molecule of Carbon from the earth. There are technologies are being developed
              and farms are being established. The goal is to provide enough funding for all of them to remove Carbon as much as
              needed and as soon as possible. Recently, Blockchain technologies have contributed to many projects and now we use it
              as a fundamental technology of our services.
            </h2>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <OurGoal/>
  </div>
</template>

<script>
import OurGoal from "@/components/LandingPage/OurGoal";
export default {
  name: 'IndexPage',
  components: {OurGoal},
  data() {
    return ({
      onPageLoadedFadeIn: false
    })
  },
  mounted() {
    var transItems = document.getElementsByClassName("trans")
    console.log("transItems ", transItems);
    for (var i = 0; i < transItems.length; i++) {
      transItems[i].style.opacity = 1;
      transItems[i].style.transform = "translate(0px,0px)";
    }

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

<style>
@font-face {
  font-family: "unfair";
  src: url(~/static/fonts/unfair/Unfair.ttf) format("truetype");
}

.trans {
  opacity: 0;
  transform: translate(-30px, 0px);
  transition: opacity 0.6s, transform 0.9s;
}

.background {
  background-repeat: no-repeat;
  min-height: inherit;
  background-position: center center;
  background-size: cover;
}

@media only screen and (min-width: 768px) {
  h1 {
    font-size: 80px;
  }

  h2 {
    font-size: 60px;
  }
}

@media only screen and (max-width: 600px) {
  h1 {
    font-size: 60px;
    margin-top: -10px;
  }

  h2 {
    margin-top: 50px;
    font-size: 40px;
  }
}

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
