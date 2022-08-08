<template>
  <div class="slider">
    <div class="slide-track">
      <div class="slide">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
      </div>
      <div class="slide">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
      </div>
      <div class="slide">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
      </div>
      <div class="slide">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
      </div>
      <div class="slide">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
      </div>
      <div class="slide">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
      </div>
      <div class="slide">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
      </div>
      <div class="slide">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
      </div>
      <div class="slide">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
      </div>
      <div class="slide">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
      </div>
      <div class="slide">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
      </div>
      <div class="slide">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
      </div>
      <div class="slide">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
      </div>
      <div class="slide">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterCustom",
  data () {
    return ({
      brands: [
        {
          title: 'CoreCarbon',
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png',
          val: -0.44
        },
        {
          title: 'MyTree',
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png',
          val: 1.2
        },
        {
          title: 'KillCarb',
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png',
          val: 1.8
        },
        {
          title: 'GreenEarth',
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png',
          val: -2.2
        },
        {
          title: 'New',
          img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png',
          val: 1.2
        },
      ]
    })
  }
}
</script>

<style lang="scss" scoped>
@mixin white-gradient {
  background: linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
}

$animationSpeed: 40s;

// Animation
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-250px * 7))}
}


// Styling
.slider {
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);
  height: 100px;
  margin: auto;
  overflow:hidden;
  position: relative;
  width: 100%;

  &::before,
  &::after {
    @include white-gradient;
    content: "";
    height: 100px;
    position: absolute;
    width: 200px;
    z-index: 2;
  }

  &::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }

  &::before {
    left: 0;
    top: 0;
  }

  .slide-track {
    animation: scroll $animationSpeed linear infinite;
    display: flex;
    width: calc(250px * 14);
  }

  .slide {
    height: 100px;
    width: 250px;
  }
}
</style>
