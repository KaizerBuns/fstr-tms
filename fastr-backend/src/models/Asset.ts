import mongoose, { Document, Schema } from 'mongoose';

const maintenanceEventSchema = new Schema({
  date: { type: Date, required: true },
  description: { type: String, required: true },
  cost: { type: Number, required: true },
}, {_id : false});

// 2. Create a Schema corresponding to the document interface.
const assetSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true},
  deviceId: { type: String, required: true },
  location: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
  last_inspection_date: { type: Date, required: true },
  inspection_due_date: { type: Date, required: true },
  maintenance_history: [maintenanceEventSchema],
  kilometers_driven: { type: Number, required: true },
  license_plate: { type: String, required: true },
});

assetSchema.virtual('id').get(function(this: mongoose.Document) {
  return this._id.toString();
});

// 3. Create a Model.
const Asset = mongoose.model('Asset', assetSchema);

export default Asset;

