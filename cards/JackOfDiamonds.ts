import { AbilityCard } from '../interfaces.ts';

class JackOfDiamonds implements AbilityCard {
    name: "Jack of Diamonds";
    suit: "diamonds";
    color: "red";
    value: "J";
    deckNumber: 23;
    img: "static/jack_of_diamonds.png";

    PrimaryAbility(): void{};
    SecondaryAbility(): void{};
}