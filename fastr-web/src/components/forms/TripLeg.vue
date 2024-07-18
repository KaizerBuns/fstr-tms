<template>
  <div>
    <div class="p-2">
      <el-form :model="leg" label-position="top">
        <el-form-item label="Trailer">
          <!--          <TrailerField v-model="leg.trailer"/>-->
        </el-form-item>
        <el-form-item label="Broker">
          <el-input v-model="leg.broker"/>
        </el-form-item>
        <el-form-item label="Pickup Address">
          <el-input v-model="leg.pickup"/>
        </el-form-item>
        <el-form-item label="Pickup Details">
          <el-form-item>
            <el-date-picker v-model="leg.pickupDate" type="date"
                            placeholder="Pick a day"/>
          </el-form-item>
          <el-form-item class="md:ml-2">
            <el-time-select v-model="leg.pickupTime" start="00:00"
                            step="00:30" end="23:59" placeholder="Select time"
                            format="hh:mm A"/>
          </el-form-item>
        </el-form-item>
        <el-form-item label="Delivery Address">
          <el-input v-model="leg.delivery"/>
        </el-form-item>
        <el-form-item label="Delivery Details">
          <el-form-item>
            <el-date-picker v-model="leg.deliveryDate" type="date"
                            placeholder="Pick a day"/>
          </el-form-item>
          <el-form-item class="md:ml-2">
            <el-time-select v-model="leg.deliveryTime" start="00:00"
                            step="00:30" end="23:59" placeholder="Select time"
                            format="hh:mm A"/>
          </el-form-item>
        </el-form-item>
        <el-form-item>
          <el-form-item label="Rate">
            <el-input v-model="leg.rate"/>
          </el-form-item>
          <el-form-item label="Pay" class="md:ml-2">
            <el-input v-model="leg.pay"/>
          </el-form-item>
          <el-form-item label="Pro-Rate" class="md:ml-2">
            <el-select v-model="leg.pro" placeholder="Currency">
              <el-option label="USD" value="USD"/>
              <el-option label="CAD" value="CAD"/>
            </el-select>
          </el-form-item>
        </el-form-item>
        <div class="bg-gray-50 p-4 rounded-lg my-2">
          <el-form-item label="Classification">
            <el-select v-model="leg.classification"
                       placeholder="Select one">
              <el-option label="Class 55" value="Class 55"/>
              <el-option label="Class 60" value="Class 60"/>
              <el-option label="Class 65" value="Class 65"/>
              <el-option label="Class 70" value="Class 70"/>
            </el-select>
          </el-form-item>
          <el-form-item label="Dimensions">
            <el-form-item label="L">
              <el-input v-model="leg.length">
                <template #append>ft</template>
              </el-input>
            </el-form-item>
            <el-form-item label="W" class="md:ml-2">
              <el-input v-model="leg.width">
                <template #append>ft</template>
              </el-input>
            </el-form-item>
            <el-form-item label="H" class="md:ml-2">
              <el-input v-model="leg.height">
                <template #append>ft</template>
              </el-input>
            </el-form-item>
          </el-form-item>
          <el-form-item label="Weight">
            <el-input v-model="leg.weight">
              <template #append>kg</template>
            </el-input>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>

import { defineAsyncComponent } from 'vue';

export default {
  props: ['modelValue'],
  components: {
    TrailerField: defineAsyncComponent(() => import('@/components/fields/TrailerField.vue')),
  },
  data() {
    return {
      leg: this.modelValue ? { ...this.modelValue } : {},
    };
  },
  watch: {
    value: {
      handler(newVal) {
        this.tripForm = { ...newVal };  // sync with parent when the prop changes
      },
      deep: true,
    },
  },

};

</script>
