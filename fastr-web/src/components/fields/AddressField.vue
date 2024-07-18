<template>
  <el-form-item :label="fieldLabel" :style="`${customWidth ? `width: ${customWidth}px` : 'width: 250px'}`">
    <input :id="fieldName" ref="autocomplete" :value="modelValue" placeholder="Search address"
      @input="(event) => updateValue(event.target.value)" />
  </el-form-item>
</template>

<script>
export default {
  props: {
    modelValue: String,
    fieldName: String,
    fieldLabel: String,
    customWidth: String,
  },
  mounted() {
    this.initAutocomplete();
  },
  methods: {
    updateValue(event) {
      this.$emit('update:modelValue', event);
    },
    initAutocomplete() {
      const input = this.$refs.autocomplete;
      this.autocomplete = new google.maps.places.Autocomplete(input);

      // Add listener for place selection
      this.autocomplete.addListener('place_changed', () => {
        const place = this.autocomplete.getPlace();
        this.updateValue(place.formatted_address);
      });
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
