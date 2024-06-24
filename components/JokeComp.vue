<template>
  <!-- <div class="bg-opacity-60 bg-white rounded-lg max-md:px-2 max-md:py-[115px] px-52 py-32 relative"> -->
  <div class="bg-opacity-60 bg-white rounded-lg relative">
    <div class="absolute left-3 top-1 text-sm">
      <h5>{{ date }}</h5>
    </div>
    <PinSVG
      v-if="!isFavorited"
      @click="addJokeToFavorite(joke)"
      class="absolute top-2 right-2 h-5 w-5 cursor-pointer fill-[#494949]"
    />
    <p class="text-base text-center font-bold max-w-sm">{{ joke }}</p>
  </div>
</template>

<script>
import {
  saveJokeToLocalStorage,
  checkIfJokeIsSaved,
} from '~/static/js/JokeMethods'
import PinSVG from '~/assets/pin.svg'
export default {
  components: {
    PinSVG,
  },
  props: {
    joke: String,
    date: String,
  },
  data() {
    return {
      isFavorited: false,
    }
  },
  mounted() {
    const vm = this
    vm.$nextTick(async () => {
      const jokeIsAlreadySaved = await checkIfJokeIsSaved(this.joke)
      this.isFavorited = jokeIsAlreadySaved
    })
  },
  methods: {
    addJokeToFavorite(joke) {
      saveJokeToLocalStorage(joke)
      this.isFavorited = true
    },
  },
}
</script>