<template>
  <div class="bg-gray-50 min-h-screen flex items-center justify-center md:h-96">
    <div class="p-20 md:rounded-lg md:border md:border-red-500">
      <div class="max-w-md w-full">
        <div>
          <span>
            <img class="mx-auto h-4 w-auto mb-4" src="/images/fastr-with.png" alt="Your Logo">
          </span>
          <span>
            <img class="mx-auto h-16 w-auto" src="/images/jackpot-logo.png" alt="Your Logo">
          </span>

          <h2 class="mt-6 text-center md:text-3xl font-thin text-gray-900 font-sans">
            Sign in to your account!
          </h2>
        </div>
        <form class="mt-8 space-y-6 " @submit.prevent="submitForm">
          <input type="hidden" name="remember" value="true">
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="username" class="sr-only">Username</label>
              <input id="username" name="username" required v-model="username"
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                placeholder="username">
            </div>
            <div>
              <label for="password" class="sr-only">Password</label>
              <input id="password" name="password" type="password" autocomplete="current-password" required
                v-model="password"
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                placeholder="Password">
            </div>
          </div>

          <div class="flex flex-row items-center">
            <input id="remember_me" name="remember_me" type="checkbox"
              class="w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded">
            <label for="remember_me" class="ml-2 block text-xs text-thin text-gray-700">
              Remember me
            </label>
          </div>

          <div class="flex flex-row text-sm">
            <a href="#" class="text-sm text-red-600 hover:text-red-500">
              Forgot your password?
            </a>
          </div>

          <div>
            <button type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import { Device } from '@capacitor/device';
import { Geolocation } from '@capacitor/geolocation';

import User from '@/models/user';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async submitForm() {

      const deviceInfo = await Device.getInfo();
      const user = new User();
      user.authLogin(this.username, this.password).then((res) => {
        if (res.data.jwt) {
          let userInfo = res.data;
          userInfo.deviceInfo = deviceInfo;
          this.$store.dispatch("auth/authorized", userInfo.jwt);

          console.log('UserInfo:', userInfo);
          this.$store.dispatch("auth/user", userInfo);
          this.$router.push({ name: 'Dashboard' }).catch(() => { });
        }
      })

      /*
      if (success) {
        const deviceInfo = await Device.getInfo();
        const { platform } = deviceInfo;
        const role = this.$store.state.data.auth.role;
        console.log('platform: ', platform);
        console.log('role: ', role);
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
        */
    }
  }
};
</script>
