import { AbilityCard } from '../interfaces.ts';

class EightOfDiamonds implements AbilityCard {
    name: "Eight of Diamonds";
    suit: "diamonds";
    color: "red";
    value: "8";
    deckNumber: 20;
    img: "static/8_of_diamonds.png";

    PrimaryAbility(): void{};
  }