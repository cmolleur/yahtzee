console.log("...loaded");

var yahtzeeGame = {};

var diceImages = [ "img/dice-one.png","img/dice-two.png","img/dice-three.png", "img/dice-four.png", "img/dice-five.png", "img/dice-six.png"];

// var activeDice = $(".active");
var sum = 0;



yahtzeeGame.checkUpperRules = function( value ) {

  var diceWithValue = $('[data-value=' + value + ']');
  var active = $('.active');
  var checked = false;

  if (diceWithValue.length === active.length){
    console.log("you have " + active.length + " checked");
    checked = true;
  }
  return checked;



}


//***************TOP RULES***************

yahtzeeGame.upperSectionRule = function(diceValue) {
  sum = $('.active').length * diceValue;
  if (this.checkUpperRules(diceValue)) {
  }
//to "add" them together, mulitple the number of active dice by value
//something * 1

//Ones is the sum of the dices with number 1
yahtzeeGame.ones = function() {


  // sum = $('.active').length * 1;
  // if (this.checkUpperRules(1)) {
  //   $("#ones").click(function() {
  //     $(this).html(sum)
  //   });

    // console.log(sum);
  }

};


//Twos is the sum of the dices with number 2
yahtzeeGame.twos = function() {

};
//Threes is the sum of the dices with number 3
yahtzeeGame.threes = function() {

};
//Fours is the sum of the dices with number 4
yahtzeeGame.fours = function() {

};
//Fives is the sum of the dices with number 5
yahtzeeGame.fives = function() {

};
//Sixes is the sum of the dices with number 6
yahtzeeGame.sixes = function() {

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
    // //on first roll of each player, a button will show up that allows you to roll
    $('#button-roll').css("visibility","hidden");
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
      newImage.attr('data-value',(randomNumber+1));
      $('#rolling-area').append(newImage);
    };
    yahtzeeGame.selection();

//select dice to keep
  //if dice has been clicked, do not generate another roll for die
  }else {

    var rollTheDice = $("[data-selection=false]");

    // JUST to generate the random values
    //change end condition
    for (var i = 0; i < rollTheDice.length; i++) {
      var randomNumber = Math.floor(Math.random() * diceImages.length);
      rolls.push(randomNumber+1);
    };

    for (var i = 0; i < rollTheDice.length; i++) {
      $(rollTheDice[i]).attr('src', '' + diceImages[rolls[i]-1]);
      $(rollTheDice[i]).attr('data-value',(rolls[i]));
    };



      // // var rollTheDice = $("[data-selection=false]");
      // // console.log(rollTheDice);
      //  //change to point only at dice that are not selected, I'll get the name when I finishing selection function below
      // rollTheDice.each(function( index, dice ) {
      //   // console.log(dice);
      //   var rand = randomNumber;
      //   // console.log($(this).data());
      //
      //   console.log(rand);
      //   $(dice).attr('src', '' + diceImages[rand]);
      //   $(dice).attr('data-value',(rand+1));
      // });


  }
  console.log(rolls);
};


//select dice
//create an event click for how the die get selected
yahtzeeGame.selection = function() {//toggle between data-selection true or false, event listener for the dice

  $(".dice").on("click", function() {
    $(this).attr('data-selection', ($(this).attr('data-selection') == "false" ? true : false));
    $(this).toggleClass("active");
  });

};

//clearing the rolling-section when a score is placed
yahtzeeGame.score = function() {
  // var score = 0;
  // $(".active").each(function() {
  //   score += parseInt($(this).attr("data-value"));
  // });
  // console.log($(this));
  // $(this).text(score)
  // $(this).off();
  // $(this).parent().css('background-color','#e0e0e0')
  //
  // $('')
  // yahtzeeGame.randomImg();
};

//adds the sum of the upper section
yahtzeeGame.totalTop = function() {
  score = 0;
  if ($(".score-amount-top")) {
    $('.score-amount-top').each(function(){
      sum += parseFloat($(this).text());
      $("#total-top").text(sum);
    });
  }else {
    score = 0;

  }
};

yahtzeeGame.eventHandlerTop = function() {

  $(".score-amount-top").click(function(e) {//keep outside
//conditional starts here
  var dieValue = parseInt($(".active").attr("data-value"));
  var ones = $("#ones");

//uppervalue of that text

  if ((dieValue === 1 && $(e.target).attr("id") === 'ones') || (dieValue === 2 && $(e.target).attr("id") === 'twos') || (dieValue === 3 && $(e.target).attr("id") === 'threes') || (dieValue === 4 && $(e.target).attr("id") === 'fours') || (dieValue === 5 && $(e.target).attr("id") === 'fives') || (dieValue === 6 && $(e.target).attr("id") === 'sixes')) {
  // if ((condition for ones AND click on ones) OR (condition for twos AND click on twos) OR ... )

    var score = 0;

    $(".active").each(function() {
      score += parseInt($(this).attr("data-value"));
    });
    console.log($(this));
    $(this).text(score)
    $(this).off();
    $(this).parent().css('background-color','#e0e0e0')

    $('#rolling-area').empty();
    yahtzeeGame.randomImg();
    $('#countdown-rolls').text(2);
    $('#button-roll').css("visibility", "visible");

  }else {
    var score = 0;
  }

//

  });
};

//handle the form that contains the roll button
yahtzeeGame.diceRollFormHandler = function() {
  var scope = this;
  this.$roll.on("submit", function(e) {
    e.preventDefault();
    var rollDiceInput = $(this).find('input');
    scope.randomImg();
    scope.counter();
  });
};

yahtzeeGame.init = function($roll, $countNumber) {//initializing method, what happens when you start the game

  //no dice are visible, only the button to roll
  this.$countNumber = $countNumber;
  this.$roll = $roll;
  this.diceRollFormHandler();
};


//create a button with an event click that "rolls" the dice
  //on click, css transition to make them move randomely


//user is able to select the rule which they want to apply their points and points will show in that box

//If a rule has already been used, it cannot be used again

//once a user has used all the available rules, the game ends and declares a winner

//when you click on game rules, a lightbox appears on the screen with all the rules


//     Defining Stuff
// **************************
//     Using Stuff


$(function() {
  yahtzeeGame.totalTop();
  yahtzeeGame.eventHandlerTop();
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
