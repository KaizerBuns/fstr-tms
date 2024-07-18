<template>
  <div class="text-red-500">
    <div class="grid grid-cols-3 md:grid-cols-6 gap-4">
      <template v-for="(item, key) in items" :key="item.key">
        <button class="bg-white p-4 shadow-md rounded-lg" @click="navigateToListView(item.name)">
          <h2 class="text-lg font-semibold">{{ item.label }}</h2>
          <p>{{ item.description }}</p>
          <p class="text-gray-500 mt-2">{{ item.totalRecords ?? "0" }} {{ item.name }}</p>
        </button>
      </template>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      recordData: {},
      items: [
        { name: 'accounts', label: 'Accounts', totalRecords: "0" },
        { name: 'trips', label: 'Trips', totalRecords: "0"  },
        { name: 'trucks', label: 'Trucks', totalRecords: "0"  },
        { name: 'trailers', label: 'Trailers', totalRecords: "0"  },
        { name: 'drivers', label: 'Drivers', totalRecords: "0"  },
      ],
    };
  },
  methods: {
    navigateToListView(collectionName) {
      this.$router.push({
        name: 'ListRecords',  // Replace with the actual route name
        params: {
          collectionName,
        },
      });
    },
  },
  async created() {
    // accounts
    this.recordData.accounts = await this.$store.dispatch('getAccounts');
    for (const item of this.items) {
      if (item.name === 'accounts') {
        item.totalRecords = this.recordData.accounts.length.toString();
        break; // If you only want to update the first occurrence
      }
    }

    // // trucks
    this.recordData.trucks = await this.$store.dispatch('getTrucks');
    for (const item of this.items) {
      if (item.name === 'trucks') {
        item.totalRecords = this.recordData.trucks.length.toString();
        break; // If you only want to update the first occurrence
      }
    }
    // // trailers

    this.recordData.trailers = await this.$store.dispatch('getTrailers');
    for (const item of this.items) {
      if (item.name === 'trailers') {
        item.totalRecords = this.recordData.trailers.length.toString();
        break; // If you only want to update the first occurrence
      }
    }
    // // drivers
    this.recordData.drivers = await this.$store.dispatch('getDrivers');
    for (const item of this.items) {
      if (item.name === 'drivers') {
        item.totalRecords = this.recordData.drivers.length.toString();
        break; // If you only want to update the first occurrence
      }
    }
    // // trips
    this.recordData.trips = await this.$store.dispatch('getTrips');
    for (const item of this.items) {
      if (item.name === 'trips') {
        item.totalRecords = this.recordData.trips.length.toString();
        break; // If you only want to update the first occurrence
      }
    }

  }
};
</script>

<style scoped>
/* Tailwind CSS classes can be used directly here */
</style>
