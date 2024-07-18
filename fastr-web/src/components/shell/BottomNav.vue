<template>

  <nav
      class="fixed bottom-0 inset-x-0 bg-red-600 flex flex-col justify-between text-sm text-white uppercase font-mono">
    <div class="max-w-screen-2xl mx-auto w-full">
      <div class="flex flex-row w-full mx-auto" v-if="userRole ==='dispatcher'">
        <div class="w-full text-center p-2"
             v-for="(view, key) in dispatcherViews" :key="key" @click="clickPage(key)">
          <a>
            <font-awesome-icon :icon="['fas', 'road']" size="xl" v-if="key === 'trip'"/>
            <font-awesome-icon :icon="['fas', 'book']" size="xl" v-if="key === 'data'"/>
            <font-awesome-icon :icon="['fas', 'right-from-bracket']" size="xl"
                               v-if="key === 'logout'"/>
            <div class="pt-4">{{ view }}</div>
          </a>
        </div>
      </div>
      <div class="flex flex-row w-full mx-auto" v-if="userRole ==='driver'">
        <div class="w-full text-center p-2"
             v-for="(view, key) in driverViews" :key="key" @click="clickPage(key)">
          <a>
            <font-awesome-icon :icon="['fas', 'road']" size="xl" v-if="key === 'trip'"/>
            <font-awesome-icon :icon="['fas', 'right-from-bracket']" size="xl"
                               v-if="key === 'logout'"/>
            <div class="pt-4">{{ view }}</div>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  data() {
    return {
      views: this.$store.state?.data?.views ?? [],
      dispatcherViews: {
        trip: 'DriverTrips',
        data: 'DispatchCollections',
        logout: 'logout',
      },
      driverViews: {
        trip: 'DriverTrips',
        logout: 'Logout',
      },
    };
  },
  computed: {
    getCurrentPage() {
      if (this.$route.name !== undefined) {
        return this.$route.name.toLowerCase();
      }
      return 'home';
    },
    userRole() {
      return this.$store.state.data?.auth?.role;
    },
  },
  created() {
    this.views.push('logout');
  },
  methods: {
    clickPage(page) {
      if (page === 'logout') this.logout();
      if (this.userRole === 'driver') {
        this.$router.push({ name: this.driverViews[page] });
      } else if (this.userRole === 'dispatcher') {
        this.$router.push({ name: this.dispatcherViews[page] });
      }
    },
    async logout() {
      await this.$store.dispatch('logout');
      window.location.href = '/';
    },
  },
};

</script>

