<template>
  <div class="flex justify-between rounded-xl bg-white shadow text-red-500 m-2 border border-red-500">
    <div v-wave @touchstart="event => event.target.focus()"
      class="flex flex-col flex-grow p-2 bg-white rounded-xl shadow-lg">
      <div style="position: fixed;" class="text-red-500">
        <div class="flashing-text">
          <span>Active</span>
        </div>
      </div>
      <div class="flex flex-row justify-center">
        <div>
          Trip {{ trip.trip_number }}
        </div>
      </div>

      <div class="flex flex-row p-1  justify-center">
        <div class="w-1/2">
          <div class="flex flex-row p-1  justify-center">
            <font-awesome-icon :icon="['fas', 'fa-circle-user']" size="sm" />
            <label class="block text-gray-700 text-xs pl-2">
              {{ trip.driver }}
            </label>
            <div class="status-light-green justify-center h-full items-center mt-1 mx-1"></div>
          </div>
        </div>
        <div class="w-1/2">
          <div class="flex flex-row p-1  justify-center">
            <font-awesome-icon :icon="['fas', 'fa-calendar']" size="sm" />
            <label class="block text-gray-700 text-xs pl-2 justify-center">
              April 12 at 10am
            </label>
          </div>

        </div>
      </div>

      <div class="flex flex-row p-1  justify-center">
        <div class="w-1/2">
          <div class="flex flex-row p-1  justify-center">
            <font-awesome-icon :icon="['fas', 'truck-fast']" size="sm" />
            <label class="block text-gray-700 text-xs pl-2">
              {{ truck.name ?? '' }}
            </label>
            <div class="status-light-green justify-center h-full items-center mt-1 mx-1"></div>
          </div>
        </div>
        <div class="w-1/2">
          <div class="flex flex-row p-1  justify-center">
            <font-awesome-icon :icon="['fas', 'fa-trailer']" size="sm" />
            <label class="block text-gray-700 text-xs pl-2">
              {{ trip.trailer }}
            </label>
            <div class="status-light-green justify-center h-full items-center mt-1 mx-1"></div>
          </div>
        </div>
      </div>
      <div v-for="(leg, legIndex) in trip.legs" :key="legIndex">
        <div class="flex flex-row justify-center mt-4">
          <div class="text-sm text-black flex flex-row items-start">
            <div class="font-mono font-semibold">
              {{ leg.origin }}
            </div>
            <div class="ml-2">
              <sup v-if="leg.startTimeBehind" class="text-red-500 text-xs block mb-[-0.5rem]">+{{
                leg.startTimeBehind
              }}</sup>
              <sup v-else class="text-green-500 text-xs block mb-[-0.5rem]">-{{
                leg.startTimeAhead
              }}</sup>
              <sub class="text-xs block mt-[-0.5rem]">{{ leg.originState }}</sub>
            </div>
          </div>
          <div v-if="leg.checkpoint" class="text-2xl w-8 mx-2 text-black arrow">
          </div>
          <font-awesome-icon class="pt-1 text-gray-700" v-if="leg.checkpoint" :icon="['fas', 'fa-flag-checkered']"
            size="md" />
          <div class="text-2xl w-8 mx-2 text-black arrow">
          </div>
          <div class="text-sm flex flex-row text-black items-start ml-2">
            <div class="font-mono font-semibold">
              {{ leg.destination }}
            </div>
            <div class="ml-2">
              <sup v-if="leg.endTimeBehind" class="text-red-500 text-xs block mb-[-0.5rem]">+{{
                leg.endTimeBehind
              }}</sup>
              <sup v-else class="text-green-500 text-xs block mb-[-0.5rem]">-{{
                leg.endTimeAhead
              }}</sup>
              <sub class="text-xs block mt-[-0.5rem]">{{ leg.destinationState }}</sub>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-red-500" style="width: 1px"></div>
    <div class="w-12 flex flex-col  rounded-xl " id="action-buttons">
      <div v-wave @touchstart="event => event.target.focus()" @click="openTrip"
        class="h-full flex items-center justify-center flex-grow text-red-500" style="flex: 1;">
        <font-awesome-icon :icon="['fas', 'fa-info-circle']" size="xl" />
      </div>
      <div class="bg-red-500" style="height: 1px"></div>
      <div v-wave @touchstart="event => event.target.focus()"
        class="h-full flex items-center justify-center flex-grow text-red-500" style="flex: 1;">
        <font-awesome-icon :icon="['fas', 'fa-crosshairs']" size="xl" />
      </div>
      <div class="bg-red-500" style="height: 1px"></div>
      <div v-wave @touchstart="event => event.target.focus()"
        class="h-full flex items-center justify-center flex-grow text-red-500" style="flex: 1;">
        <font-awesome-icon :icon="['fas', 'fa-phone']" size="xl" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['trip', 'active'],
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
      truck: {},
    };
  },
  methods: {
    openTrip() {
      this.$emit('openTrip');
    },
  },
  async created() {
    this.truck = await this.$store.dispatch('getTruckById', { id: this.trip.truck });
  },
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
