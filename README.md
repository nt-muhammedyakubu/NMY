# NMY
##Adventure_game

*Project is an old adventure game where:

_ Prints describes what is happening to the player.

The player is able to make a choice.
The choice describe what the player will do next.
The choice also determines whether the player will be defeated or victorious.
A valid input entered by the player else the next action will not be displayed until a valid input is provided.
The game is playable with different scenario for the player depending on his choice.
Provides functions to describe what happen in each scenario.
The use of random module (random.choice) came into play to set the creatures the player encounter.
The player is able to declare if he wants to play again or not.
Pycodestyle is used to check whether the code has any issue.
##Code type

Python
##Code quality

The code is printed to the console for the player to see.
The time.sleep function is used to create delays between messages so that they are not all printed at once.
The random.choice function is used to influence the game so that each game is different in some way.
The input function is used to ask the player what they would like to do.
The player's choices affect what happens in the game, including:
whether player wins or loses
Whether to restart or exit after the game is over
If the player enters a choice that is not valid, the game gives them the chance to retry until a valid option is provided_
The game does not crash and does not treat invalid input as a valid choice
The code includes at least four function definitions that are used to improve the code in some way, such as by:
Reducing repetition Reducing complexity Improving the readability or organization of the code

Each function has a single purpose and a name that describes that purpose.
The pycodestyle tool reports zero errors and zero warnings.
The program is a playable game, and runs from start to finish without crashing or displaying errors.
See also: (https://review.udacity.com/#!/reviews/2481851)
