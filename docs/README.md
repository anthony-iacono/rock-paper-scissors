# Rock Paper Scissors
The classic game we all know and love, built from scratch. Read more on [Wikipedia](https://en.wikipedia.org/wiki/Rock_paper_scissors).

[Play Rock Paper Scissors](https://anthony-iacono.github.io/rock-paper-scissors)

## Demo
![rock-paper-scissors-demo-v3](https://user-images.githubusercontent.com/72999840/129432242-f33215ff-a9cd-46e3-88e5-c38da70f7bc9.gif)

## Goals
- Demonstrate proficiency in writing DRY JavaScript, using local storage, and leveraging event delegation to handle multiple event listeners
- Understand the difference between the data model and the DOM
- Use problem solving process to break down large problems into individual steps

## Technologies
- HTML
- CSS (using [BEM methodology](https://en.bem.info/methodology/))
- JavaScript
- GitHub Projects

## Architecture
- Player Class (player.js)
  - Properties for name, token, wins, and weapon
  - Methods for saving and retrieving wins from local storage, as well as taking turns during gameplay
- Game Class (game.js)
  - Properties for game board data, including mode and message
  - Player instances (human and computer)
  - Methods to check for win and draw conditions
- Main (main.js)
  - All DOM manipulation

## Challenges
- I had to think carefully about which functions to store in the main file versus the class files. When it seemed more efficient, I chose to define functions in main.js that both manipulated the DOM and updated the data model held in the classes.
- I applied the BEM methodology to this app from the ground up. Determining whether a given element should be a block or an element was a challenge, but revisiting the BEM documentation helped improve my naming conventions over time.
- I tried a variety of units and approaches to sizing elements and text in CSS to make the app more responsive to varying window sizes.
- I used the WAVE Chrome extension to detect and address accessibility issues (originally throwing 17 contrast errors!), making the app more accessible to users with visual impairments.

## Contributions
App built by
- Anthony Iacono ([LinkedIn](https://linkedin.com/in/anthony-iacono)/[GitHub](https://github.com/anthony-iacono))

Project specifications and assets provided by 
- Turing School of Software & Design [@turingschool](https://github.com/turingschool)
