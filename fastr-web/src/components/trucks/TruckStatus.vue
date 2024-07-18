<template>

  <div class="text-black"><div class="flex flex-wrap">
    <div class="w-1/2">
      <p class="flex justify-left p-1 text-xs">Trip #: {{ trip.trip_number}}</p>
      <p class="flex justify-left p-1 text-xs">Current Leg: {{ trip.currentLeg }}</p>
      <p class="flex justify-left p-1 text-xs">Driver: {{ trip.driver }}</p>
      <p class="flex justify-left p-1 text-xs">Truck: {{ trip.truck }}</p>
    </div>
    <div class="w-1/2">
      <p class="flex justify-left p-1 text-xs">Trailer: {{ trip.trailer }}</p>
      <p class="flex justify-left p-1 text-xs">Broker: {{ trip.broker }}</p>
      <p class="flex justify-left p-1 text-xs">Location: {{ trip.location }}</p>
      <p class="flex justify-left p-1 text-xs">Start Date: {{ trip.start_date?.split('T')[0] }}</p>
    </div>
  </div>

    <div class="justify-left p-2" v-for="(leg, index) in trip.legs" :key="index">
      <p class=" flex justify-left text-xs">Leg {{index + 1 }}</p>
      <p class=" flex justify-left text-xs">----- Broker: {{ leg.broker }}</p>
      <p class=" flex justify-left text-xs">----- rate: {{ leg.rate }}</p>
      <p class=" flex justify-left text-xs">----- miles: {{ leg.miles }}</p>
      <p class=" flex justify-left text-xs">----- pro: {{ leg.pro }}</p>
      <p class=" flex justify-left text-xs">----- pickup: {{ leg.pickup }}</p>
      <p class=" flex justify-left text-xs">----- delivery: {{ leg.delivery }}</p>

    </div>
  </div>
</template>

<script>

export default {
  props: ['trip'],
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>
