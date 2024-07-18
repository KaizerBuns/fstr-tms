<template>
  <div>
    <el-form :model="trip" label-position="top" size="small">
      <el-form-item>
        <el-form-item label="Driver" class="pl-2">
          <DriverField v-model="trip.driver"/>
        </el-form-item>
        <el-form-item label="Truck" class="pl-2">
          <TruckField v-model="trip.truck"/>
        </el-form-item>
      </el-form-item>
      <label class="text-lg text-red-500">Trip Legs</label>
      <div class="border border-gray-300 p-4 rounded-lg my-2 flex"
           v-for="(leg, index) in trip.legs">
        <div class="w-11/12">
          <div class="text-md text-red-500">Leg {{ index + 1 }}</div>
          <el-form-item label="Trailer" class="pl-2">
            <TrailerField v-model="leg.trailer"/>
          </el-form-item>
          <el-form-item label="Broker" class="pl-2">
            <AccountField v-model="leg.broker"/>
          </el-form-item>
          <el-form-item>
            <el-form-item label="Shipper" class="pl-2">
              <AccountField v-model="leg.shipper"/>
            </el-form-item>
            <el-form-item label="Pickup Address" class="pl-2">
              <AddressField v-model="leg.pickup_address"/>
            </el-form-item>
            <el-form-item label="Pickup Date Time" class="pl-2">
              <el-date-picker v-model="leg.pickup_date_time" type="datetime"/>
            </el-form-item>
          </el-form-item>
          <el-form-item>
            <el-form-item label="Receiver" class="pl-2">
              <AccountField v-model="leg.receiver"/>
            </el-form-item>
            <el-form-item label="Delivery Address" class="pl-2">
              <AddressField v-model="leg.delivery_address"/>
            </el-form-item>
            <el-form-item label="Delivery Date Time" class="pl-2">
              <el-date-picker v-model="leg.delivery_date_time" type="datetime"/>
            </el-form-item>
          </el-form-item>
          <el-form-item>
            <el-form-item label="Rate" class="pl-2">
              <el-input v-model="leg.rate"/>
            </el-form-item>
            <el-form-item label="Pay" class="pl-2">
              <el-input v-model="leg.pay"/>
            </el-form-item>
            <el-form-item label="Prorate" class="pl-2">
              <el-select v-model="leg.prorate" placeholder="Currency">
                <el-option label="USD" value="USD"/>
                <el-option label="CAD" value="CAD"/>
              </el-select>
            </el-form-item>
          </el-form-item>
          <div class="text-md text-red-500">Checkpoints</div>
          <el-form-item v-for="(checkpoint, idx) in leg.checkpoints"
                        class="border border-gray-300 p-4 rounded-lg my-2">
            <el-form-item class="flex items-center justify-center">
              <el-form-item class="text-center">{{ idx + 1 }}.</el-form-item>
            </el-form-item>
            <el-form-item label="Name" class="pl-2">
              <el-input v-model="checkpoint.name"/>
            </el-form-item>
            <el-form-item label="Address" class="pl-2">
              <AddressField v-model="checkpoint.address" customWidth="200"/>
            </el-form-item>
            <el-button class="absolute top-0 right-0"
                       @click="leg.checkpoints.splice(idx, 1)">X
            </el-button>
          </el-form-item>
          <el-form-item>
            <el-button @click="leg.checkpoints.push({})">Add a checkpoint</el-button>
          </el-form-item>
          <div class="text-md text-red-500">Confirmations</div>
          <el-form-item>
            <UploadField v-model="leg.confirmations"/>
          </el-form-item>

          <div>
            <div class="text-md text-red-500">Freight</div>
            <el-form-item label="Description" class="pl-2">
              <el-input v-model="leg.freight_description"/>
            </el-form-item>
            <el-form-item>
              <el-form-item label="Weight" class="pl-2">
                <el-form-item>
                  <el-input v-model="leg.freight_weight">
                    <template #append>kg</template>
                  </el-input>
                </el-form-item>
              </el-form-item>
              <el-form-item label="Classification" class="pl-2">
                <el-radio-group v-model="leg.classification" class="ml-4">
                  <el-radio label="FTL">FTL</el-radio>
                  <el-radio label="LTL">LTL</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-form-item>
            <el-form-item v-if="leg.classification === 'LTL'">
              <el-form-item label="L" class="pl-2">
                <el-input v-model="leg.freight_length">
                  <template #append>ft</template>
                </el-input>
              </el-form-item>
              <el-form-item label="W" class="pl-2">
                <el-input v-model="leg.freight_width">
                  <template #append>ft</template>
                </el-input>
              </el-form-item>
              <el-form-item label="H" class="pl-2">
                <el-input v-model="leg.freight_height">
                  <template #append>ft</template>
                </el-input>
              </el-form-item>
            </el-form-item>
          </div>
        </div>
        <div class="w-1/12" style="position: relative">
          <el-button class="absolute right-0" @click="trip.legs.splice(index, 1)">X
          </el-button>
        </div>
      </div>
      <div>
        <el-button @click="trip.legs.push({ checkpoints: [{}]})">Add a leg</el-button>
      </div>

    </el-form>
  </div>
</template>

<script>

import { defineAsyncComponent } from 'vue';
import AddressField from '@/components/fields/AddressField.vue';
import UploadField from '@/components/fields/UploadField.vue';

export default {
  props: {
    modelValue: {
      type: Object,
      default: () => ({
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
      }),
    },
  },
  components: {
    UploadField,
    AddressField,
    TruckField: defineAsyncComponent(() => import('@/components/fields/TruckField.vue')),
    DriverField: defineAsyncComponent(() => import('@/components/fields/DriverField.vue')),
    TripLeg: defineAsyncComponent(() => import('@/components/forms/TripLeg.vue')),
    TrailerField: defineAsyncComponent(() => import('@/components/fields/TrailerField.vue')),
    AccountField: defineAsyncComponent(() => import('@/components/fields/AccountField.vue')),
  },
  data() {
    return {
      trip: this.modelValue ? { ...this.modelValue } : {},
    };
  },
  watch: {
    value: {
      handler(newVal) {
        this.trip = { ...newVal };  // sync with parent when the prop changes
      },
      deep: true,
    },
  },
};

</script>
