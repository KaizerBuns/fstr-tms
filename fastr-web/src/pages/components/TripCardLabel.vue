<template>
    <div class="flex flex-row w-1/2">
        <div><font-awesome-icon :icon="['fas', icon]" /></div>
        <div>
            <label class="text-gray-700 text-base pl-2">{{ label }}</label>
        </div>
    </div>
</template>
<script>
export default {
    props: ['icon', 'label']
}
</script>
  