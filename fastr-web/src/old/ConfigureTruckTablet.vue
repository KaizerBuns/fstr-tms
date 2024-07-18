<template>
  <div class="text-black p-20">
    <div>Link this android device to a truck</div>
    <div>---</div>
    <div class="black-text">
      Device ID: {{ device?.id?.identifier ?? 'not found' }}
    </div>
    <div>---</div>
    <TruckField v-model="selectedTruck" fieldLabel="Select a truck"/>
    <el-button type="primary" @click="submitDevice">Submit</el-button>
    <el-dialog v-model="unlinkModal.open" title="This device is already linked" width="90%">
      <div>This truck is currently linked to {{ unlinkModal.linkedTruck?.name }}</div>
      <template #footer>
            <span class="dialog-footer">
              <el-button @click="unlinkModal.open = false">Cancel</el-button>
              <el-button @click="unlinkAndContinue">Unlink and continue</el-button>
            </span>
      </template>
    </el-dialog>
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
import TruckForm from '@/components/forms/TruckForm.vue';
import _ from 'lodash';
import { Device } from '@capacitor/device';
import { Geolocation } from '@capacitor/geolocation';

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
    TruckForm,
  },
  data() {
    return {
      value: {},
      selectedTruck: {},
      trucks: [],
      device: {
        info: {},
        id: {},
        coords: {},
      },
      options: [
        { name: 'carrier', label: 'Carrier' },
        { name: 'customer_freight_broker', label: 'Customer / Freight Broker' },
        { name: 'shipper', label: 'Shipper' },
        { name: 'receiver', label: 'Receiver' },
        { name: 'customs_broker', label: 'Customs Broker' },
      ],
      unlinkModal: {
        open: false,
        linkedTruck: {},
      },
    };
  },
  methods: {
    showUnlinkModal(truck) {
      this.unlinkModal.linkedTruck = truck;
      console.log('this.unlinkModal.linkedTruck: ', this.unlinkModal.linkedTruck);
      this.unlinkModal.open = true;
    },
    routeToSuccess() {
      this.$router.push({ name: 'DeviceLinkSuccess' });
    },
    async unlinkAndContinue() {
      await this.$store.dispatch('updateTruck',
          {
            _id: this.linkedTruck._id,
            device: {},
          });
      await this.$store.dispatch('updateTruck',
          {
            _id: this.selectedTruck.id,
            device: this.device,
          });
      this.routeToSuccess();
    },
    async submitDevice() {
      // check if this device has previously been linked to a device.

      this.trucks = await this.$store.dispatch('getTrucks');
      console.log('submitDevice');
      console.log('this.selectedTruck: ', this.selectedTruck);

      const isTruckLinked = _.find(this.trucks,
              ['device.id.identifier', this.selectedTruck?.device?.id?.identifier]) ||
          false;
      // if the linked truck is current truck -- then do nothing
      //if the truck is linked to another device unlink it.

      console.log('isTruckLinked: ', isTruckLinked);
      if (isTruckLinked) {
        this.showUnlinkModal(isTruckLinked);
      } else {
        await this.$store.dispatch('updateTruck',
            {
              _id: this.selectedTruck.id,
              device: this.device,
            });
        this.routeToSuccess();
      }
    },
  },
  async created() {
    this.device.info = await Device.getInfo();
    this.device.id = await Device.getId();
    if (this.device.info.platform === 'android') {
      this.device.coords = (await Geolocation.getCurrentPosition()).coords;
    }
  },
};
</script>
