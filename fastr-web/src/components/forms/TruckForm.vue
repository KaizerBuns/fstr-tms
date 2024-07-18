<template>
  <div class="p-3 space-y-3 overflow-auto" style="max-height: calc(100vh - 3rem); width: 90vw; max-width: 600px;">
    <div class="m-2">
      <label for="name" class="block text-xs font-medium text-gray-700">Name</label>
      <input id="name" v-model="truck.name" class="mt-1 block w-full py-1 px-1.5 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-xs" required>
    </div>

    <div class="m-2">
      <label for="device_id" class="block text-xs font-medium text-gray-700">Device ID</label>
      <input id="device_id" v-model="truck.device_id" class="mt-1 block w-full py-1 px-1.5 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-xs" required>
    </div>

<!--    <div class="m-2">-->
<!--      <label class="block text-xs font-medium text-gray-700">Location</label>-->
<!--      <div class="flex space-x-2">-->
<!--        <input v-model="truck.location.latitude" placeholder="Latitude" class="flex-1 py-1 px-1.5 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-xs" required>-->
<!--        <input v-model="truck.location.longitude" placeholder="Longitude" class="flex-1 py-1 px-1.5 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-xs" required>-->
<!--      </div>-->
<!--    </div>-->

    <div class="m-2">
      <label for="last_inspection_date" class="block text-xs font-medium text-gray-700">Last Inspection Date</label>
      <input id="last_inspection_date" type="date" v-model="truck.last_inspection_date" class="mt-1 block w-full py-1 px-1.5 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-xs" required>
    </div>

    <div class="m-2">
      <label for="inspection_due_date" class="block text-xs font-medium text-gray-700">Inspection Due Date</label>
      <input id="inspection_due_date" type="date" v-model="truck.inspection_due_date" class="mt-1 block w-full py-1 px-1.5 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-xs" required>
    </div>

<!--    <div class="m-2">-->
<!--      <label for="maintenance-history" class="block text-xs font-medium text-gray-700">Maintenance History</label>-->
<!--      <div v-for="(event, index) in truck.maintenance_history" :key="index" class="flex space-x-2">-->
<!--        <input v-model="event.date" type="date" class="flex-1 py-1 px-1.5 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-xs" required>-->
<!--        <input v-model="event.description" placeholder="Description" class="flex-2 py-1 px-1.5 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-xs" required>-->
<!--        <input v-model="event.cost" type="number" placeholder="Cost" class="flex-1 py-1 px-1.5 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-xs" required>-->
<!--      </div>-->
<!--      <button @click="addMaintenanceEvent" class="mt-1 inline-flex justify-center py-1 px-2 border border-transparent shadow-sm text-xs font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Add Maintenance Event</button>-->
<!--    </div>-->

    <div class="m-2">
      <label for="kilometers_driven" class="block text-xs font-medium text-gray-700">Kilometers Driven</label>
      <input id="kilometers_driven" v-model="truck.kilometers_driven" type="number" class="mt-1 block w-full py-1 px-1.5 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-xs" required>
    </div>

    <div class="m-2">
      <label for="license_plate" class="block text-xs font-medium text-gray-700">License Plate</label>
      <input id="license_plate" v-model="truck.license_plate" class="mt-1 block w-full py-1 px-1.5 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-xs" required>
    </div>

    <button @click="submitForm"
            class="mt-2 inline-flex justify-center py-1 px-2 border border-transparent shadow-sm text-xs font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
      {{ context === 'create' ? 'Create' : 'Update' }}
    </button>
  </div>
</template>

<script>

export default {
  props: ['modelValue', 'context'],
  data() {
    return {
      truck: this.modelValue ? { ...this.modelValue } : {},
    };
  },
  methods: {
    async submitForm() {
      if (this.context === 'create') {
        console.log('createTruck: ', this.truck)
        this.$store.dispatch('createTruck', this.truck);
        this.$emit('close-modal');
        this.$emit('reload');
      } else {
        this.$store.dispatch('updateTruck', this.truck);
        this.$emit('update:modelValue', this.truck);
        this.$emit('close-modal');
        this.$emit('reload');
      }
    },
  },
  watch: {
    modelValue: {
      handler(newVal) {
        this.truck = { ...newVal };
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
/* Your form styling */
</style>
