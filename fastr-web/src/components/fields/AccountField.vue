<template>
  <el-form-item :label="fieldLabel">
    <el-select
        id="account" :value="modelValue" :placeholder="modelValue.name ?? 'Select one'"
        @change="updateValue">
      <el-option class="bg-red-500">
      <span class="text-white" @click="isModalOpen = true">
        + Create new account
      </span>
      </el-option>
      <el-option
          v-for="item in accounts"
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
        singularCollectionName="account"
        collectionName="accounts"
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
      accounts: [],
    };
  },
  methods: {
    closeModal() {
      this.isModalOpen = false;
    },
    async reloadData() {
      const accountCollection = await this.$store.dispatch('getAccounts');
      this.accounts = accountCollection.map((account) => {
        return {
          id: account._id,
          name: account.name,
        };
      });
    },
    updateValue(value) {
      console.log('event: ', value);
      this.$emit('update:modelValue', value);
    },
  },
  async created() {
    const accountCollection = await this.$store.state.data.accounts;
    this.accounts = accountCollection.map((account) => {
      return {
        id: account._id,
        name: account.name,
      };
    });
  },
};

</script>
