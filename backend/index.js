import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userAuthRoute from "./routes/userAuthRoute.js";

dotenv.config();

const { PORT, MONGODB_URL } = process.env;

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to MERN Authentication app");
});

app.use("/users", userAuthRoute);

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("DB Connected");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((e) => {
    console.log(e.message);
  });
