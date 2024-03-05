import { AbilityCard } from '../interfaces.ts';

class EightOfHearts implements AbilityCard {
    name: "Eight of Hearts";
    suit: "hearts";
    color: "red";
    value: "8";
    deckNumber: 33;
    img: "static/8_of_hearts.png";

    PrimaryAbility(): void{};
  }
