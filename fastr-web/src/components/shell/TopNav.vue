<template>
  <div class="relative md:flex">
    <div v-if="showSearchModal" style="width: 100vw; height: 100vh;"
         class="fixed z-10 w-full h-full inset-0 overflow-y-auto" aria-labelledby="modal-title"
         role="dialog" aria-modal="true">
      <div
          class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 w-full h-full ">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
             aria-hidden="true"></div>
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true">&#8203;</span>
        <div
            class="inline-block align-middle w-full h-full bg-white text-left overflow-hidden shadow-xl transform transition-all">
          <div class="h-full px-4 pt-5 pb-4 sm:p-6 sm:pb-4 text-red-500">
            <button @click="closeSearchModal"
                    class="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div
        class="text-gray-800 absolute inset-y-0 left-0 transform transition duration-200 ease-in-ou p-10t"
        :class="openSearch ? 'translate-x-0' : '-translate-x-full'">
      <!-- Navigation -->
      <nav>
        <a href="#"
           class="block py-2.5 px-4 rounded transition duration-200 hover:bg-red-500 hover:text-white"
           @click="logout">Logout</a>
        <!-- Add more links here -->
      </nav>
    </div>

    <NavDrawer :isOpen="openDrawer" @close="openDrawer = false"
               style="height: 100vh; background-color: #fff"/>

    <!-- Content area -->
    <div class="flex-1 text-2xl font-bold sticky">
      <!-- Top bar -->
      <header
          class="fixed w-full flex flex-row justify-between items-center bg-gray-50 px-6 py-4 shadow-md">

        <div @click="toggleDrawer">
          <font-awesome-icon :icon="['fas', 'bars']" class="text-red-500"/>
        </div>
        <div v-wave @touchstart="event => event.target.focus() && openSearchModal"
             @click="openSearchModal"
             class="flex text-red-500 font-thin text-md items-center border border-red-500 m-1 px-2 rounded-lg w-48">
          <font-awesome-icon :icon="['fas', 'search']" class="text-red-500 text-sm"/>
          <div class="text-red-500 font-thin text-md pl-2">Search</div>
        </div>
        <div class="flex items-center space-x-3">
          <a href="/dispatch/trips"><img src="/images/jackpot-logo.png" class="h-8" alt="Logo"></a>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
import NavDrawer from '@/components/NavDrawer.vue';

export default {
  components: { NavDrawer },
  data() {
    return {
      openDrawer: false,
      openSearch: false,
      showSearchModal: false,
    };
  },
  methods: {
    toggleDrawer() {
      console.log('ping');
      this.openDrawer = !this.openDrawer;
    },
    openSearchModal() {
      this.showSearchModal = true;
    },
    closeSearchModal() {
      this.showSearchModal = false;
    },
  },
};
</script>
