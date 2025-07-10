import mongoose from "mongoose";

import { DB_URI, NODE_ENV } from "../config/env.js";

if (!DB_URI) {
  throw new Error(
    "Please deifne the MONGO_DB_URI environment variable inside .env.<development/production>.local"
  );
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_URI);

    console.log(`Connected to Mongo DB database in ${NODE_ENV} mode`);
  } catch (error) {
    console.log("Error connecting to Mongo DB database", error);

    process.exit(1);
  }
};

export default connectToDatabase;
