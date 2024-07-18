<template>
  <teleport to="body">
    <div v-if="isModalOpen"
         class="fixed top-0 left-0 w-full h-full flex items-center justify-center"
         style="background-color: rgba(0,0,0,.5); z-index: 3000">
      <div
          class="bg-white rounded-lg overflow-auto shadow-xl max-w-4xl m-6 sm:m-12 relative py-4">
        <div class="border-b px-4 py-2 flex justify-between items-center">
          <h3 class="text-lg leading-6 font-medium text-gray-900">{{
              recordContext === 'create'
                  ? 'Create'
                  : 'Update'
            }} {{
              singularCollectionName
            }}</h3>
          <div @click="closeModal" class="text-black close-modal cursor-pointer">
            <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18"
                 height="18" viewBox="0 0 18 18">
              <path
                  d="M9 7.586L14.293 2.293l1.414 1.414L10.414 9l5.293 5.293-1.414 1.414L9 10.414l-5.293 5.293-1.414-1.414L7.586 9 2.293 3.707l1.414-1.414L9 7.586z"></path>
            </svg>
          </div>
        </div>
        <DriverForm v-if="collectionName === 'drivers'"
                    :context="recordContext"
                    @closeModal="closeModal"
                    @reload="reloadData"
                    v-model="selectedRecord"/>
        <AccountForm v-if="collectionName === 'accounts'"
                     :context="recordContext"
                     @reload="reloadData"
                     @closeModal="closeModal"
                     v-model="selectedRecord"/>
        <TruckForm v-if="collectionName === 'trucks'"
                   :context="recordContext"
                   @reload="reloadData"
                   @closeModal="closeModal"
                   v-model="selectedRecord"/>
        <TrailerForm v-if="collectionName === 'trailers'"
                     :context="recordContext"
                     @reload="reloadData"
                     @closeModal="closeModal"
                     v-model="selectedRecord"/>
        <TripForm v-if="collectionName === 'trips'"
                  :context="recordContext"
                  @reload="reloadData"
                  @closeModal="closeModal"
                  v-model="selectedRecord"/>
      </div>
    </div>
  </teleport>
</template>

<script>
import DriverForm from '@/components/forms/DriverForm.vue';
import AccountForm from '@/components/forms/AccountForm.vue';
import TruckForm from '@/components/forms/TruckForm.vue';
import TrailerForm from '@/components/forms/TrailerForm.vue';
import TripForm from '@/components/forms/TripForm.vue';

export default {
  components: {
    DriverForm,
    AccountForm,
    TruckForm,
    TrailerForm,
    TripForm,
  },
  props: ['isModalOpen', 'recordContext', 'singularCollectionName', 'collectionName'],
  data() {
    return {
      selectedRecord: false,
    };
  },
  methods: {
    closeModal() {
      console.log('ping');
      this.$emit('closeModal');
    },
    reloadData() {
      this.$emit('reloadData');
    },
  },
};
</script>
