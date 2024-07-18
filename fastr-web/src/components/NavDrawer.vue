<template>
  <div :data-is-open="isOpen ? true : undefined">
    <el-menu default-active="2" class="el-menu-vertical-demo">
      <el-menu-item index="1" @click="closeDrawer">
        <span>Back</span>
      </el-menu-item>
      <el-menu-item index="2" @click="navigateHome">
        <span>Home</span>
      </el-menu-item>
      <el-menu-item index="3" @click="logout">
        <span>Logout</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { Device } from '@capacitor/device';

export default {
  props: ['isOpen'],
  computed: {
    userRole() {
      return this.$store.state.data?.auth?.role;
    },
  },
  methods: {
    closeDrawer() {
      this.$emit('close');
    },
    async navigateHome() {
      const deviceInfo = await Device.getInfo();
      const { platform } = deviceInfo;
      console.log('platform: ', platform);
      const role = this.$store.state.data.auth.role;
      if (platform === 'web') {
        if (role === 'dispatcher') {
          await this.$router.push({ name: 'DispatchTrips' });
        } else if (role === 'driver') {
          await this.$router.push({ name: 'DriverHome' });
        }
      } else if (platform === 'android') { // truck tablets only
        if (role === 'dispatcher') {
          await this.$router.push({ name: 'ConfigureTruckTablet' });
        }
        if (role === 'driver') {
          await this.$router.push({ name: 'TruckHome' });
        }
      }
      this.closeDrawer();
    },
    async logout() {
      console.log('ping');
      await this.$store.dispatch('logout');
      this.$router.push({ name: 'AppLogin' });
    },
  },
};
</script>

<style scoped>
div {
  position: fixed;
  top: 0;
  left: 0;
  width: 60%;
  height: 100vh;
  z-index: 9999;
  transition: transform 0.3s ease;
  transform: translateX(0);
}

div:not([data-is-open]) {
  transform: translateX(-100%);
}
</style>
