import mongoose from 'mongoose';

const authenticationSchema = new mongoose.Schema({
  ip: { type: String, required: true },
  location: {
    country: { type: String },
    city: { type: String }
  },
  device: {
    model: { type: String },
    make: { type: String }
  },
  userAgent: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Create a virtual property 'id' that's not actually part of the MongoDB document. It's just computed on the fly.
authenticationSchema.virtual('id').get(function() {
  return this._id.toString();
});

// Ensure virtual fields are serialised.
authenticationSchema.set('toJSON', {
  virtuals: true,
});

export default mongoose.model('Authenticate', authenticationSchema);
