import React from "react"
import Card from "./Card"

export default ({
  column,
  cards,
  columnIndex,
  onMoveRight,
  onMoveLeft,
  onAddCard
}) => (
  <div className="column">
    <h1>{column.name}</h1>
    {cards.map((card, cardIndex) => (
      <Card
        key={cardIndex}
        card={card}
        cardIndex={cardIndex}
        canMoveLeft={columnIndex !== 0}
        canMoveRight={columnIndex !== 2}
        onMoveLeft={() => onMoveLeft(card.id)}
        onMoveRight={() => onMoveRight(card.id)}
      />
    ))}
    <button onClick={onAddCard}>+</button>
  </div>
)
