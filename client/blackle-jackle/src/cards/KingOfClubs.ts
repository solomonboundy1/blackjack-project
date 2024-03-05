import { AbilityCard } from "../interfaces.ts";

class KingOfClubs implements AbilityCard {
  name: "King of Clubs";
  suit: "clubs";
  color: "black";
  value: "K";
  deckNumber: 12;
  img: "static/king_of_clubs.png";

  PrimaryAbility(): void {}
}
