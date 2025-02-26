// External
import { Request, Response } from "express";
import express from "express";
import dotenv from "dotenv";
// Internal
import connectDB from "./lib/connectDB.ts";
// Internal - Routes

// // Internal -Setting for configuration
dotenv.config({ path: "/Users/youngjaekim/Desktop/freeStore/.env" });
const app = express();
// Setting for the middleware
app.use(express.json());
const PORT = process.env.PORT;
// Commment Version Control
app.get("/api/v1/auth", (req: Request, res: Response) => {
  return res.status(200).json({ suceess: true, message: "Hello" });
});
app.get("/", (req, res) => {
  return res.status(200).json({ success: true, message: "Hello" });
});

app.listen(PORT, () => {
  console.log("==================================");
  connectDB();
  console.log(`SERVER IS RUUNING IN ${PORT}`);
});
