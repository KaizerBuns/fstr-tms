<template>
  <el-form-item :label="fieldLabel">
    <input :id="fieldName" :value="modelValue" type="text" @input="updateValue" @blur="validateEmail"/>
    <div v-if="emailError" class="text-red-500 text-sm">Invalid email address</div>
  </el-form-item>
</template>

<script>
export default {
  props: {
    modelValue: String,
    fieldName: String,
    fieldLabel: String,
  },
  data() {
    return {
      emailError: false,
    };
  },
  methods: {
    updateValue(event) {
      this.emailError = false; // Reset error when input changes
      this.$emit('update:modelValue', event.target.value);
    },
    validateEmail() {
      const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!pattern.test(this.modelValue)) {
        this.emailError = true;
      }
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
</style>