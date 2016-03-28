console.log("...loaded");

var yahtzeeGame = {};

var diceImages = [ "img/dice-one.png","img/dice-two.png","img/dice-three.png", "img/dice-four.png", "img/dice-five.png", "img/dice-six.png"];


//***************TOP RULES***************
//Ones is the sum of the dices with number 1
yahtzeeGame.ones = function() {
  if (rolls[i] === 1) {
    console.log('You have ones!');
  }
};

//Twos is the sum of the dices with number 2

//Threes is the sum of the dices with number 3

//Fours is the sum of the dices with number 4

//Fives is the sum of the dices with number 5

//Sixes is the sum of the dices with number 6

//get totalTop

//topBonus, if topTotal is 63 or more, a bonus of 35 is added to the upper section

//get upperTotal if topBonus has been applied, if not, upperTotal is the same value as totalTop

//***************BOTTOM RULES***************
//three-of-a-kind sum of three die that have the same value

//four-of-a-kind sum of four die that have the same value

//full house is  three of one number and two of another...adds 25 points

//small straight if four sequential dice (1234, 2345, 3456)...adds 30 points

//large straight five seqential dice (12345, 23456)...adds 40 points

//yahtzee all dice are the same value

//chance sum of all the dice or any combination

//yahtzee bonus

//get totalLower

//get combinedTotal

//***************FUNCTIONS***************

//create a counter for number or rolls
yahtzeeGame.counter = function() {
  if (this.$countNumber.text()) {
    this.rollsAvailable();
  }
};

//everytime the button gets clicked, subtract one number from the rolls until there are no more rolls left.
yahtzeeGame.rollsAvailable = function() {

  $('#intro-text').css("display","none");
  var count = parseInt(this.$countNumber.text());
  if(count > 1) {
    count = count - 1;
    this.$countNumber.text(count);
  } else {
    this.$countNumber.text(0);
    $('#button-roll').css("display","none");
  }
};


//player rolls the dice using the button and shows value of that dice
yahtzeeGame.randomImg = function() {

  $('#rolling-area').empty();
  var rolls = [];

  for (var i = 0; i < 5; i++) {
    var newImage = $('<img>').addClass('dice');
    var randomNumber = Math.floor(Math.random() * diceImages.length);
    rolls.push(randomNumber + 1);
    newImage.attr('src', '' + diceImages[randomNumber]);
    newImage.attr('data',(randomNumber+1));
    $('#rolling-area').append(newImage);
  };
  console.log(rolls);

};

//handle the way dice can be selected
yahtzeeGame.diceSelectorHandler = function() {
  var scope = this;
  diceImages.on("click", function(e) {
    var findDiceValue = $(this).find(rolls)
    console.log(findDiceValue);
  });
};

//handle the form that contains the roll button
yahtzeeGame.diceRollFormHandler = function() {
  var scope = this;
  this.$roll.on("submit", function(e) {
    var rollDiceInput = $(this).find('input');
    scope.randomImg();
    e.preventDefault();
    scope.counter();
  });
};

yahtzeeGame.init = function($roll, $countNumber) {//initializing method, what happens when you start the game
  //no dice are visible, only the button to roll
  this.diceSelectorHandler();
  this.$countNumber = $countNumber;
  this.$roll = $roll;
  this.diceRollFormHandler();
};

//create an event click for how the die get selected



// //on first roll of each player, a button will show up that allows you to roll


//create a computer to play against?


//select dice to keep
  //if dice has been clicked, do not generate another roll for die

//create a button with an event click that "rolls" the dice
  //on click, css transition to make them move randomely


//user is able to select the rule which they want to apply their points and points will show in that box

//computer rolls

//computer chooses the best option with the dice it rolls

//If a rule has already been used, it cannot be used again

//once a user has used all the available rules, the game ends and declares a winner

//when you click on game rules, a lightbox appears on the screen with all the rules







//     Defining Stuff
// **************************
//     Using Stuff

$(function() {
  var $countNumber = $('#countdown-rolls');
  var $roll = $('#roll-dice-turn');
  yahtzeeGame.init($roll, $countNumber);
  // yahtzeeGame.randomImg();
  // yahtzeeGame.rollEvent();
  //the only time you want to see id or class is here!! NOT above

});
