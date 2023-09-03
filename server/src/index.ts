import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { config } from "dotenv";

const app = express();
config();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});

const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.MONGO_URL!).then(() => {
  console.log(`listening on port ${PORT}`);
  app.listen(PORT);
});
