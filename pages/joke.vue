<template>
  <Loading v-if="loading" />
  <div v-else class="h-screen flex justify-center">
    <div class="m-auto mx-[24px]">
      <JokeComp
        :joke="joke"
        class="max-md:px-2 max-md:py-[115px] px-52 py-32"
      />
      <div class="m-auto mt-5 w-32 h-12">
        <NuxtLink class="w-full" to="/"
          ><ButtonComp msg="Powrót" class="bg-[#ffa200]"
        /></NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      joke: '',
      loading: true,
      error: Boolean,
    }
  },
  beforeMount() {
    // this.loading = true
  },
  async mounted() {
    try {
      const response = await fetch('http://localhost:8080', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      this.joke = await response.json().then((data) => data.joke)
    } catch (e) {
      console.log(e)
    } finally {
      console.log('loaded')
      this.loading = false
    }
  },
}
</script>
