<template>
  <el-form-item :label="fieldLabel">
    <el-select id="truck" :value="modelValue" :placeholder="modelValue.name ?? 'Select one'"
               @change="updateValue">
      <el-option class="bg-red-500">
      <span class="text-white" @click="isModalOpen = true">
        + Create new truck
      </span>
      </el-option>
      <el-option
          v-for="item in trucks"
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
        :isModalOpen="isModalOpen"
        recordContext="create"
        singularCollectionName="truck"
        collectionName="trucks"
        :selectedRecord="[]"
        @closeModal="closeModal"
        @reloadData="reloadData"
    />
  </el-form-item>
</template>

<script>
import CreateUpdateModal from '@/components/modals/CreateUpdateModal.vue';

export default {
  components: {
    CreateUpdateModal,
  },
  props: {
    modelValue: {
      type: Object,
      default: {
        id: '',
        name: '',
      },
    },
    fieldLabel: String,
  },
  data() {
    return {
      isModalOpen: false,
      trucks: [],
    };
  },
  methods: {
    closeModal() {
      this.isModalOpen = false;
    },
    async reloadData() {
      const truckCollection = await this.$store.dispatch('getTrucks');
      this.trucks = truckCollection.map((truck) => {
        return {
          id: truck._id,
          name: truck.name,
        };
      });
    },
    updateValue(value) {
      console.log('event: ', value);
      this.$emit('update:modelValue', value);
    },
  },
  async created() {
    const truckCollection = await this.$store.state.data.trucks;
    this.trucks = truckCollection.map((truck) => {
      return {
        id: truck._id,
        name: truck.name,
      };
    });
  },
};

</script>
