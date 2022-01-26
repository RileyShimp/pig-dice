function Player(total, roll, turn) {
  this.total = total;
  this.roll = roll;
  this.turn = turn;
}

Player.prototype.diceRoll = function() { 
  this.roll = Math.floor((Math.random() * 6) + 1);
  if (this.roll === 1) {
    this.roll = 0;
    return this.endTurn();
  }
  this.turn += this.roll;
  return this;
}

Player.prototype.endTurn = function() {
  this.total += this.turn;
  this.turn = 0;
  this.roll = 0;
  return this;
}

let player1 = new Player(0, 0, 0);
let player2 = new Player(0, 0, 0);

$(document).ready(function(){
  

})

  $("button#roll1").on("click")