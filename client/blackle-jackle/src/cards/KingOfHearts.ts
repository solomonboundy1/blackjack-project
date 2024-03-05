import { AbilityCard } from '../interfaces.ts';

class KingOfHearts implements AbilityCard {
    name: "King of Hearts";
    suit: "hearts";
    color: "red";
    value: "K";
    deckNumber: 38;
    img: "static/king_of_hearts.png";

    PrimaryAbility(): void{};
  }