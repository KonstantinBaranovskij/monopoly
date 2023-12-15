import { Player } from "./player";
import { randomInt } from "crypto";
import { Card } from "./card";

export class Monolopy{
  #players: Array<Player> = [];
  #cards: Array<Card> = [];
  #currentPlayer = 0;

  constructor(){
    let n = 5;
    // Запрос на количество игроков нужен
    for (let i = 0; i < n; ++i){
      this.#players.push(new Player());
    }
    for (let i = 0; i < 40; ++i){
      this.#cards.push(new Card(i));
    }
  }
  
  getPlayer(){
    return this.#players[this.#currentPlayer];
  }

  makeAction(){
    let actionId;
    // Запрос действия
    switch(actionId){
      case 0: this.#players[this.#currentPlayer].changePosition(randomInt(1, 6) + randomInt(1, 6)); break; // Бросок кубиков
      case 1: this.#players[this.#currentPlayer].changeBalance(
                this.#cards[this.#players[this.#currentPlayer].getPosition()].getPrice() * -1
              ); 
              this.#cards[this.#players[this.#currentPlayer].getPosition()].setOwner(this.#players[this.#currentPlayer]); break; // Покупка
      case 2: this.#players[this.#currentPlayer].changeBalance(
                this.#cards[this.#players[this.#currentPlayer].getPosition()].getPrice() / 2
              ); 
              this.#cards[this.#players[this.#currentPlayer].getPosition()].setOwner(null); break; // Продажа
      
    }
  }
  
  nextPlayer(){
    this.#currentPlayer = (this.#currentPlayer + 1) % this.#players.length;
  }
}