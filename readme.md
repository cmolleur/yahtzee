EXPLAINATION:
Play the game of yahtzee with slightly modified rules.

WIREFRAME: http://i.imgur.com/6LxwtZJ.jpg

USER STORIES: As a user, I want to be able to play the game, either against a computer, another player, or against a score. I want to be able to have at least 3 rolls per round and I want totals to add up in the end. I also want to make sure the game knows when I have a certain rule (full house, small straight, ones, twos etc...)

APPROACH/INSTALLATION: I wanted to try and build a game that would be a challenge, that way I can learn A LOT while creating it. To start off, I created the css structure of my page. I wanted it to look a certain way before I did any javascript coding. From there, the first thing I built in JS was having 5 dice images randomize and appear on the screen. I attached values to each of those dice to match what dice it was (dice 1 has a value of 1, dice 2 has a value of 2 etc.). If I clicked a button, those dice would randomize 3 times, and the user is not able to roll anymore. A counter would be somewhere on the screen and show the countdown from 3. After getting much of the smaller bits of JS out of the way, the tougher code were all the rules. It was a lot of playing with the data-value attribute. I'm glad I took on this game challenge. Not only is it a different game than what others selected, but it's one I'm very familiar with and enjoy playing.

UNSOLVED PROBLEMS:
1) There are additional rules that I did not include for time sake. Those were chance (the sum of all the dice, even if they don't match), yahtzee bonus (if you roll additional yahtzees, you get an 50 points), and total bonus for top section (if you score 63 or higher in the top section, you get an additional 35 points.)
2) My second issue had to do with selecting the score box in the bottom section. If you have a bunch of dice selected that don't fit in a certain rule (ex. if you have selected a 1,3,4,4,5 and try and click in full-house), there should be no action whatsoever. Instead, what's happening is it's resetting the roll number and reshuffling the dice, so it's giving the player an advantage technically. This issue is only for the lower section. The top does the correct thing, it doesn't allow you to click unless the selected dice fit the rule.
