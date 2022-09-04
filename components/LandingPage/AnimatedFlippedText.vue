<template>
  <div id=container>
    We want
    <div id=flip>
      <div><div>Green</div></div>
      <div><div>Clean</div></div>
      <div><div>Happy!</div></div>
    </div>
    Future!
  </div>
</template>

<script>
export default {
  name: "AnimatedFlippedText"
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:700');

body {
  margin:0px;
  font-family:'Roboto';
  text-align:center;
}

#container {
  color: #ffc905;
  text-transform: uppercase;
  font-size:36px;
  font-weight:bold;
  width:100%;
  bottom:45%;
  display:block;
}

#flip {
  height:50px;
  overflow:hidden;
}

#flip > div > div {
  color:#fff;
  padding:4px 16px;
  height:45px;
  margin-bottom:45px;
  display:inline-block;
}

#flip div:first-child {
  animation: show 5s linear infinite;
}

#flip div div {
  background:#42c58a;
}
#flip div:first-child div {
  background: #55f100;
}
#flip div:last-child div {
  background:#DC143C;
}

@keyframes show {
  0% {margin-top:-270px;}
  5% {margin-top:-180px;}
  33% {margin-top:-180px;}
  38% {margin-top:-90px;}
  66% {margin-top:-90px;}
  71% {margin-top:0px;}
  99.99% {margin-top:0px;}
  100% {margin-top:-270px;}
}

p {
  position:fixed;
  width:100%;
  bottom:30px;
  font-size:12px;
  color:#999;
  margin-top:200px;
}
</style>
