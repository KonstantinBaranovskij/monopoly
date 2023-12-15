export class Player{
  #id;
  #balance;
  #position;
  #state;

  constructor(){
    this.#balance = 2000;
    this.#position = 0;
    this.#state = 1;
  }

  getId(){
    return this.#id;
  }

  getBalance(){
    return this.#balance;
  }

  getPosition(){
    return this.#position;
  }

  getState(){
    return this.#state;
  }

  changeBalance(sum){
    this.#balance += sum;
  }

  changePosition(step){
    this.#position += step;
  }

  toggleState(){
    this.#state ^= 1;
  }
}