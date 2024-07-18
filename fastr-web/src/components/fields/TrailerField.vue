<template>
  <el-form-item :label="fieldLabel">
    <el-select id="trailer" :value="modelValue" :placeholder="modelValue.name ?? 'Select one'"
               @change="updateValue">
      <el-option class="bg-red-500">
      <span class="text-white" @click="isModalOpen = true">
        + Create new trailer
      </span>
      </el-option>
      <el-option
          v-for="item in trailers"
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
        singularCollectionName="trailer"
        collectionName="trailers"
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
      trailers: [],
    };
  },
  methods: {
    closeModal() {
      this.isModalOpen = false;
    },
    async reloadData() {
      const trailerCollection = await this.$store.dispatch('getTrailers');
      this.trailers = trailerCollection.map((trailer) => {
        return {
          id: trailer._id,
          name: trailer.name,
        };
      });
    },
    updateValue(value) {
      console.log('event: ', value);
      this.$emit('update:modelValue', value);
    },
  },
  async created() {
    const trailerCollection = await this.$store.state.data.trailers;
    this.trailers = trailerCollection.map((trailer) => {
      return {
        id: trailer._id,
        name: trailer.trailer_id,
      };
    });
  },
};

</script>
