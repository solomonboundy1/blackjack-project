import { AbilityCard } from "../interfaces.ts";

class QueenOfSpades implements AbilityCard {
  name: "Queen of Spades";
  suit: "spades";
  color: "black";
  value: "Q";
  deckNumber: 50;
  img: "static/queen_of_spades.png";

  PrimaryAbility(): void {}
}
