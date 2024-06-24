<script setup>
const props = defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <button class="block m-auto w-full h-full rounded-lg">{{ props.msg }}</button>
</template>
