import { AbilityCard } from "../interfaces.ts";

class TwoOfClubs implements AbilityCard {
  name: "Two of Clubs";
  suit: "clubs";
  color: "black";
  value: "2";
  deckNumber: 1;
  img: "static/2_of_clubs.png";

  PrimaryAbility(): void {}
  SecondaryAbility(): void {}
}
