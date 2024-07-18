import mongoose, { Document, Schema } from 'mongoose';

const TripConfirmationSchema = new Schema({
  carrier: { type: String },
  freight_broker: { type: String },
  shipper: { type: String },
  receiver: { type: String },
  customs_broker: { type: String },
  freight_broker_contact: { type: String },
  total_cad: { type: Number },
  equipment: { type: String },
  total_weight: { type: Number },
  total_skids: { type: Number },
  bill_of_laiding_number: { type: String },
  border_point: { type: String },
  freight_description: { type: String },
  notes: { type: String },
  delivery_number: { type: String },
  pickup_number: { type: String },
  carrier_confirmation_number: { type: String },
  type: { type: String },
  delivery_time: { type: Date },
  pickup_time: { type: Date },
  payment_terms: { type: String }
}, {_id : false});


const TripLegSchema = new Schema({
  origin: { type: String, required: true },
  destination: { type: String, required: true },
  originState: { type: String, required: true },
  destinationState: { type: String, required: true },
  startTimeBehind: { type: String },
  startTimeAhead: { type: String },
  endTimeBehind: { type: String },
  endTimeAhead: { type: String },
  currentLeg: { type: String, required: true },
}, {_id : false});

// 2. Create a Schema corresponding to the document interface.
const tripSchema = new Schema({
  truck: { type: String, required: true },
  status: { type: String, required: true},
  estimatedArrivalTime: { type: String},
  legs: [TripLegSchema],
  confirmation: [TripConfirmationSchema],
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  driver: { type: String },
  trailer: { type: String },
  location: { type: String },
  broker: { type: String },
  currentLeg: { type: Number }
});

tripSchema.virtual('id').get(function(this: mongoose.Document) {
  return this._id.toString();
});

// 3. Create a Model.
const Trip = mongoose.model('Trip', tripSchema);

export default Trip;

