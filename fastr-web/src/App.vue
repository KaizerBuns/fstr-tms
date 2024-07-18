<template>
  <div>
      <router-view/>
  </div>
</template>

<script>
import TopNav from '@/components/shell/TopNav.vue';
import BottomNav from '@/components/shell/BottomNav.vue';

export default {
  name: 'App',
  components: {
    TopNav,
    BottomNav,
  },
  data() {
    return {};
  },
  computed: {
    authenticated() {
      return this.$store.getters['auth/isAuthenticated'] || false;
    },
  },
  created() {
    //this.$store.commit('initialiseVars');
  },
};
</script>
