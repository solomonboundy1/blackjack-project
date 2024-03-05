import { AbilityCard } from "../interfaces.ts";

class EightOfSpades implements AbilityCard {
  name: "Eight of Spades";
  suit: "spades";
  color: "black";
  value: "8";
  deckNumber: 46;
  img: "static/8_of_spades.png";

  PrimaryAbility(): void {}
}
