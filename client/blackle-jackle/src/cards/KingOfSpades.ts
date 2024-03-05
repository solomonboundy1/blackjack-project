import { AbilityCard } from "../interfaces.ts";

class KingOfSpades implements AbilityCard {
  name: "King of Spades";
  suit: "spades";
  color: "black";
  value: "K";
  deckNumber: 51;
  img: "static/king_of_spades.png";

  PrimaryAbility(): void {}
}
