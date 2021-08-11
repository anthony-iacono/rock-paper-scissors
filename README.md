# Rock Paper Scissors
The classic game we all know and love, built from scratch. Read more on [Wikipedia](https://en.wikipedia.org/wiki/Rock_paper_scissors).

## Goals
- Solidify and demonstrate understanding of DRY JavaScript, localStorage to persist data, and event delegation to handle similar event listeners
- Understand the difference between the data model and how the data is displayed on the DOM
- Use problem solving process to break down large problems, solve things step by step, and trust self to not rely on an outside “answer” to a logical challenge

## Technologies
- HTML
- CSS
- JavaScript
- GitHub Projects

## Code Architecture
- Player Class (player.js)
  - Constructor with name, token, wins, and weapon properties
  - Save and retrieve wins to local storage
  - Take turn in the game
- Game Class (game.js)
  - Two Player instances
  - Game board data, including selected game type and message
  - Check for win and draw conditions
- Main (main.js)
  - Contains all DOM related JavaScript

## Challenges & Wins
- Deciding what should be stored in the data model was a challenge. Where it seemed more efficient, I used functions in main.js to both manipulate the DOM and update the data model, rather than updating the data model exclusively in the class files.
- Experimenting with different ways of sizing boxes and fonts to make the page more responsive.
- Using WAVE to detect accessibility issues (originally threw 17 contrast errors!), and then figuring out how to resolve them.

## Reflection
This project was both fun and challenging at times. I appreciated having to make DOM vs data model decisions. I'm looking forward to sharing my code with other students to see how they made their decisions.

## Screenshots
### Start Page
![Screen Shot 2021-08-10 at 8 08 43 PM](https://user-images.githubusercontent.com/72999840/128963635-7036076b-957f-4cff-932e-a22b9f10c6f9.png)
### Classic Mode
![Screen Shot 2021-08-10 at 8 09 07 PM](https://user-images.githubusercontent.com/72999840/128963648-8b249e52-f2a9-444f-8863-e5d9cc4d362c.png)
### Advanced Mode
![Screen Shot 2021-08-10 at 8 09 16 PM](https://user-images.githubusercontent.com/72999840/128963656-8d669f24-dd91-4d13-8722-fd678c7f2046.png)
### Arena
![Screen Shot 2021-08-10 at 8 09 11 PM](https://user-images.githubusercontent.com/72999840/128963662-7045be50-da21-470c-bb94-3d0fbd9d020e.png)

