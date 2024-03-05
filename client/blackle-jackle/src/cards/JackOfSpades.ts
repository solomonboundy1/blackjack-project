import { AbilityCard } from "../interfaces.ts";

class JackOfSpades implements AbilityCard {
  name: "Jack of Spades";
  suit: "spades";
  color: "black";
  value: "J";
  deckNumber: 49;
  img: "static/jack_of_spades.png";

  PrimaryAbility(): void {}
  SecondaryAbility(): void {}
}
