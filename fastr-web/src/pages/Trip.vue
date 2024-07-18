<template>
    <div>
        <div class="p-2">
            <el-form :model="tripForm" label-position="top">
                <div class="fstr-h1 border-b mb-6">Trip Start</div>
                <el-form-item>
                    <el-form-item label="Driver">
                        <el-select-v2 class="w-96" v-model="tripForm.driver" filterable :options="driverOpts"
                            placeholder="Select Driver" />
                    </el-form-item>
                    <el-form-item label="Truck" class="ml-0 mt-2 md:ml-2 md:mt-0">
                        <el-select-v2 class="w-96" v-model="tripForm.truck" filterable :options="truckOpts"
                            placeholder="Select Truck" />
                    </el-form-item>
                </el-form-item>
                <el-form-item>
                    <el-form-item label="Trailer">
                        <el-select-v2 class="w-96" v-model="tripForm.trailer" filterable :options="trailerOpts"
                            placeholder="Select Trailer" />
                    </el-form-item>
                    <el-form-item label="Start Location" class="ml-0 mt-2 md:ml-2 md:mt-0">
                        <div class="fstr-input w-96" tabindex="-1">
                            <input id="startLocation" ref="startLocation" class="w-full" v-model="tripForm.startLocation"
                                placeholder="Search address" @input="initAutocomplete('tripForm', 'startLocation')" />
                        </div>
                    </el-form-item>
                </el-form-item>
                <el-form-item label="Date Range" class="w-96">
                    <el-date-picker v-model="tripForm.dateRange" type="datetimerange" range-separator="To"
                        start-placeholder="Start date" end-placeholder="End date" />
                </el-form-item>
                <div class="mt-4">
                    <el-button class="float-right" @click="openTripLeg">Create Leg</el-button>
                    <div class="fstr-h1 border-b mb-6">Trip Legs</div>
                    <el-timeline>
                        <el-timeline-item v-for="(item, index) in tripForm.legs"
                            :timestamp="this.formatDate(item.pickupDate)" placement="top" :id="`timelineId-${index}`">
                            <el-card>
                                <div class="flex flex-col md:flex-row">
                                    <div class="basis-1/3 order-last md:order-first">
                                        <div class="py-1">Status: {{ item.status }}</div>
                                        <div class="py-1">Broker: {{ item.broker }}</div>
                                        <div class="py-1">Rate/Pay: ${{ item.rate }} / ${{ item.pay }} {{ item.proRate }}
                                        </div>
                                        <div class="pt-1">Notes:</div>
                                        <div v-for="item in item.notes" class="my-2 border rounded shadow-md p-1 mx-2">
                                            <div class="font-medium">{{ this.formatDateTime(item.dateAdded) }}</div>
                                            <div>{{ item.note }}</div>
                                        </div>
                                    </div>
                                    <div class="basis-2/3">
                                        <iframe width="100%" height="100%" frameborder="0" style="border:0"
                                            referrerpolicy="no-referrer-when-downgrade"
                                            :src="`https://www.google.com/maps/embed/v1/directions?key=AIzaSyAz_fhO4k3mkAiyV-CgxWVwwu4egdSEbec&origin=${item.pickupLocation}&destination=${item.deliveryLocation} &avoid=tolls`"
                                            allowfullscreen>
                                        </iframe>
                                    </div>
                                </div>
                            </el-card>
                        </el-timeline-item>
                    </el-timeline>
                </div>
                <div class="mt-10">
                    <el-button size="large" @click="createTripForm">Create Trip</el-button>
                </div>
            </el-form>
            <!--
                <div class="mt-10">
                <code>{{ tripForm }}</code>
            </div>
            !-->
            <el-dialog v-model="openLegModal" title="Trip Legs" :before-close="handleClose">
                <el-form :model="tripLeg" label-position="top">
                    <el-form-item>
                        <el-form-item label="Broker">
                            <el-select-v2 class="w-96" v-model="tripLeg.broker" filterable :options="brokerOpts"
                                placeholder="Select Broker" />
                        </el-form-item>
                        <el-form-item label="Pro-Rate" class="md:ml-2">
                            <el-select class="w-96" v-model="tripLeg.proRate" placeholder="Currency">
                                <el-option label="USD" value="USD" />
                                <el-option label="CAD" value="CAD" />
                            </el-select>
                        </el-form-item>
                    </el-form-item>
                    <el-form-item label="Pickup Details">
                        <el-form-item>
                            <div class="fstr-input w-96" tabindex="-1">
                                <input class="w-full" id="pickupLocation" ref="pickupLocation"
                                    v-model="tripLeg.pickupLocation" placeholder="Search address"
                                    @input="initAutocomplete('tripLeg', 'pickupLocation')" />
                            </div>
                        </el-form-item>
                        <el-form-item class="ml-2">
                            <el-form-item>
                                <el-date-picker class="w-96" v-model="tripLeg.pickupDate" type="datetime"
                                    placeholder="Pick a day" />
                            </el-form-item>
                        </el-form-item>
                    </el-form-item>
                    <el-form-item label="Delivery Details">
                        <el-form-item>
                            <div class="fstr-input w-96" tabindex="-1">
                                <input class="w-full" id="deliveryLocation" ref="deliveryLocation"
                                    v-model="tripLeg.deliveryLocation" placeholder="Search address"
                                    @input="initAutocomplete('tripLeg', 'deliveryLocation')" />
                            </div>
                        </el-form-item>
                        <el-form-item class="ml-2">
                            <el-form-item>
                                <el-date-picker class="w-96" v-model="tripLeg.deliveryDate" type="datetime"
                                    placeholder="Pick a day" />
                            </el-form-item>
                        </el-form-item>
                    </el-form-item>
                    <el-form-item label="Rate ($)">
                        <el-slider v-model="tripLeg.rate" :format-tooltip="formatTooltip" :step="50" :max="5000" show-stops
                            show-input />
                    </el-form-item>
                    <el-form-item label="Pay ($)">
                        <el-slider v-model="tripLeg.pay" :format-tooltip="formatTooltip" :step="50" :max="5000" show-stops
                            show-input />
                    </el-form-item>
                    <el-form-item>
                        <el-form-item>
                            <el-input class="w-96" v-model="note"></el-input>
                        </el-form-item>
                        <el-form-item class="ml-2">
                            <el-button @click="addNote">Add Note</el-button>
                        </el-form-item>
                    </el-form-item>
                    <el-form-item label="Notes">
                        <div v-for="item in tripLeg.notes">
                            <div>{{ this.formatDateTime(item.dateAdded) }}</div>
                            <div>{{ item.note }}</div>
                        </div>
                    </el-form-item>
                </el-form>
                <template #footer>
                    <span class="dialog-footer">
                        <el-button @click="openLegModal = false">Cancel</el-button>
                        <el-button type="primary" @click="createTripLeg">
                            Confirm
                        </el-button>
                    </span>
                </template>
            </el-dialog>
        </div>
    </div>
</template>
  
<script>
import Trip from '@/models/trip';
import TripMap from '@/pages/components/TripMap.vue';
import { clone } from 'lodash';
import { FormatDate, FormatDateTime } from '@/libs/common';
import { StatusOptions, DriverOptions, TruckOptions, TrailerOptions, BrokerOptions } from '@/models/tripOptions';

export default {
    components: {
        TripMap
    },
    data() {
        return {
            trips: [],
            tripForm: this.resetTripForm(),
            tripLeg: this.resetTripLeg(),
            openLegModal: false,
            statusOpts: StatusOptions,
            driverOpts: DriverOptions,
            truckOpts: TruckOptions,
            trailerOpts: TrailerOptions,
            brokerOpts: BrokerOptions,
            note: ''
        }
    },
    watch: {
        'tripForm.dateRange'(newValue) {
            this.tripForm.startDate = newValue[0];
            this.tripForm.endDate = newValue[1];
        }
    },
    mounted() {
        this.tripId = this.$route.params.tripId
        console.log('TripId:', this.tripId);
        if (this.tripId) {
            new Trip().getById(this.tripId).then((res) => {
                this.tripForm = res.data[0];
            })
        }
    },
    methods: {
        initAutocomplete(form, elementId) {
            const input = document.getElementById(elementId)
            var autocomplete = new google.maps.places.Autocomplete(input);
            // Add listener for place selection
            autocomplete.addListener('place_changed', () => {
                const place = autocomplete.getPlace();
                if (form === 'tripForm') {
                    this.tripForm[elementId] = place.formatted_address;
                    this.tripForm[elementId + 'Info'] = place.geometry.location;
                } else {
                    this.tripLeg[elementId] = place.formatted_address;
                    this.tripLeg[elementId + 'Info'] = place.geometry.location;
                }
            });
        },
        openTripLeg() {
            this.tripLeg = clone(this.resetTripLeg());
            this.openLegModal = true;
        },
        createTripLeg() {
            this.tripForm.legs.push(clone(this.tripLeg));
            this.tripLeg = clone(this.resetTripLeg());
            this.openLegModal = false;
        },
        createTripForm() {
            this.tripForm.tripNumber = Math.round(Math.random() * 100000);
            this.tripForm.id = this.tripForm.tripNumber;
            new Trip().create(this.tripForm).then((res) => {
                console.log('TripCreate:', res.data)
            });
        },
        resetTripLeg() {
            return {
                broker: null,
                proRate: 'USD',
                pickupLocation: '',
                pickupLocationInfo: {},
                pickupDate: '',
                deliveryLocation: '',
                deliveryLocationInfo: {},
                deliveryDate: '',
                rate: 0,
                pay: 0,
                notes: [],
                status: 'Not Started'
            }
        },
        resetTripForm() {
            return {
                tripNumber: '',
                driver: null,
                truck: null,
                trailer: null,
                startLocation: "",
                startLocationInfo: {},
                startDate: null,
                endDate: null,
                dateRange: null,
                legs: [
                ],
                status: 'Not Started'
            }
        },
        formatTooltip(value) {
            return `$${value}`
        },
        formatDate(value) {
            return FormatDate(value);
        },
        formatDateTime(value) {
            return FormatDateTime(value);
        },
        addNote() {
            const note = {
                'note': this.note,
                'dateAdded': new Date()
            }
            this.tripLeg.notes.push(note);
            this.note = '';
        }
    },
}

</script>
  