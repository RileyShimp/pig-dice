// Business Logic

function Player(total, roll, turn) {
  this.total = total;
  this.roll = roll;
  this.turn = turn;
}

Player.prototype.diceRoll = function() { 
  this.roll = Math.floor((Math.random() * 6) + 1);
  if (this.roll === 1) {
    this.roll = 0;
    this.turn = 0;
    return this.endTurn();
  }
  this.turn += this.roll;
  return this;
}

Player.prototype.endTurn = function() {
  this.total += this.turn;
  this.turn = 0;
  this.roll = 0;
  victory();
  return this;
}

//UI LOGIC

function wait(ms)
{
    var d = new Date();
    var d2 = null;
    do { d2 = new Date(); }
    while(d2-d < ms);
}

function computer(){
  player2.diceRoll();
  computerRoll(player2);
  player2.diceRoll();
  computerRoll(player2);
  player2.diceRoll();
  computerRoll(player2);
  player2.endTurn();
  $("#buttons2").hide();
  $("#buttons1").show();
}

function roll(player) {
  $("#dice1").hide();
  $("#dice2").hide();
  $("#dice3").hide();
  $("#dice4").hide();
  $("#dice5").hide();
  $("#dice6").hide();
  $("#rowDice").show();
  if (player.roll === 0) {
    $("#dice1").show();
    $("#buttons1").toggle();
    $("#buttons2").toggle();
    if (ai === true) {
      computer();
      $("#p2Total").html(player2.total);
      $("#p2Turn").html(player2.turn);
    }
  } else if (player.roll === 2) {
    $("#dice2").show();
  } else if (player.roll === 3) {
    $("#dice3").show();
  } else if (player.roll === 4) {
    $("#dice4").show();
  } else if (player.roll === 5) {
    $("#dice5").show();
  } else if (player.roll === 6) {
    $("#dice6").show();
  }
}

function computerRoll(player) {
  $("#dice1").hide();
  $("#dice2").hide();
  $("#dice3").hide();
  $("#dice4").hide();
  $("#dice5").hide();
  $("#dice6").hide();
  $("#rowDice").show();
  if (player.roll === 0) {
    $("#dice1").show();
    $("#buttons1").show();
  } else if (player.roll === 2) {
    $("#dice2").show();
  } else if (player.roll === 3) {
    $("#dice3").show();;
  } else if (player.roll === 4) {
    $("#dice4").show();
  } else if (player.roll === 5) {
    $("#dice5").show();
  } else if (player.roll === 6) {
    $("#dice6").show();
  }
}

function victory() {
  if (player1.total >= 50) {
    $("#player1-wins").show();
    $("#game").hide();
  } if (player2.total >= 50) {
    $("#player2-wins").show();
    $("#game").hide();
  }
}

let player1 = new Player(0, 0, 0);
let player2 = new Player(0, 0, 0);
let ai = false;

$(document).ready(function() {
  $("button#computer").click(function(event) {
    event.preventDefault();
    ai = !ai;
    $("button#computer").hide();
    $("button#multiplayer").show();
  })
  $("button#multiplayer").click(function(event) {
    event.preventDefault();
    ai = !ai;
    $("button#multiplayer").hide();
    $("button#computer").show();
  })
  $("button#roll1").click(function(event) {
    event.preventDefault();
    player1.diceRoll();
    roll(player1);
    $("#p1Total").html(player1.total);
    $("#p1Turn").html(player1.turn);
  })
  $("button#end1").click(function(event) {
    event.preventDefault();
    player1.endTurn();
    $("#p1Total").html(player1.total);
    $("#p1Turn").html(player1.turn); 
    $("#buttons1").hide();
    $("#buttons2").show();
    $("#rowDice").hide();
    if (ai === true ){
      computer();
      $("#p2Total").html(player2.total);
      $("#p2Turn").html(player2.turn);
    }
  })
  $("button#roll2").click(function(event) {
    event.preventDefault();
    player2.diceRoll();
    roll(player2);
    $("#p2Total").html(player2.total);
    $("#p2Turn").html(player2.turn);
  })
  $("button#end2").click(function(event) {
    event.preventDefault();
    player2.endTurn();
    $("#p2Total").html(player2.total);
    $("#p2Turn").html(player2.turn);
    $("#buttons2").hide();
    $("#buttons1").show();
    $("#rowDice").hide();
  })
})