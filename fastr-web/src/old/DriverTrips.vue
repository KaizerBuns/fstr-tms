<template>
  <div class="p-20">
    <div class="text-black">----------------</div>
    <div class="text-black">Device Platform: {{ deviceInfo.platform }}</div>
    <div class="text-black">Device ID: {{ deviceId }}</div>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  data() {
    return {
      deviceId: '',
      deviceInfo: {},
      trucks: [],
      newAndroidDevice: false,
    };
  },
  async created() {
    this.trucks = await this.$store.dispatch('getTrucks');
    console.log('trucks: ', this.trucks);
    this.deviceInfo = await Device.getInfo();
    console.log('deviceInfo: ', this.deviceInfo);
    if (this.deviceInfo.platform === 'android') {
      console.log('-- android device detected');
      this.deviceId = await Device.getId();
      console.log('-- android deviceId: ', this.deviceId);
      const foundTruck = _.find(this.trucks, ['device_id', this.deviceId]) || false;
      console.log('-- foundTruck: ', foundTruck);
      if (!foundTruck) {
        //restrict this to dispatcher
        const role = this.$store.state.data.auth.role;
        if (role === 'dispatcher') {
          this.$router.push({ name: 'TruckOnboarding' });

        } else if (role === 'driver') {
          this.$router.push({ name: 'DriverOnboardingError' });
        }
      } else {
        this.$router.push({ name: 'TruckHome' });
        console.log('--driver logs in from truck');
      }
    } else if (this.deviceInfo.platform === 'web') {
      console.log('--driver logs in from web');
      this.$router.push({ name: 'DriverHome' });
    }
  },
};
</script>
