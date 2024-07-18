import mongoose, { Document, Schema } from 'mongoose';

// 2. Create a Schema corresponding to the document interface.
const trailerSchema = new Schema({
  trailer_id: { type: String, required: true },
  trailer_type: { type: String, required: false },
  capacity: { type: String, required: false },
  current_location: {
    latitude: { type: Number, required: false },
    longitude: { type: Number, required: false },
  },
  maintenance_status: { type: String, required: false },
  maintenance_pm: { type: String, required: false },
  maintenance_service: { type: String, required: false },
  current_trip: { type: String, required: false },
});

trailerSchema.virtual('id').get(function(this: mongoose.Document) {
  return this._id.toString();
});

// 3. Create a Model.
const Trailer = mongoose.model('Trailer', trailerSchema);

export default Trailer;
