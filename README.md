General game description: https://en.wikipedia.org/wiki/Boggle
Example: https://wordtwist.puzzlebaron.com/init.php

## Functional requirements:
The system should be able to validate words which are present on the board, diagonally, vertically or
horizontally, and also validate them against some basic dictionary (doesn’t have to be exhaustive, you can use
open API)
- When game starts, new 4x4 board is generated.
- User can type the words which they think they found.
- System does validation and adds valid words into a list.
- Systems keeps track of scores, the score is total number of characters in the word. –
- If word is invalid an error is displayed.
- When timer runs out user can no longer enter new words, but should see results.


## Available Scripts

### `npm start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`
run test case. <br />
### `npm build`
Builds the app for production to the `build` folder.<br />
