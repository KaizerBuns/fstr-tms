import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: String,
});

userSchema.pre('save', async function (next) {
  const user = this;
  if (!user.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  if (!user.password) throw "user.password is undefined"
  user.password = await bcrypt.hash(user.password, salt);
  next();
});

// Create a virtual property 'id' that's not actually part of the MongoDB document. It's just computed on the fly.
userSchema.virtual('id').get(function(this: mongoose.Document) {
  return this._id.toString();
});

userSchema.methods.comparePassword = async function(password: string) {
  const user = this as any;
  return bcrypt.compare(password, user.password);
}

// Ensure virtual fields are serialised.
userSchema.set('toJSON', {
  virtuals: true,
});

export default mongoose.model('User', userSchema);
