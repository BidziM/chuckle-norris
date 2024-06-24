<template>
  <div id="loading">
    <img class="img" :src="chuck" alt="loading..." width="200" />
  </div>
</template>

<script>
import chuck from '~/assets/chuck.png'
export default {
  name: 'LoadingComp',
  data() {
    return {
      chuck,
    }
  },
}
</script>

<style>
#loading {
  position: absolute;
  z-index: 1000;
  height: 100vh;
  width: 100vw;
  text-align: center;
  line-height: 100vh;
}
.img {
  position: relative;
  margin: auto;
  margin-top: 20%;
  animation: mymove 5s infinite;
}
@keyframes mymove {
  100% {
    transform: rotateY(360deg);
  }
}
</style>
