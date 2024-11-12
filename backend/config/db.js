import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://sdp300:sdp300@cluster0.n6msi.mongodb.net/food-order"
    )
    .then(() => console.log("DB Connected"));
};
