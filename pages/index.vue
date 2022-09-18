<template>
  <div>
    <v-container fluid class="background"> <!-- :style="{backgroundImage: `url('${require('static/landing/a.webp')}')`}" > -->
      <v-row id="top-menu-items" justify="center">
        <v-col v-for="(item, i) in topMenu" cols="2" :key="i">
          <v-btn
            large
            outlined
            :href="item.href"
            class="tile"
            color="white"
            style="font-weight: bold"
          >
            {{ item.title }}
          </v-btn>
        </v-col>
      </v-row>
      <v-spacer></v-spacer>
      <v-row style="padding: 150px" justify="center">
        <v-col lg="4">
          <v-row justify="center" align="center">
            <h2><p class="trans text-gradient-greenomics">GREENOMICS</p></h2>
            <v-row>
              <AnimatedFlippedText/>
            </v-row>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <!-- Who we are -->
    <v-container id="whoweare" fluid style="background: white">
      <v-row style="padding-top: 50px; padding-bottom: 50px;">
        <v-col cols="6">
          <v-row justify="center" align="center">
            <img src="@/static/landing/bitcoin_green.png" width="300">
<!--            <img class="tile" src="@/static/logo-outline.png" width="100"/>-->
<!--            <img class="tile" src="@/static/polygon.png" width="100"/>-->
          </v-row>
        </v-col>
        <v-col style="padding-right: 30px;">
          <v-row justify="center" align="center">
            <h2 style="color: black; font-size: 25px; font-family: 'DejaVu Sans'">
              <b>Our mission</b> is to ensure annually at least 5 GtCO2 is removed from atmosphere or
              captured before entering the atmosphere by 2030 in an environmentally and socially
              sustainable approach.
            </h2>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
<!--    <AnimatedCarousel/>-->
    <OurGoal id="services"/>
    <HowWorks id="how"/>
    <WeAPI />
<!--    <Tokenizer id="tokenomics"/>-->
    <GCTStat class="trans"/>
    <NFTMarketplace />
    <Partners id="join"/>
  </div>
</template>

<script>
import OurGoal from "@/components/LandingPage/OurGoal";
import HowWorks from "@/components/LandingPage/HowWorks";
import Tokenizer from "@/components/LandingPage/Tokenizer";
import Partners from "@/components/LandingPage/Communities";
import GCTStat from "@/components/LandingPage/GCTStat";
import AnimatedCarousel from "@/components/LandingPage/AnimatedCarousel";
import AnimatedFlippedText from "@/components/LandingPage/AnimatedFlippedText";
import NFTMarketplace from "@/components/Marketplace/NFTMarketplace";
import WeAPI from "@/components/LandingPage/WeAPI";

export default {
  name: 'IndexPage',
  components: {
    WeAPI,
    NFTMarketplace, AnimatedFlippedText, AnimatedCarousel, GCTStat, Partners, Tokenizer, HowWorks, OurGoal},
  data() {
    return ({
      onPageLoadedFadeIn: false,
      topMenu: [
        {
          title: 'Mission',
          href: '#whoweare',
        },
        {
          title: 'Services',
          href: '#services'
        },
        {
          title: 'How Works',
          href: '#how'
        },
        {
          title: 'Tokenomics',
          href: '#tokenomics'
        },
        {
          title: 'GCT',
          href: '#gctstat'
        },
        {
          title: 'Join Us',
          href: '#join'
        }
      ]
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

<style>
@font-face {
  font-family: "unfair";
  src: url(~/static/fonts/unfair/Unfair.ttf) format("truetype");
}

@font-face {
  font-family: "blk";
  src: url(~/static/fonts/blk.ttf) format("truetype");
}

@font-face {
  font-family: "facit";
  src: url(~/static/fonts/FeFCit2.ttf) format("truetype");
}

.text-gradient-greenomics {
  background-color: #f3ec78;
  background-image: linear-gradient(45deg, #f48553, #26ad05);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}

.trans {
  opacity: 0;
  transform: translate(-30px, 0px);
  transition: opacity 0.6s, transform 0.9s;
}

.background {
  height: 800px;
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

  .text-gradient-greenomics {
    font-size: 100px;
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

  #top-menu-items {
    display: none;
  }

  .text-gradient-greenomics {
    font-size: 45px;
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
