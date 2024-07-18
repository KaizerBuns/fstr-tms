import mongoose, { Document, Schema } from 'mongoose';

// 2. Create a Schema corresponding to the document interface.
const driverSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: false },
  phone_number: { type: String, required: false },
  license_number: { type: String, required: false },
  date_of_birth: { type: Date, required: false },
  // current_location: {
  //   latitude: { type: Number, required: false },
  //   longitude: { type: Number, required: false },
  // },
  driver_type: { type: String, required: false },
  // assigned_truck: { type: Schema.Types.ObjectId, ref: 'Truck', required: false },
  // assigned_trip: { type: Schema.Types.ObjectId, ref: 'Trip', required: false },
  // schedule: [
  //   {
  //     day: { type: String, required: false },
  //     start_time: { type: String, required: false },
  //     end_time: { type: String, required: false },
  //   },
  // ],
});

driverSchema.virtual('id').get(function(this: mongoose.Document) {
  return this._id.toString();
});
// 3. Create a Model.
const Driver = mongoose.model('Driver', driverSchema);

export default Driver;
