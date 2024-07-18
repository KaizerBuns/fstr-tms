<template>
  <div class="w-full lg:w-1/2 lg:mx-auto">
    <div v-for="item in trips">
      <TripCard :trip="item" />
    </div>
  </div>
</template>

<script>
import TripCard from '@/pages/components/TripCard.vue';
import Trip from '@/models/trip';
export default {
  components: {
    TripCard
  },
  data() {
    return {
      trips: []
    };
  },
  mounted() {
    new Trip().list().then(res => {
      this.trips = res.data;
    })
  }
};
</script>