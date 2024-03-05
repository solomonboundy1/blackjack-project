import { AbilityCard } from '../interfaces.ts';

class KingOfDiamonds implements AbilityCard {
    name: "King of Diamonds";
    suit: "diamonds";
    color: "red";
    value: "K";
    deckNumber: 25;
    img: "static/king_of_diamonds.png";

    PrimaryAbility(): void{};
  }