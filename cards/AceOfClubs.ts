import { AbilityCard } from "../interfaces.ts";

class AceOfClubs implements AbilityCard {
  name: "Ace of Clubs";
  suit: "clubs";
  color: "black";
  value: "A";
  deckNumber: 13;
  img: "static/ace_of_clubs.png";

  PrimaryAbility(): void {}
  SecondaryAbility(): void {}
}
