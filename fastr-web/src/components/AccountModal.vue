<template>
  <div class="modal">
    <button @click="$emit('close')">Close</button>

    <AccountForm @submit="submit"/>
  </div>
</template>

<script>
import AccountForm from './forms/AccountForm.vue';

export default {
  components: {
    AccountForm,
  },
  methods: {
    submit() {
      // make an API call to create a new account
      // if it's successful, close the modal and refresh the list of accounts
      this.$emit('close');
      this.$emit('refresh');
    },
  },
};
</script>
