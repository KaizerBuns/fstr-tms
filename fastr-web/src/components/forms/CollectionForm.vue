<template>
  <div class="p-3 space-y-3 overflow-auto" style="max-height: calc(100vh - 3rem); width: 90vw; max-width: 600px;">
    <div class="m-2">
      <label for="name" class="block text-xs font-medium text-gray-700">Name</label>
      <input id="name" v-model="collection.name" class="mt-1 block w-full py-1 px-1.5 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-xs" required>
    </div>

    <div class="m-2">
      <label for="type" class="block text-xs font-medium text-gray-700">Type</label>
      <select id="type" v-model="collection.type" class="mt-1 block w-full py-1 px-1.5 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-xs" required>
        <option value="carrier">Truck</option>
        <option value="customer_freight_broker">Trailer</option>
      </select>
    </div>

    <div class="m-2">
      <label for="address" class="block text-xs font-medium text-gray-700">Device ID</label>
      <textarea id="address" v-model="collection.device_id" class="mt-1 block w-full py-1 px-1.5 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-xs" required></textarea>
    </div>

<!--    <div class="m-2">-->
<!--      <label for="fax" class="block text-xs font-medium text-gray-700">Location: Latitude</label>-->
<!--      <input id="fax" v-model="collection.location.latitude" class="mt-1 block w-full py-1 px-1.5 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-xs">-->
<!--    </div>-->

<!--    <div class="m-2">-->
<!--      <label for="fax" class="block text-xs font-medium text-gray-700">Location: Longitude</label>-->
<!--      <input id="fax" v-model="collection.location.longitude" class="mt-1 block w-full py-1 px-1.5 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-xs">-->
<!--    </div>-->

    <div class="m-2">
      <label for="mobile" class="block text-xs font-medium text-gray-700">Last Inspection Date</label>
      <input id="mobile" v-model="collection.last_inspection_date" class="mt-1 block w-full py-1 px-1.5 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-xs">
    </div>

    <div class="m-2">
      <label for="full-name" class="block text-xs font-medium text-gray-700">Inspection Due Date</label>
      <input id="full-name" v-model="collection.inspection_due_date" class="mt-1 block w-full py-1 px-1.5 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-xs" required>
    </div>

    <div class="m-2">
      <label for="full-name" class="block text-xs font-medium text-gray-700">KMs Driven</label>
      <input id="full-name" v-model="collection.kilometers_driven" class="mt-1 block w-full py-1 px-1.5 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-xs" required>
    </div>

    <div class="m-2">
      <label for="email" class="block text-xs font-medium text-gray-700">License Plate</label>
      <input id="email" v-model="collection.license_plate" class="mt-1 block w-full py-1 px-1.5 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-xs" required>
    </div>

    <button @click="submitForm" class="mt-2 inline-flex justify-center py-1 px-2 border border-transparent shadow-sm text-xs font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Save</button>
  </div>
</template>

<script>
export default {
  props: ['modelValue'],
  data() {
    return {
      collection: this.modelValue ? { ...this.modelValue } : {},
    };
  },
  methods: {
    async submitForm() {
      this.$store.dispatch('updateCollection', this.collection);
      this.$emit('update:modelValue', this.collection);// notify the parent about the change
      this.$emit('close-modal');

      this.$emit('close-modal');
    },
  },
  watch: {
    value: {
      handler(newVal) {
        this.collection = {...newVal};  // sync with parent when the prop changes
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
