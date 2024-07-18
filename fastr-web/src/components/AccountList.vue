<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <button @click="openModal" class="p-2 bg-red-500 text-white">Create Account</button>

          <teleport to="body">
            <div v-if="isModalOpen"
                 class="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50"
                 style="background-color: rgba(0,0,0,.5);">
              <div
                  class="bg-white rounded-lg overflow-auto shadow-xl max-w-4xl m-6 sm:m-12 relative py-4">
                <div class="border-b px-4 py-2 flex justify-between items-center">
                  <h3 class="text-lg leading-6 font-medium text-gray-900">Create Account</h3>
                  <button @click="closeModal" class="text-black close-modal cursor-pointer z-50">
                    <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg"
                         width="18" height="18" viewBox="0 0 18 18">
                      <path
                          d="M9 7.586L14.293 2.293l1.414 1.414L10.414 9l5.293 5.293-1.414 1.414L9 10.414l-5.293 5.293-1.414-1.414L7.586 9 2.293 3.707l1.414-1.414L9 7.586z"></path>
                    </svg>
                  </button>
                </div>

                <!-- AccountForm Component -->
                <AccountForm @close-modal="closeModal"/>

              </div>
            </div>
          </teleport>
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
            <tr>
              <th scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Address
              </th>
              <th scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Telephone
              </th>
              <th scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Fax
              </th>
            </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="(account, index) in accounts" :key="index">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ account.name }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ account.type }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ account.address }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ account.telephone }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ account.fax }}</div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AccountForm from './forms/AccountForm.vue';

export default {
  components: {
    AccountForm,
  },
  data() {
    return {
      isModalOpen: false,
      accounts: [
        {
          'name': 'Jackpot Logistics Inc.',
          'type': 'carrier',
          'role': 'admin',
          'address': '40 Saint Regis Cres, North York, ON, M3J 1Y5',
          'telephone': '647-499-6699',
          'fax': '844-777-2121',
        },
      ],
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
};
</script>


<!--<template>-->
<!--  <div class="container mx-auto px-4">-->
<!--    <button @click="showModal = true" class="...">Add new Account</button>-->

<!--    <AccountModal v-if="showModal" @close="showModal = false" @refresh="getAccounts"/>-->

<!--    <table class="table-auto w-full">-->
<!--      <thead>-->
<!--      <tr>-->
<!--        <th class="px-4 py-2">Name</th>-->
<!--        <th class="px-4 py-2">Type</th>-->
<!--        <th class="px-4 py-2">Address</th>-->
<!--        <th class="px-4 py-2">Telephone</th>-->
<!--        <th class="px-4 py-2">Fax</th>-->
<!--      </tr>-->
<!--      </thead>-->
<!--      <tbody>-->
<!--      <tr v-for="account in accounts" :key="account._id">-->
<!--        <td class="border px-4 py-2">{{ account.name }}</td>-->
<!--        <td class="border px-4 py-2">{{ account.type }}</td>-->
<!--        <td class="border px-4 py-2">{{ account.address }}</td>-->
<!--        <td class="border px-4 py-2">{{ account.telephone }}</td>-->
<!--        <td class="border px-4 py-2">{{ account.fax }}</td>-->
<!--      </tr>-->
<!--      </tbody>-->
<!--    </table>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import AccountModal from './AccountModal.vue';-->

<!--import axios from 'axios';-->

<!--export default {-->
<!--  components: {-->
<!--    AccountModal,-->
<!--  },-->
<!--  data() {-->
<!--    return {-->
<!--      showModal: false,-->
<!--      accounts: []-->
<!--    };-->
<!--  },-->
<!--  async mounted() {-->
<!--    try {-->
<!--      const response = await axios.get('http://localhost:3000/accounts');-->
<!--      this.accounts = response.data;-->
<!--    } catch (error) {-->
<!--      console.error(error);-->
<!--    }-->
<!--  }-->
<!--};-->
<!--</script>-->

<!--<style scoped>-->
<!--/* Add your styles here */-->
<!--</style>-->
