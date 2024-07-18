<template>
  <div class="p-3 space-y-3 overflow-auto"
       style="max-height: calc(100vh - 3rem); width: 90vw; max-width: 600px;">
    <div class="m-2">
      <label for="name" class="block text-xs font-medium text-gray-700">Name</label>
      <input id="name" v-model="driver.name"
             class="mt-1 block w-full py-1 px-1.5 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-xs">
    </div>
    <div class="m-2">
      <label for="address" class="block text-xs font-medium text-gray-700">Address</label>
      <AddressField v-model="driver.address"/>
    </div>

    <div class="m-2">
      <label for="phone_number" class="block text-xs font-medium text-gray-700">Phone Number</label>
      <PhoneField v-model="driver.phone_number"/>
    </div>

    <div class="m-2">
      <label for="date_of_birth" class="block text-xs font-medium text-gray-700">Date of
        Birth</label>
      <DateField v-model="driver.date_of_birth"/>
    </div>

    <div class="m-2">
      <label for="license_number" class="block text-xs font-medium text-gray-700">License
        Number</label>
      <input id="license_number" v-model="driver.license_number"
             class="mt-1 block w-full py-1 px-1.5 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-xs">
    </div>

    <div class="m-2">
      <label for="driver_type" class="block text-xs font-medium text-gray-700">Driver Type</label>
      <el-select id="driver_type" v-model="driver.driver_type"
                 class="mt-1 block w-full py-1 px-1.5 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-xs">
        <el-option value="company">Company Driver</el-option>
        <el-option value="owner_operator">Owner Operator</el-option>
      </el-select>
    </div>

    <!-- Add fields for license_number, date_of_birth, current_location, driver_type, assigned_truck, assigned_trip, schedule... -->

    <button @click="submitForm"
            class="mt-2 inline-flex justify-center py-1 px-2 border border-transparent shadow-sm text-xs font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
      {{ context === 'create' ? 'Create' : 'Update' }}
    </button>
    <button @click="closeModal"
            class="mt-2 inline-flex justify-center py-1 px-2 border border-transparent shadow-sm text-xs font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
      Close
    </button>
  </div>
</template>

<script>
import AddressField from '@/components/fields/AddressField.vue';
import PhoneField from '@/components/fields/PhoneField.vue';
import DateField from '@/components/fields/DateField.vue';

export default {
  components: {
    AddressField,
    PhoneField,
    DateField,
  },
  props: ['modelValue', 'context'],
  data() {
    return {
      driver: this.modelValue ? { ...this.modelValue } : {},
    };
  },
  methods: {
    async submitForm() {
      console.log('createDriver: ', this.driver);
      if (this.context === 'create') {
        this.$store.dispatch('createDriver', this.driver);
        this.$emit('closeModal');
        this.$emit('reload');
      } else {
        this.$store.dispatch('updateDriver', this.driver);
        this.$emit('update:modelValue', this.driver);
        this.$emit('closeModal');
        this.$emit('reload');
      }
    },
    closeModal() {
      this.$emit('closeModal');
    },
  },
  watch: {
    modelValue: {
      handler(newVal) {
        this.driver = { ...newVal };
      },
      deep: true,
    },
  },
};
</script>
<style scoped>
/* Your form container */
form {
  background-color: #FFFFFF;
  border: 1px solid #E5E7EB;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
  border-radius: 0.375rem;
  padding: 1.5rem;
}

/* Your button */
button {
  background-color: #F87171;
  border: none;
  border-radius: 0.375rem;
  color: #FFFFFF;
  padding: 0.75rem 1.5rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  transition-duration: 0.4s;
  cursor: pointer;
}

button:hover {
  background-color: #DC2626;
  color: white;
}
</style>
