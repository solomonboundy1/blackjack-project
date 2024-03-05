export interface Card {
  name: String;
  suit: String;
  color: String;
  value: String;
  deckNumber: Number;
  img: String;
}

export interface AbilityCard extends Card {
  PrimaryAbility(): void;
  SecondaryAbility?(): void;

}