import mongoose, { Document, Schema } from 'mongoose';

const maintenanceEventSchema = new Schema({
  date: { type: Date, required: false },
  description: { type: String, required: false },
  cost: { type: Number, required: false },
}, {_id : false});

// 2. Create a Schema corresponding to the document interface.
const truckSchema = new Schema({
  name: { type: String, required: true },
  device_id: { type: String, required: false },
  location: {
    latitude: { type: Number, required: false },
    longitude: { type: Number, required: false },
  },
  last_inspection_date: { type: Date, required: false },
  inspection_due_date: { type: Date, required: false },
  maintenance_history: [maintenanceEventSchema],
  kilometers_driven: { type: Number, required: false },
  license_plate: { type: String, required: false },
});

truckSchema.virtual('id').get(function(this: mongoose.Document) {
  return this._id.toString();
});

// 3. Create a Model.
const Truck = mongoose.model('Truck', truckSchema);

export default Truck;
