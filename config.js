import mongoose from 'mongoose';

/**
 * This function connects to a MongoDB database using Mongoose.
 */
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost/mydatabase', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

/* `export { connectDB };` is exporting the `connectDB` function from the module so that it can be
imported and used in other parts of the application. */
export { connectDB };