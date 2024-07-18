<template>
  <div></div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
    };
  },
  mounted () {
    this.$store.dispatch('app/clearItems');
    this.$store.dispatch('auth/logout');
    window.location = `/?msg=You Have Been Logout&type=Danger`;
  }
};
</script>