import { AbilityCard } from '../interfaces.ts'

class TwoOfDiamonds implements AbilityCard {
    name: "Two of Diamonds";
    suit: "diamonds";
    color: "red";
    value: "2";
    deckNumber: 14;
    img: "static/2_of_diamonds.png";

    PrimaryAbility(): void {};
    SecondaryAbility(): void {};
  }