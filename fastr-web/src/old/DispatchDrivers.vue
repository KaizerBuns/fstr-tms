<template>
  <div class="fstr-content">
    <div class="fstr-card">
      <!-- Insert search field here -->
      <div class="p-2 flex">
        <input v-model="searchQuery" type="text" placeholder="Search Drivers"
               class="flex-grow px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline mr-2">
        <button @click="openModal" class="p-2 bg-red-500 text-white">Create Driver</button>
      </div>


      <teleport to="body">
        <div v-if="isModalOpen"
             class="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50"
             style="background-color: rgba(0,0,0,.5);">
          <div
              class="bg-white rounded-lg overflow-auto shadow-xl max-w-4xl m-6 sm:m-12 relative py-4">
            <div class="border-b px-4 py-2 flex justify-between items-center">
              <h3 class="text-lg leading-6 font-medium text-gray-900">Create Driver</h3>
              <button @click="closeModal" class="text-black close-modal cursor-pointer z-50">
                <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18"
                     height="18" viewBox="0 0 18 18">
                  <path
                      d="M9 7.586L14.293 2.293l1.414 1.414L10.414 9l5.293 5.293-1.414 1.414L9 10.414l-5.293 5.293-1.414-1.414L7.586 9 2.293 3.707l1.414-1.414L9 7.586z"></path>
                </svg>
              </button>
            </div>

            <!-- DriverForm Component -->
            <DriverForm @closeModal="closeModal" v-model="selectedDriver"/>

          </div>
        </div>
      </teleport>
      <div class="w-full overflow-auto">
        <div class="align-middle inline-block min-w-full px-2 sm:px-6 lg:px-8">
          <div class="fstr-card">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="text-xs leading-4 tracking-wider">
              <tr>
                <th class="px-2 py-1 bg-gray-50 text-left font-medium text-gray-500 uppercase">
                  Name
                </th>
                <th class="px-2 py-1 bg-gray-50 text-left font-medium text-gray-500 uppercase">
                  Address
                </th>
                <th class="px-2 py-1 bg-gray-50 text-left font-medium text-gray-500 uppercase">
                  Phone
                </th>
              </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
              <!-- Repeat these rows as needed -->
              <tr v-for="(driver, index) in filteredDrivers" :key="index"
                  @click="openModal(driver)">
                <td class="px-2 py-1 whitespace-normal">
                  <div class="text-xs text-gray-900">{{ driver.name }}</div>
                </td>
                <td class="px-2 py-1 whitespace-normal break-all">
                  <div class="text-xs text-gray-900">{{ driver.address }}</div>
                </td>
                <td class="px-2 py-1 whitespace-normal">
                  <div class="text-xs text-gray-900">{{ driver.phone_number }}</div>
                </td>
              </tr>
              <!-- End repeat -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DriverForm from '@/components/forms/DriverForm.vue';

export default {
  components: {
    DriverForm,
  },
  data() {
    return {
      isModalOpen: false,
      drivers: [],
      searchQuery: '',
      selectedDriver: {},
    };
  },
  computed: {
    filteredDrivers() {
      try {
        if (!this.searchQuery) {
          return this.drivers;
        }

        // Convert the search query to lower case for case insensitive search
        const searchQuery = this.searchQuery.toLowerCase();
        // Filter the drivers
        return this.drivers.filter(driver => {

          return driver.name?.toLowerCase().includes(searchQuery) ||
              driver.address?.toLowerCase().includes(searchQuery) ||
              driver.phone_number?.toLowerCase().includes(searchQuery);
        });
      } catch (e) {
        console.error(e);
        return this.drivers;
      }
    },
  },
  methods: {
    openModal(driver) {
      if (!driver) {
        this.selectedDriver = {};
      } else {
        this.selectedDriver = driver;
      }
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
  async created() {
    this.drivers = await this.$store.dispatch('getDrivers');
  },
};
</script>
