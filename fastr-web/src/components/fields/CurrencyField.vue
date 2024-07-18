<template>
  <div class="p-2">
    <label :for="fieldName" class="block text-xs font-medium text-gray-700">{{ fieldLabel }}</label>
    <span class="text-lg w-5 text-center text-red-500">$</span>
    <input :id="fieldName" class="text-black" :value="modelValue.value" type="number" @input="updateValue"/>
    <el-select class="w-20" v-model="currency" placeholder="Select" size="small">
      <el-option label="CAD" value="cad"></el-option>
      <el-option label="USD" value="usd"></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: Object,
    fieldName: String,
    fieldLabel: String,
  },
  data() {
    return {
      currency: 'cad',
    }
  },
  methods: {
    updateValue(event) {
      this.$emit('update:modelValue', { value: event.target.value, currency: this.currency });
    }
  }
}
</script>

<style>
input {
  background-color: transparent;
  border: 1px solid red;
  border-radius: 5px;

}
input:focus {
  outline: none;
}
</style>
