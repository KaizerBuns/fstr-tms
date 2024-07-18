<template>
  <el-form label-position="top" size="small">
    <div class="p-3 space-y-3 overflow-auto"
         style="max-height: calc(100vh - 3rem); width: 90vw; max-width: 600px;">
      <el-card header="Main Information">

        <TextField v-model="account.name" fieldName="name" fieldLabel="Name"/>

        <!--      <SelectField v-model="account.type"-->
        <!--                   fieldName="type"-->
        <!--                   fieldLabel="Type"-->
        <!--                   :options=" [-->
        <!--        { name: 'carrier', label: 'Carrier' },-->
        <!--        { name: 'customer_freight_broker', label: 'Customer / Freight Broker' },-->
        <!--        { name: 'shipper', label: 'Shipper' },-->
        <!--        { name: 'receiver', label: 'Receiver' },-->
        <!--        { name: 'customs_broker', label: 'Customs Broker' },-->
        <!--      ]"/>-->

        <AddressField v-model="account.shipping_address" fieldName="address" fieldLabel="Address"/>
        <div class="flex pb-3">
          <CheckboxField v-model="account.shipper" fieldName="shipper" fieldLabel="Shipper"/>
          <CheckboxField v-model="account.receiver" fieldName="receiver" fieldLabel="Receiver"/>
          <CheckboxField v-model="account.freight_broker" fieldName="freight_broker"
                         fieldLabel="Freight Broker"/>
          <CheckboxField v-model="account.carrier" fieldName="carrier" fieldLabel="Carrier"/>
          <CheckboxField v-model="account.customs_broker" fieldName="customs_broker"
                         fieldLabel="Customs Broker"/>
        </div>

        <PhoneField v-model="account.phone_number" fieldName="phone_number" fieldLabel="Phone #"/>

        <PhoneField v-model="account.fax_number" fieldName="fax_number" fieldLabel="Fax #"/>

        <PhoneField v-model="account.mobile_number" fieldName="mobile_number"
                    fieldLabel="Mobile #"/>

        <TextField v-model="account.full_name" fieldName="full_name" fieldLabel="Full Name"/>

        <EmailField v-model="account.email" fieldName="email" fieldLabel="Email"/>
      </el-card>

      <el-card header="Locations">
        <TextField v-model="account.primary_location_name" fieldName="primary_location_name"
                   fieldLabel="Primary Location Name"/>
        <TextField v-model="account.primary_location_address" fieldName="primary_location_address"
                   fieldLabel="Primary Location Address"/>
        <TextField v-model="account.secondary_location_name" fieldName="secondary_location_name"
                   fieldLabel="Secondary Location Name"/>
        <TextField v-model="account.secondary_location_address"
                   fieldName="secondary_location_address" fieldLabel="Secondary Location Address"/>
      </el-card>

      <el-card header="Primary Contact">
        <TextField v-model="account.primary_contact_name" fieldName="primary_contact_name"
                   fieldLabel="Primary Contact Name"/>
        <TextField v-model="account.primary_contact_title" fieldName="primary_contact_title"
                   fieldLabel="Primary Contact Name"/>
        <PhoneField v-model="account.primary_contact_phone_number"
                    fieldName="primary_contact_phone_number" fieldLabel="Primary Contact Phone #"/>
        <EmailField v-model="account.primary_contact_email" fieldName="primary_contact_email"
                    fieldLabel="Primary Contact Email"/>
      </el-card>

      <el-button type="primary" @click="submitForm">{{
          context === 'create' ? 'Create' : 'Update'
        }}
      </el-button>
    </div>
  </el-form>
</template>

<script>
import TextField from '@/components/fields/TextField.vue';
import EmailField from '@/components/fields/EmailField.vue';
import PhoneField from '@/components/fields/PhoneField.vue';
import AddressField from '@/components/fields/AddressField.vue';
import SelectField from '@/components/fields/SelectField.vue';
import CheckboxField from '@/components/fields/CheckboxField.vue';

export default {
  components: {
    CheckboxField,
    SelectField,
    TextField,
    EmailField,
    PhoneField,
    AddressField,
  },
  props: ['modelValue', 'context'],
  data() {
    return {
      account: this.modelValue ? { ...this.modelValue } : {},
    };
  },
  methods: {
    async submitForm() {
      if (this.context === 'create') {
        this.$store.dispatch('createAccount', this.account);
        this.$emit('close-modal');
        this.$emit('reload');
      } else {
        this.$store.dispatch('updateAccount', this.account);
        this.$emit('update:modelValue', this.account);
        this.$emit('close-modal');
        this.$emit('reload');
      }
    },
  },
  watch: {
    value: {
      handler(newVal) {
        this.account = { ...newVal };  // sync with parent when the prop changes
      },
      deep: true,
    },
  },
};
</script>
