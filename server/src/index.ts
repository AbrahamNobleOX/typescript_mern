import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import cors from "cors";
import { createDeckController } from "./controllers/createDeckController";
import { getDecksController } from "./controllers/getDecksController";
import { deleteDeckController } from "./controllers/deleteDeckController";

const app = express();
config();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});

app.post("/decks", createDeckController);
app.get("/decks", getDecksController);
app.delete("/decks/:deckId", deleteDeckController);

const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.MONGO_URL!).then(() => {
  console.log(`listening on port ${PORT}`);
  app.listen(PORT);
});
