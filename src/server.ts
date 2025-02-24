// External
import express from "express";
import dotenv from "dotenv";
import connectDB from "./lib/connectDB.ts";

dotenv.config({ path: "/Users/youngjaekim/Desktop/freeStore/.env" });
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({ suceess: true, message: "Hello" });
});

app.listen(5010, () => {
  console.log("==================================");
  connectDB();
  console.log("SERVER IS RUUNING");
});
