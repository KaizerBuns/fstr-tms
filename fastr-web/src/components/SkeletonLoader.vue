<template>
  <div :class="[width, height, 'bg-gray-300', 'animate-colorPulse', 'rounded-xl', 'm-2']"></div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: 'w-20'
    },
    height: {
      type: String,
      default: 'h-20'
    }
  }
}
</script>
