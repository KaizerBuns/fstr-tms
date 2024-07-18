import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const clientSchema = new mongoose.Schema({
  clientId: String,
  clientSecret: String,
  redirectUri: String,
});

clientSchema.pre('save', async function(next) {
  const client = this;

  if (!client.isModified('clientSecret')) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  if (!client.clientSecret) throw "client.clientSecret undefined"
  client.clientSecret = await bcrypt.hash(client.clientSecret, salt);
  next();
});

// Create a virtual property 'id' that's not actually part of the MongoDB document. It's just computed on the fly.
clientSchema.virtual('id').get(function(this: mongoose.Document) {
  return this._id.toString();
});

// Ensure virtual fields are serialised.
clientSchema.set('toJSON', {
  virtuals: true,
});
export default mongoose.model('Client', clientSchema);
