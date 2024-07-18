<template>
  <div>
    <el-select id="driver" :value="modelValue" :placeholder="modelValue && modelValue.name"
               @change="updateValue">
      <el-option class="bg-red-500">
      <span class="text-white" @click="isModalOpen = true">
        + Create new driver
      </span>
      </el-option>
      <el-option
          v-for="item in drivers"
          :key="item.id"
          :label="item.name"
          :value="{ name: item.name, id: item.id }">
      <span>
<!--        <font-awesome-icon :icon="['fas', 'admin']" size="xl"/>-->
      </span>
        <span class="pl-2">{{ item.name }}</span>
      </el-option>
    </el-select>
    <CreateUpdateModal
        v-if="isModalOpen === true"
        :isModalOpen="isModalOpen"
        recordContext="create"
        singularCollectionName="driver"
        collectionName="drivers"
        :selectedRecord="[]"
        @closeModal="closeModal"
        @reloadData="reloadData"
    />
  </div>
</template>

<script>
import CreateUpdateModal from '@/components/modals/CreateUpdateModal.vue';

export default {
  components: {
    CreateUpdateModal,
  },
  props: {
    modelValue: Object,
  },
  data() {
    return {
      isModalOpen: false,
      drivers: [],
    };
  },
  methods: {
    closeModal() {
      console.log('ping2');
      this.isModalOpen = false;
    },
    async reloadData() {
      const driverCollection = await this.$store.dispatch('getDrivers');
      this.drivers = driverCollection.map((driver) => {
        return {
          id: driver._id,
          name: driver.name,
        };
      });
    },
    updateValue(value) {
      console.log('event: ', value);
      this.$emit('update:modelValue', value);
    },
  },
  async created() {
    const driverCollection = await this.$store.state.data.drivers;
    this.drivers = driverCollection.map((driver) => {
      return {
        id: driver._id,
        name: driver.name,
      };
    });
  },
};

</script>
