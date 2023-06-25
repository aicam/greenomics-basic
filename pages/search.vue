<template>
  <v-container fluid style="padding-top: 30px;">
    <v-card>
      <v-row justify="center" align="center">
        <h2>Search among all carbon removal projects globally powered by Gen AI</h2>
      </v-row>
      <v-row style="padding: 20px 15% 0 15%; margin: 0">
        <v-text-field
          :disabled="search.inSearch"
          v-model="search.prompt"
          label="Your criteria"
          placeholder="Explain what kind of project you are interested in"
          filled
        />
        <v-btn
          @click="ask"
          x-large
        >
          Search
        </v-btn>
      </v-row>
      <v-progress-linear
        indeterminate
        color="white"
        v-if="search.inSearch"
      ></v-progress-linear>
    </v-card>
    <v-row justify="center" style="padding: 0 50px 0 50px">
      <p>{{search.ans}}</p>
    </v-row>
    <canvas :style="{opacity: (search.inSearch) ? 0.2 : 1}"></canvas>

  </v-container>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      search: {
        inSearch: false,
        prompt: "",
        ans: "",
        ctx: null
      }
    }
  },
  methods: {
    ask() {
      this.search.inSearch = true
      const api = this.$axios.create({
        baseURL: "https://b49ebf7lsb.execute-api.us-west-1.amazonaws.com/stage/"
      })
      api.post("chatbot/greenomics", {q: this.search.prompt}).then(res => {
        this.search.ans = res.data.choices[0].message.content
        this.search.inSearch = false
      })
    }
  },
  mounted() {
    var canvas, ctx, max, p, count;

    window.onload = function () {
      var a, b, r;
      canvas = document.getElementsByTagName('canvas')[0];
      ctx = canvas.getContext('2d');
      canvas.width = canvas.height = 400;
      ctx.fillRect(0, 0, 400, 400);
      this.ctx = ctx
      max = 80;
      count = 150;
      p = [];
      r = 0;
      for (a = 0; a < max; a++) {
        p.push([Math.cos(r), Math.sin(r), 0]);
        r += Math.PI * 2 / max;
      }
      for (a = 0; a < max; a++) p.push([0, p[a][0], p[a][1]]);
      for (a = 0; a < max; a++) p.push([p[a][1], 0, p[a][0]]);
      rus();
    };

    function rus() {
      var a, b, c, d, e, s, tim, p2, xp, yp, xp2, yp2, x, y, z, x1, y1, z1;
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "rgba(0,0,0,0.03)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";
      tim = count / 5;
      for (e = 0; e < 3; e++) {
        tim *= 1.7;
        s = 1 - e / 3;
        a = tim / 59;
        yp = Math.cos(a);
        yp2 = Math.sin(a);
        a = tim / 23;
        xp = Math.cos(a);
        xp2 = Math.sin(a);
        p2 = [];
        for (a = 0; a < p.length; a++) {
          x = p[a][0];
          y = p[a][1];
          z = p[a][2];
          y1 = y * yp + z * yp2;
          z1 = y * yp2 - z * yp;
          x1 = x * xp + z1 * xp2;
          z = x * xp2 - z1 * xp;
          z1 = Math.pow(2, z * s);
          x = x1 * z1;
          y = y1 * z1;
          p2.push([x, y, z]);
        }

        s *= 120;
        for (d = 0; d < 3; d++) {
          for (a = 0; a < max; a++) {
            b = p2[d * max + a];
            c = p2[((a + 1) % max) + d * max];
            ctx.beginPath();
            ctx.strokeStyle = "hsla(" + ((a / max * 360) | 0) + ",70%,60%,0.15)";
            ctx.lineWidth = Math.pow(6, b[2]);
            ctx.lineTo(b[0] * s + 200, b[1] * s + 200);
            ctx.lineTo(c[0] * s + 200, c[1] * s + 200);
            ctx.stroke();
          }
        }
      }
      count++;
      requestAnimationFrame(rus);
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  border: 0;
  background: #000
}

canvas {
  position: relative;
  top: 50%;
  left: 50%;
  margin-left: -50vmin;
  width: 100vmin;
  height: 100vmin;
  overflow: hidden;
}
</style>
