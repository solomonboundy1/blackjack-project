import { AbilityCard } from "../interfaces.ts";

class TwoOfSpades implements AbilityCard {
  name: "Two of Spades";
  suit: "spades";
  color: "black";
  value: "2";
  deckNumber: 40;
  img: "static/2_of_spades.png";

  PrimaryAbility(): void {}
  SecondaryAbility(): void {}
}
