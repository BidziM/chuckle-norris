<template>
  <main>
    <div class="h-screen flex items-center justify-center">
      <div
        class="w-full mx-10 flex sm:space-x-4 md:max-w-3xl max-sm:space-y-2 max-sm:flex-col"
      >
        <NuxtLink class="w-full h-14" to="/joke"
          ><ButtonComp
            msg="Losuj Chuck-a"
            :class="`bg-gradient-to-t from-[#ea7105] to-[#ffce7a]`"
        /></NuxtLink>
        <NuxtLink class="w-full h-14" to="/favorite"
          ><ButtonComp msg="Lista zapisanych Chuck-ów" :class="`bg-[#ffa200]`"
        /></NuxtLink>
      </div>
    </div>
  </main>
</template>

<script>
import background from '~/assets/background.jpg'

export default {
  data() {
    return {
      background,
    }
  },
}
</script>
