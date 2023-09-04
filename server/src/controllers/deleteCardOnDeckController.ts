import { Request, Response } from "express";
import Deck from "../models/Deck";

export async function deleteCardOnDeckController(req: Request, res: Response) {
  const deckId = req.params.deckId;
  const index = req.params.index;

  const deck = await Deck.findById(deckId);

  if (!deck) {
    return res.status(400).send("no deck of this id exists");
  }

  // use the splice method to remove an element from an array
  // The 1 passed as the second argument to splice indicates that you want to remove one element at the specified index.
  deck.cards.splice(parseInt(index), 1);
  await deck.save();
  res.json(deck);
}
