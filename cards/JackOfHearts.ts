import { AbilityCard } from '../interfaces.ts';

class JackOfHearts implements AbilityCard {
    name: "Jack of Hearts";
    suit: "hearts";
    color: "red";
    value: "J";
    deckNumber: 36;
    img: "static/jack_of_hearts.png";

    PrimaryAbility(): void{};
    SecondaryAbility(): void {};

  }