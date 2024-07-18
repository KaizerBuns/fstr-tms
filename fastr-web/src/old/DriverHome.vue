<template>
  <div class="p-20">Driver Home</div>

  <!--  @reload="reloadData"-->
  <!--  @close-modal="closeModal"-->
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
    };
  },
};
</script>
