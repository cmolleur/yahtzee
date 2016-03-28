console.log("...loaded");

var yahtzeeGame = {};

//***************TOP RULES***************
//Ones is the sum of the dices with number 1

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

//get totalLower

//get combinedTotal

//***************FUNCTIONS***************

//player rolls the dice

//dice generate 5 random values from 1-6
// yahtzeeGame.randomRoll = function() {
//   for (var i = 0; i < 5; i++) {
//     var diceValue = Math.floor((Math.random() * 6) + 1);
//     console.log(diceValue);
//   }
// };

var diceImages = ["img/dice-one.png","img/dice-two.png","img/dice-three.png", "img/dice-four.png", "img/dice-five.png", "img/dice-six.png"];
// var newImage = $('<img>').addClass('dice');

yahtzeeGame.randomImg = function() {

  for (var i = 0; i < 5; i++) {
    var newImage = $('<img>').addClass('dice');
    var randomNumber = Math.floor(Math.random() * diceImages.length);
    newImage.attr('src', '' + diceImages[randomNumber]);
    newImage.css("height","15%");
    $('#dice-section').append(newImage);
    console.log(newImage);
  };

};
//create a computer to play against

//create an event click for how the die get selected

//select dice to keep
  //if dice has been clicked, do not generate another roll for die

//create a button with an event click that "rolls" the dice
  //on click, css transition to make them move randomely

//create a counter for number or rolls that doesn't exeed 3 rolls, then the computer rolls

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
  yahtzeeGame.randomImg();
  //the only time you want to see id or class is here!! NOT above

});
