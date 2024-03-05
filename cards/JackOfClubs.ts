import { AbilityCard } from "../interfaces.ts";

class JackOfClubs implements AbilityCard {
  name: "Jack of Clubs";
  suit: "clubs";
  color: "black";
  value: "J";
  deckNumber: 10;
  img: "static/jack_of_clubs.png";

  PrimaryAbility(): void {}
}
