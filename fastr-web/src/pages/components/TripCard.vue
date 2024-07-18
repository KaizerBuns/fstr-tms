<template>
  <div
    class="justify-between rounded-xl bg-white shadow text-red-500 mb-4 border border-red-500 bg-white rounded-xl shadow-lg">
    <div v-wave @touchstart="event => event.target.focus()" class="p-2">
      <div class="flashing-text text-red-500">
        {{ trip.status }}
      </div>
      <div class="flex flex-row">
        <div class="mx-auto my-2">
          Trip {{ trip.tripNumber }}
        </div>
      </div>
      <div class="flex flex-row p-1 justify-center md:mx-auto">
        <TripCardLabel icon="fa-circle-user" :label="trip.driver" />
        <TripCardLabel icon="fa-calendar" :label="`${formatDate(trip.startDate)} to ${formatDate(trip.endDate)}`" />
      </div>
      <div class="flex flex-row p-1 justify-center md:mx-auto">
        <TripCardLabel icon="truck-fast" :label="trip.truck" />
        <TripCardLabel icon="fa-trailer" :label="trip.trailer" />
      </div>
      <div v-for="(leg, legIndex) in trip.legs" :key="legIndex">
        <div class="flex flex-row justify-center mt-2">
          {{ leg.broker }}
        </div>
        <div class="flex flex-row justify-center mt-2">
          <div class="text-sm text-black flex flex-row items-start w-1/2">
            <div class="font-mono font-semibold">
              {{ leg.pickupLocation }}
            </div>
            <div class="ml-2">
              <sup class="text-red-500 text-xs block mb-[-0.5rem]">+{{
                formatDate(leg.pickupDate)
              }}</sup>
            </div>
          </div>
          <div class="text-2xl w-8 mx-2 text-black arrow">
          </div>
          <div class="text-sm flex flex-row text-black items-start ml-2 w-1/2">
            <div class="font-mono font-semibold">
              {{ leg.deliveryLocation }}
            </div>
            <div class="ml-2">
              <sup class="text-red-500 text-xs block mb-[-0.5rem]">+{{
                formatDate(leg.deliveryDate)
              }}</sup>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-row border-t border-red-500" id="action-buttons">
      <div v-wave @touchstart="event => event.target.focus()" @click="openTrip(trip.tripNumber)"
        class="h-16 flex items-center justify-center flex-grow text-red-500 cursor-pointer" style="flex: 1;">
        <font-awesome-icon :icon="['fas', 'fa-info-circle']" size="xl" />
      </div>
      <div class="bg-red-500" style="height: 1px"></div>
      <div v-wave @touchstart="event => event.target.focus()"
        class="h-16 flex items-center justify-center flex-grow text-red-500 cursor-pointer" style="flex: 1;">
        <font-awesome-icon :icon="['fas', 'fa-crosshairs']" size="xl" />
      </div>
      <div class="bg-red-500" style="height: 1px"></div>
      <div v-wave @touchstart="event => event.target.focus()"
        class="h-16 flex items-center justify-center flex-grow text-red-500 cursor-pointer" style="flex: 1;">
        <font-awesome-icon :icon="['fas', 'fa-phone']" size="xl" />
      </div>
    </div>
  </div>
</template>

<script>
import TripCardLabel from '@/pages/components/TripCardLabel.vue';
import { FormatDate } from '@/libs/common';

export default {
  props: ['trip'],
  components: {
    TripCardLabel
  },
  data() {
    return {
      legs: [
        {
          broker: 'IWAY',
          rate: 3250,
          pay: 2750,
          miles: null,
          pro: 'CAD',
          pickup: 'MISSISSAUGA, ON',
          delivery: 'LAUREL, MD',
          origin: 'JACK',
          destination: 'IWAY',
          startTimeBehind: '2h33m',
          startTimeAhead: '',
          endTimeBehind: '2h43m',
          endTimeAhead: '',
          originState: 'ON',
          destinationState: 'MD',
          checkpoint: true,
        },
        {
          'broker': 'TRAFFIC TECH',
          'rate': 3000,
          'pay': 2750,
          'miles': null,
          'pro': 'CAD',
          'pickup': 'WESTMINSTER, MD',
          'delivery': 'BRAMPTON, OAKVILLE, ON',
          origin: 'IWAY',
          destination: 'JACK',
          startTimeBehind: '',
          startTimeAhead: '3m',
          endTimeBehind: '',
          endTimeAhead: '',
          originState: 'MD',
          destinationState: 'ON',
        },
      ],
    };
  },
  methods: {
    openTrip(tripId) {
      this.$router.push({ path: `/trip/${tripId}/details` });
    },
    formatDate(value) {
      return FormatDate(value);
    }
  }
};
</script>


<style scoped>
.status-light-green {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: limegreen;
}

.status-light-red {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: red;
}

.arrow {
  top: 8px;
  border-top: 1px solid gray;
  position: relative;
}

.arrow::after {
  content: "";
  position: absolute;
  top: -5px;
  right: -5px;
  border: solid transparent;
  border-width: 5px;
  border-left-color: gray;
}

.flashing-text {
  opacity: 0;
  animation: fadeInOut 2s infinite ease-in-out;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
</style>
