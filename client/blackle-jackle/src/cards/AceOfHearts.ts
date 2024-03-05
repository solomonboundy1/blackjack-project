import { AbilityCard } from '../interfaces.ts';

class AceOfHearts implements AbilityCard {
    name: "Ace of Hearts";
    suit: "hearts";
    color: "red";
    value: "A";
    deckNumber: 39;
    img: "static/ace_of_hearts.png";

    PrimaryAbility(): void{};
    SecondaryAbility(): void {};
  }