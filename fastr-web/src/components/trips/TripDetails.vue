<template>
  <div class="flex h-screen md:h-auto">
    <div class="visible md:invisible fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
         aria-hidden="true"></div>
    <div
        class="m-auto md:m-0 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all w-full">
      <div class="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div class=" text-center sm:mt-0 sm:text-left">
          <!-- Google Map -->
          <div id="map" style="width: 100%; height: 30vw"></div>
        </div>
      </div>
      <nav class="bg-gray-100 flex justify-between text-sm text-red-900 uppercase font-mono">
        <a href="#"
           class="w-full block text-center hover:bg-red-200 hover:text-red-800 p-2 transition duration-300"
           @click="updateTab('status')">
          Status
        </a>
        <a href="#"
           class="w-full block text-center hover:bg-red-200 hover:text-red-800 p-2 transition duration-300"
           @click="updateTab('contact')">
          Contact
        </a>
        <a href="#"
           class="w-full block text-center hover:bg-red-200 hover:text-red-800 p-2 transition duration-300"
           @click="updateTab('logs')">
          Logs
        </a>
        <a href="#"
           class="w-full block text-center hover:bg-red-200 hover:text-red-800 p-2 transition duration-300"
           @click="closeModal">
          Close
        </a>
      </nav>
      <TruckStatus v-if="selectedTab === 'status'" :trip="trip"/>
      <ContactTruck v-if="selectedTab === 'contact'" :trip="trip"/>
      <TruckLogs v-if="selectedTab === 'logs'" :trip="trip"/>
    </div>
  </div>
</template>

<script>


import ContactTruck from '@/components/trucks/ContactTruck.vue';
import TruckStatus from '@/components/trucks/TruckStatus.vue';
import TruckLogs from '@/components/trucks/TruckLogs.vue';

export default {
  components: {
    TruckStatus,
    ContactTruck,
    TruckLogs,
  },
  props: ['modelValue'],
  data() {
    return {
      selectedTab: 'status',
      trip: this.modelValue ? { ...this.modelValue } : {},
      center: { lat: 51.093048, lng: 6.842120 },
      truck: {},
    };
  },
  methods: {
    closeModal() {
      this.$parent.isModalOpen = false;
    },
    updateTab(tab) {
      this.selectedTab = tab;
    },
    async initMap() {
      const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: { lat: 0, lng: -180 },
        mapTypeId: 'terrain',
      });
      const flightPlanCoordinates = [
        { lat: 37.772, lng: -122.214 },
        { lat: 21.291, lng: -157.821 },
        { lat: -18.142, lng: 178.431 },
        { lat: -27.467, lng: 153.027 },
      ];
      const flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });

      flightPath.setMap(map);

    },
  },
  watch: {
    value: {
      handler(newVal) {
        this.trip = { ...newVal };  // sync with parent when the prop changes
      },
      deep: true,
    },
  },
  async created() {
    this.truck = await this.$store.dispatch('getTruckById', { id: this.trip.truck });

    await this.initMap();
    window.initMap = initMap;
  },
};
</script>
