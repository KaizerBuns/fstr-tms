<template>
  <div class="w-full">
    <!-- Call Truck Device Card -->
    <div
        class="m-4 p-4 border border-gray-300 text-red-500 rounded-lg text-md flex justify-between items-center"
        @click="callTruckDevice">
      <!-- Left part with icon and text -->
      <div class="flex items-center">
        <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M2 12a10 10 0 1020 0 10 10 0 00-20 0z"></path>
        </svg>
        Truck's Device
      </div>
      <!-- Right part with additional icons -->
      <div class="flex items-center">
        <svg class="h-6 w-6 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path
              d="M15 3C16.5315 3.17014 17.9097 3.91107 19 5C20.0903 6.08893 20.8279 7.46869 21 9M14.5 6.5C15.2372 6.64382 15.9689 6.96892 16.5 7.5C17.0311 8.03108 17.3562 8.76284 17.5 9.5M8.20049 15.799C1.3025 8.90022 2.28338 5.74115 3.01055 4.72316C3.10396 4.55862 5.40647 1.11188 7.87459 3.13407C14.0008 8.17945 6.5 8 11.3894 12.6113C16.2788 17.2226 15.8214 9.99995 20.8659 16.1249C22.8882 18.594 19.4413 20.8964 19.2778 20.9888C18.2598 21.717 15.0995 22.6978 8.20049 15.799Z"
              stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path
              d="M6 8h12v1H6zm0 4h9v-1H6zm16-6.25v8.5A2.753 2.753 0 0 1 19.25 17h-7.087L6 21.481V17H4.75A2.753 2.753 0 0 1 2 14.25v-8.5A2.753 2.753 0 0 1 4.75 3h14.5A2.753 2.753 0 0 1 22 5.75zm-1 0A1.752 1.752 0 0 0 19.25 4H4.75A1.752 1.752 0 0 0 3 5.75v8.5A1.752 1.752 0 0 0 4.75 16H7v3.519L11.837 16h7.413A1.752 1.752 0 0 0 21 14.25z"/>
        </svg>
      </div>
    </div>

    <!-- Call Driver's Personal Phone Card -->
    <div
        class="m-4 p-4 border border-gray-300 text-red-500 rounded-lg text-md flex justify-between items-center"
        @click="callTruckDevice">
      <!-- Left part with icon and text -->
      <div class="flex items-center">
        <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path
              d="M4 21V19.5C4 16.4624 6.46243 14 9.5 14H14.5C17.5376 14 20 16.4624 20 19.5V21M8 21V18.5M16 21V18.3333M8.5 6.5C10.514 8.22631 13.486 8.22631 15.5 6.5M16 7V4.92755L17.4657 2.78205C17.6925 2.45018 17.4548 2 17.0529 2H6.94712C6.5452 2 6.30755 2.45018 6.53427 2.78205L8 4.92755V7M16 8C16 10.2091 14.2091 12 12 12C9.79086 12 8 10.2091 8 8V5.5H16V8Z"
              stroke-linecap="round" stroke-linejoin="round" stroke-width="1.4"/>
        </svg>
        {{ trip.driver ?? 'Driver' }}
      </div>
      <!-- Right part with additional icons -->
      <div class="flex items-center">
        <svg class="h-6 w-6 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path
              d="M15 3C16.5315 3.17014 17.9097 3.91107 19 5C20.0903 6.08893 20.8279 7.46869 21 9M14.5 6.5C15.2372 6.64382 15.9689 6.96892 16.5 7.5C17.0311 8.03108 17.3562 8.76284 17.5 9.5M8.20049 15.799C1.3025 8.90022 2.28338 5.74115 3.01055 4.72316C3.10396 4.55862 5.40647 1.11188 7.87459 3.13407C14.0008 8.17945 6.5 8 11.3894 12.6113C16.2788 17.2226 15.8214 9.99995 20.8659 16.1249C22.8882 18.594 19.4413 20.8964 19.2778 20.9888C18.2598 21.717 15.0995 22.6978 8.20049 15.799Z"
              stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path
              d="M6 8h12v1H6zm0 4h9v-1H6zm16-6.25v8.5A2.753 2.753 0 0 1 19.25 17h-7.087L6 21.481V17H4.75A2.753 2.753 0 0 1 2 14.25v-8.5A2.753 2.753 0 0 1 4.75 3h14.5A2.753 2.753 0 0 1 22 5.75zm-1 0A1.752 1.752 0 0 0 19.25 4H4.75A1.752 1.752 0 0 0 3 5.75v8.5A1.752 1.752 0 0 0 4.75 16H7v3.519L11.837 16h7.413A1.752 1.752 0 0 0 21 14.25z"/>
        </svg>
      </div>
    </div>

    <!-- Contact Broker Card -->
    <div
        class="m-4 p-4 border border-gray-300 text-red-500 rounded-lg text-md flex justify-between items-center"
        @click="callTruckDevice">
      <!-- Left part with icon and text -->
      <div class="flex items-center">
        <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 50 50"
             stroke="currentColor">
          <path
              d="M25 3C24.8405 3 24.680156 3.0372812 24.535156 3.1132812L3.5351562 14.113281C3.2061563 14.286281 3 14.628 3 15L3 17C3 17.552 3.448 18 4 18L46 18C46.553 18 47 17.552 47 17L47 15C47 14.628 46.794844 14.286281 46.464844 14.113281L25.464844 3.1132812C25.319844 3.0372812 25.1595 3 25 3 z M 25 9C26.656 9 28 10.343 28 12C28 13.657 26.656 15 25 15C23.343 15 22 13.657 22 12C22 10.343 23.343 9 25 9 z M 8 20C7.448 20 7 20.448 7 21L7 35L13 35L13 21C13 20.448 12.552 20 12 20L8 20 z M 18 20C17.448 20 17 20.448 17 21L17 35L23 35L23 21C23 20.448 22.552 20 22 20L18 20 z M 28 20C27.448 20 27 20.448 27 21L27 35L32.853516 35C31.417516 33.807 30.5 32.009 30.5 30C30.5 27.925 31.481 26.077719 33 24.886719L33 21C33 20.448 32.552 20 32 20L28 20 z M 38 20C37.448 20 37 20.448 37 21L37 23.5C39.7 23.5 42.019 25.154906 43 27.503906L43 21C43 20.448 42.552 20 42 20L38 20 z M 37 25.5C34.519 25.5 32.5 27.519 32.5 30C32.5 32.481 34.519 34.5 37 34.5C39.481 34.5 41.5 32.481 41.5 30C41.5 27.519 39.481 25.5 37 25.5 z M 5 37C4.448 37 4 37.447 4 38L4 40L3 40C2.448 40 2 40.447 2 41L2 44C2 44.553 2.448 45 3 45L26 45L26 42.558594C26 40.351594 26.967422 38.381 28.482422 37L5 37 z M 33.558594 37C30.492594 37 28 39.492594 28 42.558594L28 47C28 47.553 28.447 48 29 48L45 48C45.553 48 46 47.553 46 47L46 42.558594C46 39.492594 43.506406 37 40.441406 37L33.558594 37 z"/>
        </svg>
        {{ trip.broker ?? 'Broker' }}
      </div>
      <!-- Right part with additional icons -->
      <div class="flex items-center">
        <svg class="h-6 w-6 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path
              d="M15 3C16.5315 3.17014 17.9097 3.91107 19 5C20.0903 6.08893 20.8279 7.46869 21 9M14.5 6.5C15.2372 6.64382 15.9689 6.96892 16.5 7.5C17.0311 8.03108 17.3562 8.76284 17.5 9.5M8.20049 15.799C1.3025 8.90022 2.28338 5.74115 3.01055 4.72316C3.10396 4.55862 5.40647 1.11188 7.87459 3.13407C14.0008 8.17945 6.5 8 11.3894 12.6113C16.2788 17.2226 15.8214 9.99995 20.8659 16.1249C22.8882 18.594 19.4413 20.8964 19.2778 20.9888C18.2598 21.717 15.0995 22.6978 8.20049 15.799Z"
              stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path
              d="M6 8h12v1H6zm0 4h9v-1H6zm16-6.25v8.5A2.753 2.753 0 0 1 19.25 17h-7.087L6 21.481V17H4.75A2.753 2.753 0 0 1 2 14.25v-8.5A2.753 2.753 0 0 1 4.75 3h14.5A2.753 2.753 0 0 1 22 5.75zm-1 0A1.752 1.752 0 0 0 19.25 4H4.75A1.752 1.752 0 0 0 3 5.75v8.5A1.752 1.752 0 0 0 4.75 16H7v3.519L11.837 16h7.413A1.752 1.752 0 0 0 21 14.25z"/>
        </svg>
      </div>
    </div>

    <!-- Contact Origin Card -->

    <div
        class="m-4 p-4 border border-gray-300 text-red-500 rounded-lg text-md flex justify-between items-center"
        @click="callTruckDevice">
      <!-- Left part with icon and text -->
      <div class="flex items-center">
        <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32"
             stroke="currentColor">
          <path d="M8 2 L8 16 22 2 22 30 8 16 8 30"/>
        </svg>
        {{ trip?.legs[trip?.currentLeg - 1]?.origin ?? 'Origin' }}
      </div>
      <!-- Right part with additional icons -->
      <div class="flex items-center">
        <svg class="h-6 w-6 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path
              d="M15 3C16.5315 3.17014 17.9097 3.91107 19 5C20.0903 6.08893 20.8279 7.46869 21 9M14.5 6.5C15.2372 6.64382 15.9689 6.96892 16.5 7.5C17.0311 8.03108 17.3562 8.76284 17.5 9.5M8.20049 15.799C1.3025 8.90022 2.28338 5.74115 3.01055 4.72316C3.10396 4.55862 5.40647 1.11188 7.87459 3.13407C14.0008 8.17945 6.5 8 11.3894 12.6113C16.2788 17.2226 15.8214 9.99995 20.8659 16.1249C22.8882 18.594 19.4413 20.8964 19.2778 20.9888C18.2598 21.717 15.0995 22.6978 8.20049 15.799Z"
              stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path
              d="M6 8h12v1H6zm0 4h9v-1H6zm16-6.25v8.5A2.753 2.753 0 0 1 19.25 17h-7.087L6 21.481V17H4.75A2.753 2.753 0 0 1 2 14.25v-8.5A2.753 2.753 0 0 1 4.75 3h14.5A2.753 2.753 0 0 1 22 5.75zm-1 0A1.752 1.752 0 0 0 19.25 4H4.75A1.752 1.752 0 0 0 3 5.75v8.5A1.752 1.752 0 0 0 4.75 16H7v3.519L11.837 16h7.413A1.752 1.752 0 0 0 21 14.25z"/>
        </svg>
      </div>
    </div>

    <!-- Contact Destination Card -->
    <div
        class="m-4 p-4 border border-gray-300 text-red-500 rounded-lg text-md flex justify-between items-center"
        @click="callTruckDevice">
      <!-- Left part with icon and text -->
      <div class="flex items-center">
        <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32"
             stroke="currentColor">
          <path d="M24 2 L24 16 10 2 10 30 24 16 24 30"/>
        </svg>

        {{ trip?.legs[trip?.currentLeg - 1]?.destination ?? 'Destination' }}
      </div>
      <!-- Right part with additional icons -->
      <div class="flex items-center">
        <svg class="h-6 w-6 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path
              d="M15 3C16.5315 3.17014 17.9097 3.91107 19 5C20.0903 6.08893 20.8279 7.46869 21 9M14.5 6.5C15.2372 6.64382 15.9689 6.96892 16.5 7.5C17.0311 8.03108 17.3562 8.76284 17.5 9.5M8.20049 15.799C1.3025 8.90022 2.28338 5.74115 3.01055 4.72316C3.10396 4.55862 5.40647 1.11188 7.87459 3.13407C14.0008 8.17945 6.5 8 11.3894 12.6113C16.2788 17.2226 15.8214 9.99995 20.8659 16.1249C22.8882 18.594 19.4413 20.8964 19.2778 20.9888C18.2598 21.717 15.0995 22.6978 8.20049 15.799Z"
              stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path
              d="M6 8h12v1H6zm0 4h9v-1H6zm16-6.25v8.5A2.753 2.753 0 0 1 19.25 17h-7.087L6 21.481V17H4.75A2.753 2.753 0 0 1 2 14.25v-8.5A2.753 2.753 0 0 1 4.75 3h14.5A2.753 2.753 0 0 1 22 5.75zm-1 0A1.752 1.752 0 0 0 19.25 4H4.75A1.752 1.752 0 0 0 3 5.75v8.5A1.752 1.752 0 0 0 4.75 16H7v3.519L11.837 16h7.413A1.752 1.752 0 0 0 21 14.25z"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['trip'],
  methods: {
    callTruckDevice() {
      window.open(`tel:+1234567890`);
    },
    callDriverPhone() {
      window.open(`tel:+0987654321`);
    },
    chatWithDriver() {
      window.open(`https://chat.url`);
    },
    contactBroker() {
      window.open(`tel:+1122334455`);
    },
    contactDestination() {
      window.open(`tel:+2233445566`);
    },
    contactOrigin() {
      window.open(`tel:+3344556677`);
    },
  },
};
</script>
