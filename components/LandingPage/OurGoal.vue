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
            height="450"
          >
            <img style="padding: 10px" class="tile" :src="item.img" height="200px" max-width="400px"/>
            <v-card-text>
              <h3 style="color: #672f08; font-size: 35px; margin-top: 20px; font-family: 'DejaVu Sans';
                  letter-spacing: 3px">{{item.title}}</h3>
              <p style="color: black; font-size: 20px; padding-top: 30px;">{{item.desc}}</p>
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
        {'title': 'Verification', 'img': daoImg,
          'desc': 'Verify a carbon removal project to make money, become a governing member of ' +
            'the Carbon Removal Community, and save the world! Want to further increase your ' +
            'impact? Become a certified verifier.'},
        {'title': 'Invest & Trade', 'img': investmentImg,
          'desc': 'Many essential companies need to emit carbon while many projects are ready ' +
            'to remove carbon from the atmosphere. Invest on the projects or trade their ' +
            'carbon removal via our transparent marketplace on blockchain.'},
        {
          'title': 'Develop', 'img': projectJPG,
          'desc': 'There 7+ billion people looking for inventions that save us from global warming! you have an idea? define your' +
            ' project and get your own coin, make money, save the world'
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
