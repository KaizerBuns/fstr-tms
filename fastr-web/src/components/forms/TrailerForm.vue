<template>
  <div class="p-3 space-y-3 overflow-auto" style="max-height: calc(100vh - 3rem); width: 90vw; max-width: 600px;">
    <div class="m-2">
      <label for="trailer_id" class="block text-xs font-medium text-gray-700">Trailer ID</label>
      <input id="trailer_id" v-model="trailer.trailer_id" class="mt-1 block w-full py-1 px-1.5 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-xs" required>
    </div>

    <div class="m-2">
      <label for="trailer_type" class="block text-xs font-medium text-gray-700">Trailer Type</label>
      <input id="trailer_type" v-model="trailer.trailer_type" class="mt-1 block w-full py-1 px-1.5 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-xs" required>
    </div>

    <div class="m-2">
      <label for="capacity" class="block text-xs font-medium text-gray-700">Capacity</label>
      <input id="capacity" v-model="trailer.capacity" class="mt-1 block w-full py-1 px-1.5 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-xs" required>
    </div>

<!--    <div class="m-2">-->
<!--      <label class="block text-xs font-medium text-gray-700">Current Location</label>-->
<!--      <div class="flex space-x-2">-->
<!--        <input v-model="trailer.current_location.latitude" placeholder="Latitude" class="flex-1 py-1 px-1.5 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-xs" required>-->
<!--        <input v-model="trailer.current_location.longitude" placeholder="Longitude" class="flex-1 py-1 px-1.5 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-xs" required>-->
<!--      </div>-->
<!--    </div>-->

    <div class="m-2">
      <label for="maintenance_status" class="block text-xs font-medium text-gray-700">Maintenance Status</label>
      <input id="maintenance_status" v-model="trailer.maintenance_status" class="mt-1 block w-full py-1 px-1.5 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-xs" required>
    </div>

    <div class="m-2">
      <label for="maintenance_pm" class="block text-xs font-medium text-gray-700">Maintenance PM</label>
      <input id="maintenance_pm" v-model="trailer.maintenance_pm" class="mt-1 block w-full py-1 px-1.5 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-xs">
    </div>

    <div class="m-2">
      <label for="maintenance_service" class="block text-xs font-medium text-gray-700">Maintenance Service</label>
      <input id="maintenance_service" v-model="trailer.maintenance_service" class="mt-1 block w-full py-1 px-1.5 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-xs">
    </div>

<!--    <div class="m-2">-->
<!--      <label for="current_trip" class="block text-xs font-medium text-gray-700">Current Trip</label>-->
<!--      <input id="current_trip" v-model="trailer.current_trip" class="mt-1 block w-full py-1 px-1.5 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 text-xs">-->
<!--    </div>-->

    <!-- Submit button and other elements... -->

    <button @click="submitForm"
            class="mt-2 inline-flex justify-center py-1 px-2 border border-transparent shadow-sm text-xs font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
      {{ context === 'create' ? 'Create' : 'Update' }}
    </button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  props: ['modelValue', 'context'],
  data() {
    return {
      trailer: this.modelValue ? { ...this.modelValue } : {},
    };
  },
  methods: {
    async submitForm() {
      if (this.context === 'create') {
        this.$store.dispatch('createTrailer', this.trailer);
        this.$emit('close-modal');
        this.$emit('reload');
      } else {
        this.$store.dispatch('updateTrailer', this.trailer);
        this.$emit('update:modelValue', this.trailer);
        this.$emit('close-modal');
        this.$emit('reload');

      }
    },
  },
  watch: {
    modelValue: {
      handler(newVal) {
        this.trailer = { ...newVal };
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
/* Your form styling */
</style>
