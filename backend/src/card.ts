import { Player } from "./player";

const cardRents = [
  
];

const cardNames = [
  "Тюмень", "Самара", 
  "Калуга", "Пермь", "Томск",
  "Архангельск", "Челябинск", "Нижний Новгород"
] // по-хорошему нужен будет запрос, возвращающий пак карт

const cardPrices = [
  60, 60, 
  100, 100, 120, 
  140, 140, 160
];

export class Card{
  #id;
  #name;
  #price;
  #rents
  #ownedBy: Player;
  #upgrades;
  
  constructor(id){
    this.#id = id;
    this.#price = cardPrices[id];
    this.#name = cardNames[id];
    this.#rents = cardRents[id];
    this.#ownedBy = null;
    this.#upgrades = 0;
  }

  getId(){
    return this.#id;
  }

  getName(){
    return this.#name;
  }

  getPrice(){
    return this.#price;
  }

  getRent(){
    return this.#rents[this.#upgrades];
  }

  getOwnedBy(){
    return this.#ownedBy;
  }

  setOwner(player){
    this.#ownedBy = player;
  }
}