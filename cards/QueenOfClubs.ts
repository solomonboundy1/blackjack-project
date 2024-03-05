import { AbilityCard } from "../interfaces.ts";

class QueenOfClubs implements AbilityCard {
  name: "Queen of Clubs";
  suit: "clubs";
  color: "black";
  value: "Q";
  deckNumber: 11;
  img: "static/queen_of_clubs.png";

  PrimaryAbility(): void {}
}
