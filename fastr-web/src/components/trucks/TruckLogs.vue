<template>
  <div class="text-black w-full">
    <div v-for="(log, index) in logs" :key="index" class="m-4 p-4 border border-gray-300 rounded-lg text-sm">
      <p class="text-gray-600 text-xs"><strong>{{ log.timestamp }}</strong></p>
      <p class="text-xs">{{ log.event }}</p>
      <p>---</p>
      <p class="text-xs" v-if="log.additionalInfo">{{ log.additionalInfo }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logs: [
        {
          timestamp: '2022-04-11 08:00:00',
          event: 'Trip #6335 started. Current Leg: 1, Driver: VALENTIN, Truck: TRK107, Trailer: V53307, Broker: IWAY, Location: MISSISSAUGA, ON.',
          additionalInfo: '',
        },
        {
          timestamp: '2022-04-11 10:00:00',
          event: 'Driver VALENTIN arrived at pickup location: MISSISSAUGA, ON.',
          additionalInfo: 'Driver reported no issues at the checkpoint.',
        },
        {
          timestamp: '2022-04-12 14:00:00',
          event: 'Driver VALENTIN arrived at delivery location: LAUREL, MD.',
          additionalInfo: '',
        },
        {
          timestamp: '2022-04-12 15:00:00',
          event: 'Maintenance performed on Truck TRK107. Oil change and tire pressure checked.',
          additionalInfo: '',
        },
        {
          timestamp: '2022-04-13 09:00:00',
          event: 'Driver VALENTIN started Leg 2. Broker: TRAFFIC TECH, Pickup location: WESTMINSTER, MD.',
          additionalInfo: '',
        },
        {
          timestamp: '2022-04-13 12:00:00',
          event: 'Dispatcher called driver VALENTIN to confirm schedule.',
          additionalInfo: '',
        },
        {
          timestamp: '2022-04-14 10:00:00',
          event: 'Driver VALENTIN arrived at delivery location: BRAMPTON, OAKVILLE, ON.',
          additionalInfo: 'Driver reported a toll of $20 at a checkpoint.',
        },
      ]
    }
  },
}
</script>
