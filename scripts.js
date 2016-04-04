console.log("I apologize in advance for the atrocious mess that is my code...");

var yahtzeeGame = {};

var diceImages = [ "img/dice-one.png","img/dice-two.png","img/dice-three.png", "img/dice-four.png", "img/dice-five.png", "img/dice-six.png"];



var finishedScore = $(".final");

//if all divs with a class of final not empty
yahtzeeGame.gameFinished = function() {
  if ($(".filled").length == 12) {
    yahtzeeGame.winOrLose();
  }
};

//find the grandTotal of total upper and total lower
yahtzeeGame.winOrLose = function() {
  var finalTop = $("#total-top").text();
  var finalBottom = $("#score-amount-lower").text();
  var grandTotal = parseInt(finalTop) + parseInt(finalBottom);

  console.log(finalTop, finalBottom, grandTotal)
  //if they won, show win screen
    if ( grandTotal >= 200) {
      $('#end').css("visibility", "visible");
  //if they lost, show lose screen
    }else {
      $('#end').css("visibility", "visible");
      $(".winner").text("You lost!");
      $(".sub-text").text("You didn't get 200 points or higher")
    }
};



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

//create a counter for number or rolls
yahtzeeGame.counter = function() {
  if (this.$countNumber.text()) {
    this.rollsAvailable();
  }
};

//everytime the button gets clicked, subtract one number from the rolls until there are no more rolls left.

yahtzeeGame.rollsAvailable = function() {

  $('#intro-text').text("Roll again, or select a score box");
  var count = parseInt(this.$countNumber.text());
  if(count > 1) {
    count = count - 1;
    this.$countNumber.text(count);
  } else {
  $('#intro-text').text("Select a score box");
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
  }
  // console.log(rolls);
};


//select dice
//create an event click for how the die get selected
yahtzeeGame.selection = function() {//toggle between data-selection true or false, event listener for the dice

  $(".dice").on("click", function() {
    $(this).attr('data-selection', ($(this).attr('data-selection') == "false" ? true : false));
    $(this).toggleClass("active");
  });

};


//adds the sum of the upper section
yahtzeeGame.totalTop = function() {
  var scoreTop = 0;
  if ($(".score-amount-top")) {
    $('.score-amount-top').each(function(){
      scoreTop += parseFloat($(this).text()) || 0;
      $(".score-amount-total").text(scoreTop);
    });
  }
  // else {
  //   scoreTop = 0;
  // }
};

yahtzeeGame.totalBottom = function() {
  var scoreBottom = 0;
  if ($(".score-amount-bottom")) {
    $('.score-amount-bottom').each(function(){
      scoreBottom += parseFloat($(this).text()) || 0;
      $("#score-amount-lower").text(scoreBottom);
    });
  }
  // else {
  //   scoreTop = 0;
  // }
};

yahtzeeGame.grandTotal = function() {}


yahtzeeGame.scoreAddition = function() {
  $('#rolling-area').empty();
  yahtzeeGame.randomImg();
  $('#countdown-rolls').text(2);
  $('#button-roll').css("visibility", "visible");
};


//checks for 3 of a kind, 4 of a kind, full house, yahtzee
yahtzeeGame.getDiceMultiples = function(){

  var active = $(".active");

  var multiples = {};

  active.each(function(index, el) {
    var number = $(el).attr("data-value");
    if (multiples.hasOwnProperty(number)) {
      multiples[number] += 1;
    }else {
      multiples[number] = 1;
    }
  });
  return multiples;
}

yahtzeeGame.allNumbersSame = function(value, dieArray) {
  var allSame = true;
  for (var i = 0; i < dieArray.length; i++) {
    if (dieArray[i] != value) {
      allSame = false;
    }
  }
  return allSame;
};


yahtzeeGame.straightChecker = function(dieArray) {
  var isStraight = true;
  dieArray.sort();
  for (var i = 0; i < dieArray.length - 1; i++) {
    if (dieArray[i] !== (dieArray[i + 1] - 1)) {
      isStraight = false;
    }
  }
  return isStraight;
};


var activeDice = $(".active");

yahtzeeGame.reloadClick = function() {
   $("#restart-button").click(function() {
     location.reload();
});  

//handles ALLLLLL the dice rules...sorry this is rediculously long and messy
yahtzeeGame.eventHandlerClickScore = function() {

  //upper section scoring
  $(".score-amount-top").click(function(e) {//keep outside
      //conditional starts here
      var dieValue = parseInt($(".active").attr("data-value")) || 0;
      var ones = $("#ones");

      var activeDice = $(".active");
      var dieValues = [];
      for (var i = 0; i < activeDice.length; i++) {
        dieValues.push(parseInt(activeDice.eq(i).attr("data-value")));
      };


      //uppervalue of that text
      // console.log($(e.target).attr("id") === '3-of-a-kind');

          //************checks for selected ones
      if ((dieValue === 1 && $(e.target).attr("id") === 'ones' &&
          yahtzeeGame.allNumbersSame(1, dieValues)) ||
          //************checks for selected twos
          (dieValue === 2 && $(e.target).attr("id") === 'twos' && yahtzeeGame.allNumbersSame(2, dieValues)) ||
          //************checks for selected threes
          (dieValue === 3 && $(e.target).attr("id") === 'threes' && yahtzeeGame.allNumbersSame(3, dieValues)) ||
          //************checks for selected fours
          (dieValue === 4 && $(e.target).attr("id") === 'fours' && yahtzeeGame.allNumbersSame(4, dieValues)) ||
          //************checks for selected fives
          (dieValue === 5 && $(e.target).attr("id") === 'fives' && yahtzeeGame.allNumbersSame(5, dieValues)) ||
          //************checks for selected sixes
          (dieValue === 6 && $(e.target).attr("id") === 'sixes' && yahtzeeGame.allNumbersSame(6, dieValues)))  {
      // if ((condition for ones AND click on ones) OR (condition for twos AND click on twos) OR ... )

        var score = 0;
        $(".active").each(function() {
          score += parseInt($(this).attr("data-value"));
        });
        console.log($(this));
        $(this).text(score);
        $(this).off();
        $(this).parent().css('background-color','#e0e0e0')
        $(this).addClass("filled");

        yahtzeeGame.scoreAddition();
        yahtzeeGame.totalTop();

      }else if (dieValue === 0) {
        var score = 0;
        $(e.target).text(score);
        $(e.target).off();
        $(this).parent().css('background-color','#e0e0e0')
        yahtzeeGame.randomImg();
        $('#countdown-rolls').text(2);
        $('#button-roll').css("visibility", "visible");
        $(this).addClass("filled");
      }
      yahtzeeGame.gameFinished();
  });

  //lower section scoring
  $(".score-amount-bottom").click(function(e) {

    var dieValue = parseInt($(".active").attr("data-value")) || 0;
    var activeDice = $(".active");
    var dieValues = [];
    for (var i = 0; i < activeDice.length; i++) {
      dieValues.push(parseInt(activeDice.eq(i).attr("data-value")));
    };


    if (dieValue === 0) {
      var score = 0;
      $(e.target).text(score);
      $(e.target).off();
      $(this).parent().css('background-color','#e0e0e0')
      yahtzeeGame.randomImg();
      $('#countdown-rolls').text(2);
      $('#button-roll').css("visibility", "visible");
      $(this).addClass("filled");

    }
    //************small straight
    else if ($(e.target).attr("id") === 'small-straight' && yahtzeeGame.straightChecker(dieValues) && dieValues.length === 4) {
        $(e.target).text(30);
        $(this).off();
        $(this).parent().css('background-color','#e0e0e0')
        $(this).addClass("filled");

    //************large straight
    } else if ($(e.target).attr("id") === 'large-straight' && yahtzeeGame.straightChecker(dieValues) && dieValues.length === 5) {
        $(e.target).text(40);
        $(this).off();
        $(this).parent().css('background-color','#e0e0e0')
        $(this).addClass("filled");

    }


    //************three of a kind rule
    else if ($(e.target).attr("id") === '3-of-a-kind') {
       var score = 0;
       var multiples = yahtzeeGame.getDiceMultiples()

       // I want to iterate through my newNumbers object exp: [1,2]
       var keys = Object.keys(multiples);

       var atLeast3 = keys.filter(function(key) {
           return multiples[key] >= 3;
       });

      if (atLeast3.length === 1) {

         $(".active").each(function() {
           score += parseInt($(this).attr("data-value")) || 0;
         });
         console.log($(this));
         $(this).text(score);
         $(this).off();
         $(this).parent().css('background-color','#e0e0e0')

      }
      $(this).addClass("filled");

      //************four of a kind rule
    } else if ($(e.target).attr("id") === '4-of-a-kind') {
        var score = 0; //set the inital score to 0
        var multiples = yahtzeeGame.getDiceMultiples() //call the multiples function

        // I want to iterate through my newNumbers object exp: [1,2]
        var keys = Object.keys(multiples);
        var atLeast4 = keys.filter(function(key) {
          return multiples[key] >= 4;
        });
        console.log(atLeast4);

        if (atLeast4.length === 1) {
          console.log("you have four of the same number!");
          $(".active").each(function() {
            score += parseInt($(this).attr("data-value"));
          });
          console.log($(this));
          $(this).text(score)
          $(this).off();
          $(this).parent().css('background-color','#e0e0e0')

        }
        $(this).addClass("filled");


        //************full house
      } else if ($(e.target).attr("id") === 'full-house') {

        var score = 0; //set the inital score to 0
        var multiples = yahtzeeGame.getDiceMultiples() //call the multiples function

        // I want to iterate through my newNumbers object exp: [1,2]
        var keys = Object.keys(multiples);
        var appears3times = keys.filter(function(key) {
          return multiples[key] == 3;
        });

        var appears2times = keys.filter(function(key) {
          return multiples[key] == 2;
        });

        if (appears3times.length === 1 && appears2times.length === 1) {
          score = 25;
          $(this).text(score)
          $(this).off();
          $(this).parent().css('background-color','#e0e0e0')

        }

        $(this).addClass("filled");

        //************yahtzee
      } else if ($(e.target).attr("id") === 'yahtzee') {
        var score = 0; //set the inital score to 0
        var multiples = yahtzeeGame.getDiceMultiples() //call the multiples function

        // I want to iterate through my newNumbers object exp: [1,2]
        var keys = Object.keys(multiples);
        var allDiceSame = keys.filter(function(key) {
          return multiples[key] >= 5;
        });
        console.log(atLeast4);

        if (allDiceSame.length === 1) {
          score = 50;
          $(this).text(score)
          $(this).off();
          $(this).parent().css('background-color','#e0e0e0')

        }
        $(this).addClass("filled");

      }

      yahtzeeGame.totalBottom();
      yahtzeeGame.scoreAddition();

      yahtzeeGame.gameFinished();
  })

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

//the only time you want to see id or class is here!! NOT above....oops sorry

$(function() {
  yahtzeeGame.reloadClick();
  yahtzeeGame.totalTop();
  yahtzeeGame.totalBottom();
  yahtzeeGame.eventHandlerClickScore();
  var $dice  = $(".dice")
  var $countNumber = $('#countdown-rolls');
  var $roll = $('#roll-dice-turn');
  yahtzeeGame.init($roll, $countNumber);


});
