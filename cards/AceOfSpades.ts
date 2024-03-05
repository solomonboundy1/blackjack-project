import { AbilityCard } from "../interfaces.ts";

class AceOfSpades implements AbilityCard {
  name: "Ace of Spades";
  suit: "spades";
  color: "black";
  value: "A";
  deckNumber: 52;
  img: "static/ace_of_spades.png";

  PrimaryAbility(): void {}
}
