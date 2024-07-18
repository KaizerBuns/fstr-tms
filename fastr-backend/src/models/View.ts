import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const viewSchema = new mongoose.Schema({
  views: Array,
  role: String,
});


// Create a virtual property 'id' that's not actually part of the MongoDB document. It's just computed on the fly.
viewSchema.virtual('id').get(function(this: mongoose.Document) {
  return this._id.toString();
});

// Ensure virtual fields are serialised.
viewSchema.set('toJSON', {
  virtuals: true,
});

export default mongoose.model('View', viewSchema);
