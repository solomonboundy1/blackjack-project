import { AbilityCard } from '../interfaces.ts';

class QueenOfHearts implements AbilityCard {
    name: "Queen of Hearts";
    suit: "hearts";
    color: "red";
    value: "Q";
    deckNumber: 37;
    img: "static/queen_of_hearts.png";

    PrimaryAbility(): void{};
  }