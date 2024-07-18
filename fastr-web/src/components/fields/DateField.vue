<template>
  <div class="text-black p-2">
    <label :for="fieldName" class="block text-xs font-medium text-gray-700">{{ fieldLabel }}</label>
    <input :id="fieldName" :value="modelValue" type="date" @input="updateValue"/>
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
  border: 1px solid red;
  border-radius: 5px;

}

input:focus {
  outline: none;
}
</style>
