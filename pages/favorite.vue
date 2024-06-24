<template>
  <div class="m-auto mx-[24px] h-screen flex flex-col sm:justify-center">
    <div class="max-sm:mt-10">
      <div
        class="grid sm:grid-cols-2 gap-2 justify-center max-w-4xl m-auto items-stretch"
      >
        <div
          v-for="{ joke, date } in favJokeLisk"
          :key="joke.joke"
          class="flex"
        >
          <JokeComp
            :joke="joke"
            :date="date"
            class="max-md:px-2 max-md:py-10 px-10 py-10"
          />
        </div>
      </div>
      <div class="m-auto mt-5 w-32 h-12">
        <NuxtLink class="w-full" to="/">
          <ButtonComp msg="Powrót" class="bg-[#ffa200]" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import { getAllJokes } from '~/static/js/JokeMethods'
import JokeComp from '~/components/JokeComp'
export default {
  components: {
    JokeComp,
  },
  data() {
    return {
      favJokeLisk: [],
    }
  },
  async mounted() {
    this.favJokeLisk = await getAllJokes()
  },
}
</script>
