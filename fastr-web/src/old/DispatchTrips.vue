<template>
  <div class="fstr-content">
    <div class="fstr-card">
      <div class="content">
        <div class="flex flex-row">
          <el-button
              v-wave @touchstart="event => event.target.focus()" type="primary"
              class="flex w-1/2 mx-1 mb-1 rounded-md justify-center h-full items-center font-normal text-base"
              style="height: 60px;"
              @click="modalTrip.open=true">
            Plan a trip
          </el-button>
          <el-button v-wave @touchstart="event => event.target.focus()" type="primary"
                     class="flex w-1/2 mx-1 mb-1 rounded-md justify-center h-full items-center font-normal text-base"
                     style="height: 60px;"
                     @click="$router.push({name: 'DispatchCollections'})">
            Database
          </el-button>
        </div>
        <div class="flex flex-row m-1">
          <el-button type="primary"
                     v-wave @touchstart="event => event.target.focus()"
                     class="w-full rounded-md justify-center h-full items-center font-normal text-base"
                     style="height: 30px;"
          >
            Explore data with ChatGPT
          </el-button>
        </div>
      </div>
    </div>
    <div class="">
      <div class="flex">
        <div :class="[`${ isMobile ? 'w-full' : 'w-1/3'}`]">
          <div class="fstr-card">
            <nav class="bg-gray-100 flex justify-between text-sm text-red-900 uppercase font-mono">
              <a href="#"
                 class="w-full block text-center hover:bg-red-200 hover:text-red-800 p-2 transition duration-300"
                 @click="updateTab('current')">
                Current
              </a>
              <a href="#"
                 class="w-full block text-center hover:bg-red-200 hover:text-red-800 p-2 transition duration-300"
                 @click="updateTab('future')">
                Future
              </a>
              <a href="#"
                 class="w-full block text-center hover:bg-red-200 hover:text-red-800 p-2 transition duration-300"
                 @click="updateTab('past')">
                Past
              </a>
            </nav>
            <div class="md:grid md:grid-cols-3 gap-6">
              <div class="md:col-span-12">
                <div v-if="!tripsLoaded" class="mt-4 mr-4">
                  <SkeletonLoader width="w-full" height="h-36"/>
                  <SkeletonLoader width="w-full" height="h-36"/>
                  <SkeletonLoader width="w-full" height="h-36"/>
                  <SkeletonLoader width="w-full" height="h-36"/>
                </div>
                <div v-for="(trip, index) in filteredTrips" :key="index" class="mt-4">
                  <TripCard :trip="trip" @openTrip="openModal(trip)"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="!isMobile" class="w-2/3">
          <TripDetails v-model="selectedTrip"/>
        </div>
      </div>
    </div>

    <!-- The Modal -->
    <div v-if="isModalOpen && isMobile" class="fixed z-50 inset-0 overflow-y-auto"
         aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <TripDetails :isModalOpen="isModalOpen" v-model="selectedTrip"/>
    </div>

    <!-- Modal Trips !-->
    <div>
      <el-dialog v-model="modalTrip.open" title="Plan Trip" width="90%">
        <TripForm v-model="modalTrip.trip"/>
        <template #footer>
            <span class="dialog-footer">
              <el-button @click="modalTrip.open = false">Cancel</el-button>
              <el-button @click="createTrip">Create</el-button>
            </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import TripDetails from '@/components/trips/TripDetails.vue';
import TripCard from '@/components/trips/TripCard.vue';
import TripForm from '@/components/forms/TripForm2.vue';
import SkeletonLoader from '@/components/SkeletonLoader.vue';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { s3Client } from '@/config/s3Client';
import { trip, tripConfirmation, tripLeg } from '@/models/trip';
import { clone } from 'lodash';

export default {
  components: {
    TripDetails,
    TripCard,
    TripForm,
    SkeletonLoader,
  },
  data() {
    return {
      isModalOpen: false,
      markers: [
        { position: { lat: 0, lng: 0 } },
      ],
      trips: [],
      selectedTab: 'current',
      selectedTrip: null,
      tripsLoaded: false,
      modalTrip: {
        open: false,
        trip: {
          truck: '',
          status: '',
          estimatedArrivalTime: '',
          legs: [{ checkpoints: [{}] }],
          startDate: '',
          startTime: '',
          endDate: '',
          driver: '',
          location: '',
          currentLeg: 0,
        },
      },
      windowWidth: window.innerWidth,
    };
  },
  computed: {
    filteredTrips() {
      try {
        return this.trips.filter(trip => {
          return trip.status === this.selectedTab;
        });
      } catch (e) {
        console.error(e);
        return this.trips;
      }
    },
    isMobile() {
      return this.windowWidth <= 768;
    },
  },
  methods: {
    openModal(trip) {
      this.selectedTrip = trip;
      this.isModalOpen = true;
      this.markers = [{ position: { lat: trip.location.latitude, lng: trip.location.longitude } }];
    },
    async createTrip() {
      console.log('modalTrip.trip:', this.modalTrip.trip);
      // const upload = await this.handleUpload(this.selectedTrip.legs[0].confirmations[0])
      this.modalTrip.open = false;
    },
    async handleUpload(file) {
      const bucketParams = {
        Bucket: 'jackpot-file-data',
        Key: file.name,
        Body: file,
      };

      // Uploads the specified file to the chosen path.
      const run = async () => {
        try {
          const data = await s3Client.send(new PutObjectCommand(bucketParams));
          console.log(
              'Successfully uploaded object: ' +
              bucketParams.Bucket +
              '/' +
              bucketParams.Key,
          );
          return data;
        } catch (err) {
          console.log('Error', err);
        }
      };

      const data = await run();
      console.log('data: ', data);
    },
    updateTab(tab) {
      this.selectedTab = tab;
    },
    resetLegForm() {
      this.modalTrip.form.tripLeg = clone(tripLeg);
      this.modalTrip.collapse = [];
    },
    editLeg() {

    },
    createLeg() {
      this.modalTrip.form.trip.legs.push(clone(this.modalTrip.form.tripLeg));
    },
    updateWidth() {
      this.windowWidth = window.innerWidth;
    },
  },
  mounted() {
    window.addEventListener('resize', this.updateWidth);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateWidth);
  },
  async created() {
    this.trips = await this.$store.dispatch('getTrips');
    this.tripsLoaded = true;

    this.modalTrip.form.trip = clone(trip);
    this.modalTrip.form.tripLeg = clone(tripLeg);
    this.modalTrip.form.tripConfirmation = clone(tripConfirmation);
  },
};

</script>

<style scoped>
.arrow {
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
</style>
