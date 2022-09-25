<template>
  <v-md-preview :text="text"></v-md-preview>
</template>

<script setup>
import { ref } from 'vue'

const text = ref('```' + 'npm i @kangc/v-md-editor@next -S' + '```')
</script>
<style lang="scss" scoped></style>
