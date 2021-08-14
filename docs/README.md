# Rock Paper Scissors
The classic game we all know and love, built from scratch. Read more on [Wikipedia](https://en.wikipedia.org/wiki/Rock_paper_scissors).

[Play Rock Paper Scissors](https://anthony-iacono.github.io/rock-paper-scissors)

## Goals
- Demonstrate proficiency in writing DRY JavaScript, using local storage, and leveraging event delegation to handle multiple event listeners
- Understand the difference between the data model and how the data is displayed on the DOM
- Use problem solving process to break down large problems into individual steps

## Technologies
- HTML
- CSS (using [BEM methodology](https://en.bem.info/methodology/))
- JavaScript
- GitHub Projects

## Architecture
- Player Class (player.js)
  - Properties of name, token, wins, and weapon
  - Methods for saving and retrieving wins to/from local storage, as well as taking a turn during gameplay
- Game Class (game.js)
  - Properties for game board data, including mode and message
  - Two Player instances (human and computer)
  - Methods to check for win and draw conditions
- Main (main.js)
  - All DOM manipulation

## Challenges
- I had to think carefully about which functions to store in the main file versus the class files. When it seemed more efficient, I chose to define functions in main.js that both manipulated the DOM and updated the data model held in the classes.
- I tried a variety of units and approaches to sizing elements and text in CSS to make to respond to varying window sizes.
- I used the WAVE Chrome extension to detect accessibility issues (originally throwing 17 contrast errors!), and made the necessary adjustments to make the app more accessible to users with visual impairments.

## Screenshots
### Start Page
![Screen Shot 2021-08-10 at 8 08 43 PM](https://user-images.githubusercontent.com/72999840/128963635-7036076b-957f-4cff-932e-a22b9f10c6f9.png)
### Classic Mode
![Screen Shot 2021-08-10 at 8 09 07 PM](https://user-images.githubusercontent.com/72999840/128963648-8b249e52-f2a9-444f-8863-e5d9cc4d362c.png)
### Advanced Mode
![Screen Shot 2021-08-10 at 8 09 16 PM](https://user-images.githubusercontent.com/72999840/128963656-8d669f24-dd91-4d13-8722-fd678c7f2046.png)
### Arena
![Screen Shot 2021-08-10 at 8 09 11 PM](https://user-images.githubusercontent.com/72999840/128963662-7045be50-da21-470c-bb94-3d0fbd9d020e.png)

