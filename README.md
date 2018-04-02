# 2048

Recreation of the famous sliding block puzzle [game](https://en.wikipedia.org/wiki/2048_(video_game) originally coded by Gabriele Cirulli.

![screen shot 2018-04-02 at 16 22 55](https://user-images.githubusercontent.com/14803518/38202037-49a14504-3692-11e8-808e-d7edbdae8bf6.png)

The aim was to challenge myself to make it implementing testing first, and to keep to good coding conventions.

Use the up, down, left and right arrow keys to play.

### Installation

```
git clone git@github.com:puyanwei/2048.git
cd 2048
open index.html
```

For testing

```
open specRunner.html
```

### Tech Stack

*   HTML
*   Javascript
*   Jasmine

### Features

*   Slide blocks by using the up, down, right and left arrow keys.
*   Keeps a tally of your score.
*   Keeps a count of the number of moves you make.
*   Restart button resets a game.

### Quality Control

*   Good testing coverage.
*   Good naming conventions, functions are short as possible using the Single Responsibility Principle, refactor repetition code.
*   Code is readable for humans! Descriptive function names over writing comments.
*   Small commits and good descriptions.

### Future Improvements

Unable to test jQuery in the same way as game.js using Jasmine, there are a few options the main one being that we test it using a front end user interface tester such as [nightwatch.js](https://github.com/dwyl/learn-nightwatch).

Code still needs a lot of improvement, there is a lot of repetition espcially in the interface.js that can be refactored. Game.js is too long and should be refactored into smaller files to spread out the dependencies.
