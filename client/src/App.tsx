import { useState, useEffect } from "react";
import "./App.css";
import { createDeck } from "./api/createDeck";
import { getDecks, TDeck } from "./api/getDecks";
import { deleteDeck } from "./api/deleteDeck";

function App() {
  const [title, setTitle] = useState("");
  const [decks, setDecks] = useState<TDeck[]>([]);

  async function handleCreateDeck(e: React.FormEvent) {
    e.preventDefault();
    const deck = await createDeck(title);

    // Instead of triggering fetchDecks, update the decks state
    setDecks([...decks, deck]);
    setTitle("");
  }

  async function fetchDecks() {
    const newDecks = await getDecks();
    setDecks(newDecks);
  }

  useEffect(() => {
    fetchDecks();
  }, []);

  async function handleDeleteDeck(deckId: string) {
    await deleteDeck(deckId);

    // Instead of triggering fetchDecks, update the decks state
    setDecks(decks.filter((deck) => deck._id !== deckId));
  }

  return (
    <>
      <div className="container">
        <div className="App">
          <ul className="decks">
            {decks.map((deck) => (
              <li key={deck._id}>
                <button onClick={() => handleDeleteDeck(deck._id)}>X</button>
                {deck.title}
              </li>
            ))}
          </ul>
          <form onSubmit={handleCreateDeck}>
            <label htmlFor="deck-title">Deck Title</label>
            <input
              id="deck-title"
              value={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setTitle(e.target.value);
              }}
            />
            <button>Create Deck</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
