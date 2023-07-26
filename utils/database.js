import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "myDb",
    });
    console.log("Connected mongo");
  } catch (e) {
    console.log("Error mongo", e);
  }
};
