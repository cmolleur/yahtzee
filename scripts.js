console.log("...loaded");

var yahtzeeGame = {};

var diceImages = [ "img/dice-one.png","img/dice-two.png","img/dice-three.png", "img/dice-four.png", "img/dice-five.png", "img/dice-six.png"];

var activeDice = $(".active");

var sum = 0;
//***************TOP RULES***************
//Ones is the sum of the dices with number 1
yahtzeeGame.ones = function() {

  if ($('[data="1"]')) {
    console.log("You've selected a one!");
  };
  $('#ones').html(sum);

};

//Twos is the sum of the dices with number 2
yahtzeeGame.twos = function() {
  if (rolls[i] === 2) {
    console.log('You have twos!');
  }
};
//Threes is the sum of the dices with number 3
yahtzeeGame.threes = function() {
  if (rolls[i] === 3) {
    console.log('You have threes!');
  }
};
//Fours is the sum of the dices with number 4
yahtzeeGame.fours = function() {
  if (rolls[i] === 4) {
    console.log('You have fours!');
  }
};
//Fives is the sum of the dices with number 5
yahtzeeGame.fives = function() {
  if (rolls[i] === 5) {
    console.log('You have fives!');
  }
};
//Sixes is the sum of the dices with number 6
yahtzeeGame.sixes = function() {
  if (rolls[i] === 6) {
    console.log('You have sixes!');
  }
};
//get totalTop
yahtzeeGame.scoreUpper = function() {
  var sum = 0;
  $('.score-amount-top').each(function(){
    sum += parseFloat($(this).text());  //Or this.innerHTML, this.innerText
});
};

//topBonus, if topTotal is 63 or more, a bonus of 35 is added to the upper section

//get upperTotal if topBonus has been applied, if not, upperTotal is the same value as totalTop

//***************BOTTOM RULES***************
//three-of-a-kind sum of three die that have the same value
// yahtzeeGame.threeOfAKind = function() {
//   if (data === ) {
//
//   }
// };

//four-of-a-kind sum of four die that have the same value

//full house is  three of one number and two of another...adds 25 points

//small straight if four sequential dice (1234, 2345, 3456)...adds 30 points
yahtzeeGame.smStraight = function() {
  if (data === 1234 || data === 2345 || data === 3456) {

  }
};

//large straight five seqential dice (12345, 23456)...adds 40 points
yahtzeeGame.lgStraight = function() {
  if (data === 12345 || data === 23456) {

  }
};

//yahtzee all dice are the same valueyahtzeeGame.smStraight = function() {
yahtzeeGame.yahtzee = function() {
  if (data === 11111 || data === 22222 || data === 33333 || data === 44444 || data === 55555 || data === 66666) {

  }
};


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

  var rolls = [];

  if ($(".dice").length === 0) {
    for (var i = 0; i < 5; i++) {
      var newImage = $('<img>').addClass('dice');
      var randomNumber = Math.floor(Math.random() * diceImages.length);
      rolls.push(randomNumber + 1);
      newImage.attr('src', '' + diceImages[randomNumber]);
      newImage.attr('data-selection', false);
      newImage.attr('data',(randomNumber+1));
      $('#rolling-area').append(newImage);
    };
    yahtzeeGame.selection();
  }else {
    for (var i = 0; i < 5; i++) { //change end condition
      var randomNumber = Math.floor(Math.random() * diceImages.length);
      rolls.push(randomNumber + 1);
      var rollTheDice = $("[data-selection=false]"); //change to point only at dice that are not selected, I'll get the name when I finishing selection function below
      rollTheDice.each(function() {
        $(this).attr('src', '' + diceImages[randomNumber]);
      });
      rollTheDice.attr('data',(randomNumber+1));
    };
  }
  console.log(rolls);
};
//select dice
yahtzeeGame.selection = function() {//toggle between data-selection true or false, event listener for the dice

  $(".dice").on("click", function() {
    $(this).attr('data-selection', ($(this).attr('data-selection') == "false" ? true : false));
    $(this).toggleClass("active");
  });

   //toggling between selection
  // //data seleted attribute, add a class that will put a border on

};



//handle the way dice can be selected
yahtzeeGame.diceSelectorHandler = function() {
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

  var $dice  = $(".dice")
  var $countNumber = $('#countdown-rolls');
  var $roll = $('#roll-dice-turn');
  yahtzeeGame.init($roll, $countNumber);

  // yahtzeeGame.select = function() {
  //   var newImage = $('<img>').addClass('dice');
  //   $(".dice").on("click",function() {
  //     console.log("You clicked me!");
  //   });
  // };
  // yahtzeeGame.select();

  //the only time you want to see id or class is here!! NOT above

});
