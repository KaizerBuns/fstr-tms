<template>
  <div>
    <div class="p-2">
      <el-form :model="tripForm" label-position="top">
        <el-form-item label="Driver">
          <el-select v-model="tripForm.driver" placeholder="Please select a driver">
            <el-option label="Jerry Jones" value="Jerry J."/>
            <el-option label="Thomas V." value="Thomas V."/>
          </el-select>
        </el-form-item>
        <el-form-item label="Truck">
          {{  tripForm.trip.truck  }}
          <TruckField v-model="tripForm.trip.truck"/>
        </el-form-item>
        <el-form-item label="Trailer">
          <el-input v-model="tripForm.trip.trailer"/>
        </el-form-item>
        <el-form-item label="Broker">
          <el-input v-model="tripForm.trip.broker"/>
        </el-form-item>
        <div class="text-lg py-2">Plan Legs</div>
        <el-collapse v-model="modelValue.collapse" class="mb-4">
          <el-collapse-item title="Create a leg for this trip" name="1">
            <el-form-item label="Pickup Address">
              <el-input v-model="tripForm.tripLeg.pickup"/>
            </el-form-item>
            <el-form-item label="Pickup Details">
              <el-form-item>
                <el-date-picker v-model="tripForm.tripLeg.pickupDate" type="date"
                                placeholder="Pick a day"/>
              </el-form-item>
              <el-form-item class="md:ml-2">
                <el-time-select v-model="tripForm.tripLeg.pickupTime" start="00:00"
                                step="00:30" end="23:59" placeholder="Select time"
                                format="hh:mm A"/>
              </el-form-item>
            </el-form-item>
            <el-form-item label="Delivery Address">
              <el-input v-model="tripForm.tripLeg.delivery"/>
            </el-form-item>
            <el-form-item label="Delivery Details">
              <el-form-item>
                <el-date-picker v-model="tripForm.tripLeg.deliveryDate" type="date"
                                placeholder="Pick a day"/>
              </el-form-item>
              <el-form-item class="md:ml-2">
                <el-time-select v-model="tripForm.tripLeg.deliveryTime" start="00:00"
                                step="00:30" end="23:59" placeholder="Select time"
                                format="hh:mm A"/>
              </el-form-item>
            </el-form-item>
            <el-form-item>
              <el-form-item label="Rate">
                <el-input v-model="tripForm.tripLeg.rate"/>
              </el-form-item>
              <el-form-item label="Pay" class="md:ml-2">
                <el-input v-model="tripForm.tripLeg.pay"/>
              </el-form-item>
              <el-form-item label="Pro-Rate" class="md:ml-2">
                <el-select v-model="tripForm.tripLeg.pro" placeholder="Currency">
                  <el-option label="USD" value="USD"/>
                  <el-option label="CAD" value="CAD"/>
                </el-select>
              </el-form-item>
            </el-form-item>
            <div class="bg-gray-50 p-4 rounded-lg my-2">
              <el-form-item label="Classification">
                <el-select v-model="tripForm.tripLeg.classification"
                           placeholder="Select one">
                  <el-option label="Class 55" value="Class 55"/>
                  <el-option label="Class 60" value="Class 60"/>
                  <el-option label="Class 65" value="Class 65"/>
                  <el-option label="Class 70" value="Class 70"/>
                </el-select>
              </el-form-item>
              <el-form-item label="Dimensions">
                <el-form-item label="L">
                  <el-input v-model="tripForm.tripLeg.length">
                    <template #append>ft</template>
                  </el-input>
                </el-form-item>
                <el-form-item label="W" class="md:ml-2">
                  <el-input v-model="tripForm.tripLeg.width">
                    <template #append>ft</template>
                  </el-input>
                </el-form-item>
                <el-form-item label="H" class="md:ml-2">
                  <el-input v-model="tripForm.tripLeg.height">
                    <template #append>ft</template>
                  </el-input>
                </el-form-item>
              </el-form-item>
              <el-form-item label="Weight">
                <el-input v-model="tripForm.tripLeg.weight">
                  <template #append>kg</template>
                </el-input>
              </el-form-item>
            </div>
            <el-button @click="resetLegForm">Cancel</el-button>
            <el-button type="primary" @click="createLeg">Add Leg</el-button>
          </el-collapse-item>
        </el-collapse>
        <div class="my-4">
          <div>Legs for this trip:</div>
          <div>
            {{ tripForm.trip.legs }}

            <el-table :data="tripForm.trip.legs" stripe style="width: 100%">
              <el-table-column prop="classification" label="Class" width="180"/>
              <el-table-column prop="pickup" label="Pickup" width="180"/>
              <el-table-column prop="pickupDate" label="Pickup Date" width="180"/>
              <el-table-column prop="delivery" label="Delivery"/>
              <el-table-column prop="deliveryDate" label="Delivery Date" width="180"/>
            </el-table>
          </div>
        </div>
        <el-form-item label="Save trip as template">
          <el-input v-model="tripForm.templateName"
                    placeholder="Enter a name to save trip template"/>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>

import { defineAsyncComponent } from 'vue'

export default {
  props: ['modelValue'],
  components: {
    TruckField: defineAsyncComponent(() => import('@/components/fields/TruckField.vue'))
  },

  watch: {
    value: {
      handler(newVal) {
        this.tripForm = {...newVal};  // sync with parent when the prop changes
      },
      deep: true,
    },
  },
  data() {
    return {
      tripForm: this.modelValue ? { ...this.modelValue } : {},
    };
  },
}

</script>
