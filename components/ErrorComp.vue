<template>
    <div class="bg-opacity-60 bg-white rounded-lg relative p-5">
        <p class="text-base text-red-600 text-center font-bold max-w-sm">{{ msg }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            msg: String,
        },
    }
</script>