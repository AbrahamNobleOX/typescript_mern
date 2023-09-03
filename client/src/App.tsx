import { useState } from "react";
import "./App.css";
import { createDeck } from "./api/createDeck";

function App() {
  const [title, setTitle] = useState("");

  async function handleCreateDeck(e: React.FormEvent) {
    e.preventDefault();
    await createDeck(title);
    setTitle("");
  }

  return (
    <>
      <div className="App">
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
    </>
  );
}

export default App;
