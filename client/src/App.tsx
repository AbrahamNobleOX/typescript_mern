import { useState, useEffect } from "react";
import "./App.css";
import { createDeck } from "./api/createDeck";
import { getDecks, TDeck } from "./api/getDecks";

function App() {
  const [title, setTitle] = useState("");
  const [decks, setDecks] = useState<TDeck[]>([]);

  async function handleCreateDeck(e: React.FormEvent) {
    e.preventDefault();
    await createDeck(title);
    setTitle("");
    fetchDecks();
  }

  async function fetchDecks() {
    const newDecks = await getDecks();
    setDecks(newDecks);
  }

  useEffect(() => {
    fetchDecks();
  }, []);

  return (
    <>
      <div className="container">
        <div className="App">
          <ul className="decks">
            {decks.map((deck) => (
              <li key={deck._id}>{deck.title}</li>
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
