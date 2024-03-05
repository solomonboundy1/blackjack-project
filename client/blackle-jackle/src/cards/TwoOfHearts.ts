import { AbilityCard } from '../interfaces.ts'

class TwoOfHearts implements AbilityCard {
    name: "Two of Hearts";
    suit: "hearts";
    color: "red";
    value: "2";
    deckNumber: 27;
    img: "static/2_of_hearts.png";

    PrimaryAbility(): void {};
    SecondaryAbility(): void {};
  }