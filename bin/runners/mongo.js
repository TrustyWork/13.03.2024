import mongoose from 'mongoose';

const connectUrl = 'mongodb://127.0.0.1:27017/test'
await mongoose.connect(connectUrl)
  .then(() => console.log('Mongo connected!'));