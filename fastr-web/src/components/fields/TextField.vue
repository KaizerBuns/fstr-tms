<template>
  <el-form-item :label="fieldLabel">
    <input :id="fieldName" :value="modelValue" type="text" @input="updateValue"
           :disabled="disabled"/>
  </el-form-item>
</template>

<script>
export default {
  props: {
    modelValue: String,
    fieldName: String,
    fieldLabel: String,
    disabled: Boolean,
  },
  methods: {
    updateValue(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
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
</style>
