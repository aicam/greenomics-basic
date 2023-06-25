<template>
  <v-container fluid class="justify-center">
    <v-row id="main-v-row" justify="center" style="background: #0b00ff">
      <figure class="icon-cards mt-3">
        <div class="icon-cards__content">
          <div class="icon-cards__item d-flex align-items-center justify-content-center">
            <v-container fluid>
              <v-row justify="center" align="center">
                <img src="~/static/landing/verification.gif">
              </v-row>
              <v-row justify="center" style="background: #92a0d6">
                <h3 style="color: black; font-size: 25px">True carbon Credit</h3>
              </v-row>
            </v-container>
          </div>
          <div class="icon-cards__item d-flex align-items-center justify-content-center">
            <v-container fluid>
              <v-row justify="center" align="center">
                <img src="~/static/landing/registry.gif">
              </v-row>
              <v-row justify="center" style="background: #92a0d6">
                <h3 style="color: black; font-size: 25px">Integrated Registry</h3>
              </v-row>
            </v-container>
          </div>
          <div class="icon-cards__item d-flex align-items-center justify-content-center">
            <v-container fluid>
              <v-row justify="center" align="center">
                <img src="~/static/landing/marketplace.gif">
              </v-row>
              <v-row justify="center" class="text-center" style="background: #92a0d6; padding: 10px">
                <h3 style="color: black; font-size: 20px">Transparent Marketplace</h3>
              </v-row>
            </v-container>
          </div>
        </div>
      </figure>
    </v-row>
  </v-container>
</template>

<script>
import AnimatedTitle from "@/components/LandingPage/AnimatedTitle";

export default {
  name: "AnimatedCarousel",
  components: {AnimatedTitle},
}
</script>

<style lang="scss" scoped>
// Cards Carousel
// ----------------------------------------------
@media only screen and (min-width: 768px) {
  #main-v-row {
    padding: 80px;
  }
}

@media only screen and (max-width: 600px) {
  #main-v-row {
    padding-bottom: 200px;
    padding-top: 50px;
  }
}

.icon-cards {
  position: relative;
  width: 60vw;
  height: 40vw;
  max-width: 380px;
  max-height: 250px;
  //margin: 0;
  color: white;
  perspective: 1000px;
  transform-origin: center;

  // This is the element that rotates with the animation

  &__content {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-origin: center;
    transform-style: preserve-3d;
    transform: translateZ(-30vw) rotateY(0);
    animation: carousel 10s infinite cubic-bezier(0.77, 0, 0.175, 1) forwards;

    &.step-animation {
      animation: carousel 8s infinite steps(1) forwards;
    }
  }

  // Individual cards

  &__item {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 60vw;
    height: 40vw;
    max-width: 380px;
    max-height: 250px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, .1);
    border-radius: 6px;
    transform-origin: center;

    &:nth-child(1) {
      background: #FDD94F;
      transform: rotateY(0) translateZ(35vw);
    }

    &:nth-child(2) {
      background: #F87949;
      transform: rotateY(120deg) translateZ(35vw);
    }

    &:nth-child(3) {
      background: #FBAB48;
      transform: rotateY(240deg) translateZ(35vw);
    }
  }
}

// Carousel animation

@keyframes carousel {
  0%, 17.5% {
    transform: translateZ(-35vw) rotateY(0);
  }
  27.5%, 45% {
    transform: translateZ(-35vw) rotateY(-120deg);
  }
  55%, 72.5% {
    transform: translateZ(-35vw) rotateY(-240deg);
  }
  82.5%, 100% {
    transform: translateZ(-35vw) rotateY(-360deg);
  }
}


// Demo only
// ----------------------------------------------

html,
body {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

</style>
