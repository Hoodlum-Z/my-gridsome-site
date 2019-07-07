<template>
  <div v-html="content"></div>
</template>

<script>
export default {
  props: {
    content: String,
  },
}
</script>