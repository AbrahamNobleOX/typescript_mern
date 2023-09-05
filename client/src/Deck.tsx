import React, { useState, useEffect } from "react";
import "./Deck.css";
import { createCard } from "./api/createCard";
import { useParams } from "react-router-dom";
import { getDeck } from "./api/getDeck";
import { TDeck } from "./api/getDecks";
import { deleteCard } from "./api/deleteCard";

export default function Deck() {
  const [text, setText] = useState("");
  const { deckId } = useParams();
  const [deck, setDeck] = useState<TDeck | undefined>();
  const [cards, setCards] = useState<string[]>([]);

  async function handleCreateDeck(e: React.FormEvent) {
    e.preventDefault();

    // This is a destructuring assignment syntax. It means that you want to extract the cards property from the object returned by await createCard(deckId!, text) and assign its value to a new variable named serverCards.
    const { cards: serverCards } = await createCard(deckId!, text);
    setCards(serverCards);
    setText("");
  }

  useEffect(() => {
    async function fetchDeck() {
      if (!deckId) return;
      const newDeck = await getDeck(deckId);
      setDeck(newDeck);
      setCards(newDeck.cards);
    }
    fetchDeck();
  }, [deckId]);

  async function handleDeleteCard(index: number) {
    if (!deckId) {
      return;
    }

    const newDeck = await deleteCard(deckId, index);
    setCards(newDeck.cards);
  }

  return (
    <div className="Deck">
      <h1>{deck?.title}</h1>

      <ul className="cards">
        {cards.map((card, index) => (
          <li key={index}>
            <button onClick={() => handleDeleteCard(index)}>X</button>
            {card}
          </li>
        ))}
      </ul>

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
