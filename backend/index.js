import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const { PORT, MONGODB_URL } = process.env;

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("DB Connected");
    app.listen(3000, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((e) => {
    console.log(e.message);
  });
