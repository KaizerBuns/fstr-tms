<template>
  <el-form-item :label="fieldLabel">
    <select :id="fieldName" :value="modelValue" @input="updateValue">
      <option v-for="(option, key) in options" :key="key" :value="option.name">{{ option.label }}</option>
    </select>
  </el-form-item>
</template>

<script>
export default {
  props: {
    modelValue: String,
    fieldName: String,
    fieldLabel: String,
    options: Array,
  },
  methods: {
    updateValue(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
};
</script>

<style scoped>
select {
  background-color: transparent;
  border: 1px solid lightgrey;
  border-radius: 5px;
  width: 100%;
}
select:focus {
  outline: none;
  border: 1px solid red;
}
</style>
