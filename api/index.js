import express from "express";
import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://jimzontrangia:luffyboy2022@mern-real-estate.qornwff.mongodb.net/mern-real-estate?retryWrites=true&w=majority"
);

const app = express();

app.listen(3000, () => {
  console.log("Serving is running on port 3000!");
});
