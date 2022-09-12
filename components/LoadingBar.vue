<template>
  <div v-if="loading" class="justify-center align-center loading-page">
    <span class="helper"></span>
    <div id="loading-bar-spinner" class="spinner"><div class="spinner-icon"></div></div>
  </div>
</template>

<script>
export default {
name: "LoadingBar",
  data: () => {
    return {
      loading: true,
    }
  },
  mounted() {
    setTimeout(() => this.loading = false, 1500)
  },
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  }
}
</script>

<style scoped>
#loading-bar-spinner.spinner {
  left: 50%;
  margin-left: -20px;
  top: 50%;
  margin-top: -20px;
  position: absolute;
  z-index: 19 !important;
  animation: loading-bar-spinner 400ms linear infinite;
}

#loading-bar-spinner.spinner .spinner-icon {
  width: 40px;
  height: 40px;
  border:  solid 4px transparent;
  border-top-color:  #00C8B1 !important;
  border-left-color: #00C8B1 !important;
  border-radius: 50%;
}

@keyframes loading-bar-spinner {
  0%   { transform: rotate(0deg);   transform: rotate(0deg); }
  100% { transform: rotate(360deg); transform: rotate(360deg); }
}


.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: rgba(255, 255, 255, 0.8);
  z-index: 10;
}

.helper {
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
</style>
