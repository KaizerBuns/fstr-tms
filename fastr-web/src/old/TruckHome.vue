<template>
  <div class="pt-20 text-black">Truck Home</div>
  <!-- The Modal -->
  <div v-if="tripModal.open" class="fixed z-50 inset-0 overflow-y-auto"
       aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <TripDetails :isModalOpen="tripModal.open" v-model="tripModal.trip"/>
  </div>
  <div id="map" style="width: 100%; height: 80vw"></div>
  <div class="text-black">
    Speed: {{ this.device.coords.speed }}KMs/h
  </div>
  <div v-for="(trip, index) in trips" :key="index" class="mt-4">
    Upcoming Trips
    <TripCard :trip="trip" @openTrip="tripModal.trip = trip; tripModal.open = true" :active="true"/>
  </div>
</template>

<script>
import TextField from '@/components/fields/TextField.vue';
import NumberField from '@/components/fields/NumberField.vue';
import EmailField from '@/components/fields/EmailField.vue';
import CurrencyField from '@/components/fields/CurrencyField.vue';
import AddressField from '@/components/fields/AddressField.vue';
import DateField from '@/components/fields/DateField.vue';
import CheckboxField from '@/components/fields/CheckboxField.vue';
import TimeField from '@/components/fields/TimeField.vue';
import AccountField from '@/components/fields/AccountField.vue';
import TruckField from '@/components/fields/TruckField.vue';
import SelectField from '@/components/fields/SelectField.vue';
import AccountForm from '@/components/forms/AccountForm.vue';
import TripCard from '@/components/trips/TripCard.vue';
import TripDetails from '@/components/trips/TripDetails.vue';
import { Device } from '@capacitor/device';
import { Geolocation } from '@capacitor/geolocation';
import { Loader } from '@googlemaps/js-api-loader';
import _ from 'lodash';

export default {
  components: {
    TruckField,
    EmailField,
    NumberField,
    TextField,
    CurrencyField,
    AddressField,
    DateField,
    TimeField,
    AccountField,
    AccountForm,
    SelectField,
    CheckboxField,
    TripCard,
    TripDetails,
  },
  data() {
    return {
      value: {},
      options: [
        { name: 'carrier', label: 'Carrier' },
        { name: 'customer_freight_broker', label: 'Customer / Freight Broker' },
        { name: 'shipper', label: 'Shipper' },
        { name: 'receiver', label: 'Receiver' },
        { name: 'customs_broker', label: 'Customs Broker' },
      ],
      trucks: [],
      truck: {},
      device: {
        id: {},
        info: {},
        coords: {},
      },
      markers: [],
      trips: [],
      tripModal: {
        open: false,
        trip: {},
      },
    };
  },
  methods: {
    async initMap() {
      const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: { lat: 0, lng: -180 },
        mapTypeId: 'terrain',
      });
      const flightPlanCoordinates = [
        { lat: 37.772, lng: -122.214 },
        { lat: 21.291, lng: -157.821 },
        { lat: -18.142, lng: 178.431 },
        { lat: -27.467, lng: 153.027 },
      ];
      const flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });

      flightPath.setMap(map);

    },
  },
  async created() {
    this.device.info = await Device.getInfo();
    if (this.device.info?.platform === 'android') {
      this.device.id = await Device.getId();
      this.device.coords = (await Geolocation.getCurrentPosition()).coords;
      this.markers = [
        {
          position: {
            lat: this.device.coords.latitude, lng: this.device.coords.longitude,
          },
        }];
    } else {
      this.device.id = { identifier: '05eb38ef7eb52319' };
      this.device.info = { platform: 'android' };
      this.device.coords = {
        latitude: 43.6036036036036,
        longitude: -79.67328280087236,
        accuracy: 2000,
        altitude: 0,
        altitudeAccuracy: 0,
        speed: 0,
        heading: 0,
      };
      this.markers = [
        {
          position: {
            lat: this.device.coords.latitude, lng: this.device.coords.longitude,
          },
        }];
    }
    this.trucks = await this.$store.dispatch('getTrucks');
    this.truck = _.find(this.trucks, [
      'device.id.identifier', this.device.id.identifier]);
    console.log('this.truck: ', this.truck);
    this.trips = await this.$store.dispatch('getTripsByTruck',
        { id: this.truck?._id.toString() });
    console.log('this.trips: ', this.trips);

    await this.initMap();
    window.initMap = initMap;
    return true;
    //
    // const start = 'New York, NY';
    // const end = 'San Francisco, CA';
    // const apiKey = 'AIzaSyAggx3ikiC4IreZsY5a90sEq8Vwh_qhQLM';
    // const url = `https://maps.googleapis.com/maps/api/route/v1/json?origin=${start}&destination=${end}&key=${apiKey}`;
    // const response = await fetch(url);
    // const data = await response.json();
    //
    // const points = data.routes[0].points;
    // const path = google.maps.geometry.encoding.decodePath(points);
    // const polyline = new google.maps.Polyline({
    //   path: path,
    //   strokeColor: '#FF0000',
    //   strokeOpacity: 1.0,
    //   strokeWeight: 2,
    // });
    //
    // polyline.setMap(map);

    // const loader = new Loader({
    //   apiKey: '',
    //   version: 'weekly',
    //   libraries: ['places'],
    // });
    //
    // const mapOptions = {
    //   center: {
    //     lat: 43.6036036036036,
    //     lng: -79.67328280087236,
    //   },
    //   zoom: 10,
    // };
    // loader.importLibrary('maps').then(({ Map }) => {
    //   new Map(document.getElementById('map'), mapOptions);
    // });
  },
};
</script>
