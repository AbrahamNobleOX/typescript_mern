import React, { useState } from "react";
import "./Deck.css";
import { createCard } from "./api/createCard";
import { useParams } from "react-router-dom";

export default function Deck() {
  const [text, setText] = useState("");
  const { deckId } = useParams();

  async function handleCreateDeck(e: React.FormEvent) {
    e.preventDefault();
    await createCard(deckId!, text);
    setText("");
  }

  return (
    <div className="Deck">
      <h1>Deck title</h1>

      <form onSubmit={handleCreateDeck}>
        <label htmlFor="card-text">Card Text</label>
        <input
          id="card-text"
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setText(e.target.value);
          }}
        />
        <button>Create Card</button>
      </form>
    </div>
  );
}
