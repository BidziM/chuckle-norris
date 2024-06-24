<template>
  <div
    class="bg-cover bg-center min-h-screen overflow-auto"
    :style="{ 'background-image': `url(${background})` }"
  >
    <Nuxt />
  </div>
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
