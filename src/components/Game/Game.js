import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessesList from "../GuessesList";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(tentativeGuess) {
    const nextGuess = {
      id: `${tentativeGuess}-${Math.random()}`,
      value: tentativeGuess,
    };
    const newGuesses = [...guesses, nextGuess];
    setGuesses(newGuesses);
  }
  return (
    <>
      <GuessesList guesses={guesses} />
      <GuessInput addGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
