import { API_URL } from "./config";
import { TDeck } from "./getDecks";

/*
Return Type:

"createCard()" returns a Promise that resolves to a single object of type TDeck. It implies that this function is likely used to create a card and return the deck containing the newly created card.

"getDecks()" returns a Promise that resolves to an array of objects of type TDeck. It implies that this function is used to retrieve and return a list of decks.
*/

export async function createCard(deckId: string, text: string): Promise<TDeck> {
  const response = await fetch(`${API_URL}/decks/${deckId}/cards`, {
    method: "POST",
    body: JSON.stringify({
      text,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}
