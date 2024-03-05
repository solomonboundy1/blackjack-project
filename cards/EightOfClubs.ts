import { AbilityCard } from "../interfaces.ts";

class EightOfClubs implements AbilityCard {
  name: "Eight of Clubs";
  suit: "clubs";
  color: "black";
  value: "8";
  deckNumber: 7;
  img: "static/8_of_clubs.png";

  PrimaryAbility(): void {}
}
