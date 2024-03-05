import { AbilityCard } from '../interfaces.ts';

class AceOfDiamonds implements AbilityCard {
    name: "Ace of Diamonds";
    suit: "diamonds";
    color: "red";
    value: "A";
    deckNumber: 26;
    img: "static/ace_of_diamonds.png";

    PrimaryAbility(): void{};
    SecondaryAbility(): void {}
  }