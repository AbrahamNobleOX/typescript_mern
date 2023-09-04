import { API_URL } from "./config";

// Define a TypeScript type for a deck, specifying its structure
export type TDeck = {
  title: string;
  cards: string[];
  _id: string;
};

// Define an asynchronous function to fetch decks from an API
export async function getDecks(): Promise<TDeck[]> {
  // Make a network request to fetch decks from the API_URL
  const response = await fetch(`${API_URL}/decks`);

  // Convert the response body to a JSON object and return it as a Promise
  return response.json(); // Returns a Promise that resolves to an array of objects with the TDeck structure
}
