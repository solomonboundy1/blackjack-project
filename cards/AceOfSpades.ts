import { Card } from "../interfaces.ts";

class AceOfSpades implements Card {
  name: "Ace of Spades";
  suit: "spades";
  color: "black";
  value: "A";
  deckNumber: 52;
  img: "static/ace_of_spades.png";
}
