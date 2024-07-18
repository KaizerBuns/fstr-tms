<template>
  <div class="p-2 flex">
    <input class="w10" :id="fieldName" :value="modelValue" type="checkbox" @input="updateValue" style="accent-color: red;"/>
    <label :for="fieldName" class="text-sm ml-2 flex flex-grow" style="color: rgb(96, 98, 102);">{{ fieldLabel }}</label>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
    fieldName: String,
    fieldLabel: String,
  },
  methods: {
    updateValue(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
};
</script>

<style scoped>
input {
  background-color: transparent;
  border: 1px solid lightgrey;
  border-radius: 5px;
  width: 100%;
}
input:focus {
  outline: none;
  border: 1px solid red;
}
.w10 {
  width: 13px;
}
</style>
