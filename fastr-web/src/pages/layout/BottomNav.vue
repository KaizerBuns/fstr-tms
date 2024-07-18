<template>
  <nav class="fixed bottom-0 inset-x-0 bg-red-600 flex flex-col justify-between text-sm text-white uppercase font-mono">
    <div class="max-w-screen-2xl mx-auto w-full">
      <div class="flex flex-row w-full mx-auto">
        <div class="w-full text-center p-2">
          <a href="/dashboard">
            <font-awesome-icon :icon="['fas', 'road']" size="xl" />
            <div class="pt-4">Dashboard</div>
          </a>
        </div>
        <div class="w-full text-center p-2">
          <a href="/trip/new">
            <font-awesome-icon :icon="['fas', 'truck-fast']" size="xl" />
            <div class="pt-4">New Trip</div>
          </a>
        </div>
        <div class="w-full text-center p-2">
          <a href="/logout">
            <font-awesome-icon :icon="['fas', 'right-from-bracket']" size="xl" />
            <div class="pt-4">Logout</div>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  data() {
    return {}
  },
  computed: {

  },
  methods: {
    async logout() {
      await this.$store.dispatch('logout');
      window.location.href = '/';
    },
  },
};

</script>

