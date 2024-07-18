<template>
  <div>
    <div class="text-2xl text-red-500 p-2">
      {{ capitalizedCollectionName }}
    </div>
    <!-- Insert search field here -->
    <div class="p-2 flex">
      <input v-model="searchQuery" type="text" :placeholder="`Search ${capitalizedCollectionName}`"
             class="flex-grow px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline mr-2">
      <button @click="openModal({}, 'create')" class="p-2 bg-red-500 text-white">Create {{
          singularCollectionName
        }}
      </button>
    </div>
    <CreateUpdateModal
      :isModalOpen="isModalOpen"
      :recordContext="recordContext"
      :singularCollectionName="singularCollectionName"
      :collectionName="collectionName"
      :selectedRecord="selectedRecord"
      @closeModal="closeModal"
      @reloadData="reloadData"
    />

    <el-table :data="filteredRecords" style="width: 100%" v-loading="isLoading">
      <template v-for="(column, key) of columns[$route.params.collectionName]" :key="key">
        <el-table-column :label="column.label" class="selectable-text">
          <template #default="{ row }">
            <div v-if="row.editing && row.editingField === column.prop"
                 class="flex items-center space-x-2">

              <font-awesome-icon icon="times" @click="cancelEdit(row)" class="cursor-pointer"/>
              <font-awesome-icon icon="check" @click="saveEdit(row)" class="cursor-pointer"/>
              <div v-if="column.prop === 'address'">
                <AddressField />
              </div>
              <div v-else-if="column.prop === 'phone_number'">
                <PhoneField />
              </div>
              <div v-else-if="column.prop.includes('date')">
                <DateField />
              </div>
              <div v-else-if="column.prop.includes('email')">
                <EmailField />
              </div>
              <div v-else>
                <el-input v-model="row[column.prop]" class="border-none"/>
              </div>
            </div>
            <el-button v-else @click="enableEdit(row, column.prop)">
              {{ row[column.prop] ?? '-' }}
            </el-button>
          </template>
        </el-table-column>
      </template>

      <el-table-column fixed="right" label="Operations" width="120">
        <template #default="{ row }">
          <el-button link type="primary" size="small" @click="handleClick(row)">Details</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
import _ from 'lodash';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPencilAlt, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import CreateUpdateModal from '@/components/modals/CreateUpdateModal.vue'
import AddressField from '@/components/fields/AddressField.vue'
import PhoneField from '@/components/fields/AddressField.vue'
import EmailField from '@/components/fields/AddressField.vue'
import DateField from '@/components/fields/DateField.vue'
library.add(faPencilAlt, faCheck, faTimes);

export default {
  components: {
    AddressField,
    DateField,
    PhoneField,
    EmailField,
    CreateUpdateModal,
  },
  props: ['collectionName'],
  data() {
    return {
      isLoading: true,
      recordContext: 'create',
      records: [],
      columns: {
        accounts: [
          { prop: 'name', label: 'Name', width: 'auto' },
          { prop: 'email', label: 'Email', width: 'auto' },
          { prop: 'phone_number', label: 'Phone', width: 'auto' },
          { prop: 'fax_number', label: 'Fax', width: 'auto' },
          { prop: 'billing_address', label: 'Billing Address', width: 'auto' },
          { prop: 'shipping_address', label: 'Shipping Address', width: 'auto' },
        ],
        drivers: [
          { prop: 'name', label: 'Name', width: 'auto' },
          { prop: 'address', label: 'Address', width: 'auto' },
          { prop: 'phone_number', label: 'Phone Number', width: 'auto' },
          { prop: 'license_number', label: 'License Number', width: 'auto' },
          { prop: 'date_of_birth', label: 'Date of Birth', width: 'auto' },
          { prop: 'driver_type', label: 'Driver Type', width: 'auto' },
        ],
        trailers: [
          { prop: 'trailer_id', label: 'Trailer ID', width: 'auto' },
          { prop: 'trailer_type', label: 'Trailer Type', width: 'auto' },
          { prop: 'capacity', label: 'Capacity', width: 'auto' },
          { prop: 'maintenance_status', label: 'Maintenance Status', width: 'auto' },
          { prop: 'maintenance_pm', label: 'Maintenance PM', width: 'auto' },
          { prop: 'maintenance_service', label: 'Maintenance Service', width: 'auto' },
        ],
        trucks: [
          { prop: 'name', label: 'Name', width: 'auto' },
          { prop: 'device_id', label: 'Device ID', width: 'auto' },
          { prop: 'last_inspection_date', label: 'Last Inspection Date', width: 'auto' },
          { prop: 'inspection_due_date', label: 'Inspection Due Date', width: 'auto'},
          { prop: 'kilometers_driven', label: 'Kilometers Driven', width: 'auto' },
          { prop: 'license_plate', label: 'License Plate', width: 'auto' },
        ],
        trips: [
          { prop: 'status', label: 'Status', width: 'auto' },
          { prop: 'trip_number', label: 'Trip Number', width: 'auto' },
          { prop: 'driver', label: 'Driver', width: 'auto' },
          { prop: 'truck', label: 'Truck', width: 'auto' },
          { prop: 'trailer', label: 'Trailer', width: 'auto' },
          { prop: 'location', label: 'Location', width: 'auto' },
          { prop: 'start_date', label: 'Start Date', width: 'auto' },
          { prop: 'end_date', label: 'End Date', width: 'auto' },
          { prop: 'broker', label: 'Broker', width: 'auto' },
        ],
      },
      isModalOpen: false,
      searchQuery: '',
      selectedRecord: [],
    };
  },
  computed: {
    capitalizedCollectionName() {
      return this.collectionName.charAt(0).toUpperCase() + this.collectionName.slice(1) ?? '';
    },
    singularCollectionName() {
      return this.collectionName.slice(0, -1) ?? '';
    },
    filteredRecords() {
      try {
        if(!_.isArray(this.records) || this.records.length < 1) return this.records;
        // if (this.collectionName === 'accounts') return this.records;
        if (!this.searchQuery) {
          return this.records.splice(0, 50);
        }

        // Convert the search query to lower case for case insensitive search
        const searchQuery = this.searchQuery.toLowerCase();
        // Filter the drivers
        return this.records.filter(record => {

          return record.name?.toLowerCase()?.includes(searchQuery);
          // include all other fields
        }).splice(0, 50);
      } catch (e) {
        console.error(e);
        return this.records.splice(0, 50);
      }
    },
  },
  methods: {
    enableEdit(row, field) {
      row.editing = true;
      row.editingField = field;
    },
    async saveEdit(row) {
      row.editing = false;
      row.editingField = null;
      // Perform save logic here...
      console.log('saveEdit: row: ', JSON.stringify(row, null, 2));

      let updateMethod;

      switch (this.collectionName) {
        case 'trucks':
          updateMethod = `updateTruck`;
          break;
        case 'drivers':
          updateMethod = `updateDriver`;
          break;
        case 'accounts':
          updateMethod = `updateAccount`;
          break;
        case 'trailers':
          updateMethod = `updateTrailers`;
          break;
        case 'trips':
          updateMethod = `updateTrips`;
          break;
        default:
          console.error('Unsupported collection');
          return;
      }
      console.log('---------------------------')
      this.records = await this.$store.dispatch(updateMethod, row);
      console.log('---------------------------s')
      await this.reloadData();
      console.log('---------------------------ss')

      // remove editing and editingField
      // use collectionName and _id to update record

    },
    cancelEdit(row) {
      row.editing = false;
      // Revert changes if needed...
    },
    handleClick(row) {
      console.log('row: ', row);
      this.openModal(row, 'update');
    },
    openModal(record = {}, context) {
      this.recordContext = context
      this.selectedRecord = record;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    async reloadData() {
      this.isLoading = true;
      this.records = await this.$store.dispatch(
          `get${this.capitalizedCollectionName}`,
      );
      this.isLoading = false;
    },
  },
  // watch: {
  //   records: {
  //     async handler(newVal, oldVal) {
  //       // Find the index of the modified record
  //       console.log('oldVal: ', oldVal);
  //       console.log('newVal: ', newVal);
  //       if (!oldVal || oldVal.length === 0) return;
  //       if (!newVal || newVal.length === 0) return;
  //
  //       const index = newVal.findIndex((record, index) => {
  //         return JSON.stringify(record) !== JSON.stringify(oldVal[index]);
  //       });
  //
  //       if (index !== -1) {
  //         const record = newVal[index];
  //         console.log('updateRecord: ', record);
  //         this.records = await this.$store.dispatch(
  //             `update${this.capitalizedCollectionName.split(0, -1)}`,
  //             record,
  //         );
  //
  //         this.records[index] = newVal[index];
  //       }
  //     },
  //     deep: true,
  //   },
  // },
  async created() {
    this.isLoading = true;
    this.records = await this.$store.dispatch(
        `get${this.capitalizedCollectionName}`,
    );
    this.isLoading = false;
  },
};
</script>

<style scoped>
.el-button {
  border: none;
}

.el-table__header-wrapper {
  position: sticky;
  top: 0;
  z-index: 1;
}
</style>
