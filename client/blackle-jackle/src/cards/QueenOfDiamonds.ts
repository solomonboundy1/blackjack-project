import { AbilityCard } from '../interfaces.ts';

class QueenOfDiamonds implements AbilityCard {
    name: "Queen of Diamonds";
    suit: "diamonds";
    color: "red";
    value: "Q";
    deckNumber: 24;
    img: "static/queen_of_diamonds.png";

    PrimaryAbility(): void{};
  }