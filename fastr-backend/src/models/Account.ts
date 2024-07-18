import mongoose, { Document, Schema } from 'mongoose';

// 2. Create a Schema corresponding to the document interface.
const accountSchema = new Schema({
  name: { type: String, required: true },
  full_name: { type: String, required: false },
  type: { type: String, required: false },
  role: { type: String, required: false },
  billing_address: { type: String, required: false },
  mobile_number: { type: String, required: false },
  phone_number: { type: String, required: false },
  fax_number: { type: String, required: false },
  shipping_address: { type: String, required: false },
  email: { type: String, required: false },
});

accountSchema.virtual('id').get(function(this: mongoose.Document) {
  return this._id.toString();
});
// 3. Create a Model.
const Account = mongoose.model('Account', accountSchema);

export default Account;
