import mongoose, {ConnectOptions} from 'mongoose';
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI || '';

const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    } as ConnectOptions);
    console.log('Database connection established.');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};

export default connectToDatabase;
