<template>
  <v-container fluid style="background: white" class="text-center">
    <h1 style="padding-bottom: 60px; color: black">Our Services in One Glance</h1>
    <v-row justify="center" align="center" style="padding: 3px; padding-bottom: 50px">
      <v-col style="padding: 20px" v-for="(item, i) in cardsInfo" :key="i">
        <v-row justify="center">
          <v-card
            style="background: white;"
            elevation="10"
            max-width="400"
            height="550"
          >
            <img style="padding: 10px" class="tile" :src="item.img" height="200px" max-width="400px"/>
            <v-card-text>
              <p style="color: #672f08; font-size: 30px; margin-top: 20px; line-height: 28px;
                  letter-spacing: 3px">{{item.title}}</p>
              <p style="color: black; font-size: 20px; padding-top: 10px;">{{item.desc}}</p>
            </v-card-text>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import daoImg from '../../static/dao.png';
import investmentImg from '../../static/landing/investment.png'
import projectImg from '../../static/landing/project.png'
import smartcontractImg from '../../static/landing/smart_contract.png'
import projectJPG from '../../static/landing/project.jpg'

export default {
  name: "OurGoal",
  data() {
    return({
      cardsInfo: [
        {'title': 'Finance your carbon removal and carbon capture projects', 'img': investmentImg,
          'desc': 'Verify a carbon removal project to make money, become a governing member of ' +
            'the Carbon Removal Community, and save the world! Want to further increase your ' +
            'impact? Become a certified verifier-pages.'},
        {'title': 'Invest on carbon removal and capture projects', 'img': daoImg,
          'desc': 'choose your desired ' +
            'carbon removal and capture project to invest on using the verification information for ' +
            'a reliable investment, and then own the project Carbon absorption yields'},
        {'title': 'Trade Carbon assets before and after Carbon absorption', 'img': smartcontractImg,
          'desc': 'Trade NFTs for ' +
            'projects waiting for carbon absorption, or trade the carbon tokens and attributes ' +
            'NFTs post absorption'},
        {
          'title': 'Verify Carbon assets and get share of their trade', 'img': projectJPG,
          'desc': 'Choose from the list of ' +
            'available projects for verification, verify some of their required attributes, and ' +
            'automatically get a commission share of any of their future trades'
        },
        // {
        //   'title': 'Smart Contract', 'img': smartcontractImg,
        //   'desc': 'There are many regulations in different countries that are exhausting and parties should comply them. We' +
        //     ' deploy them all as smart contracts so you don\'t need be worried about them'
        // }
      ]
    })
  },
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

@media only screen and (min-width: 768px) {
  h1 {
    font-size: 75px;
  }
}

@media only screen and (max-width: 600px) {
  h1 {
    font-size: 30px;
  }
}


</style>
