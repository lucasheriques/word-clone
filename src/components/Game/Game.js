import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";

function Game() {
  // Pick a random word on every pageload.
  const [answer, setAnswer] = React.useState(sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("playing");

  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });

  function handleSubmitGuess(tentativeGuess) {
    const nextGuess = {
      id: `${tentativeGuess}-${Math.random()}`,
      value: tentativeGuess,
    };
    const newGuesses = [...guesses, nextGuess];
    setGuesses(newGuesses);

    if (tentativeGuess === answer) {
      setGameStatus("won");
    } else if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  function restartGame() {
    setAnswer(sample(WORDS));
    setGuesses([]);
    setGameStatus("playing");
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput addGuess={handleSubmitGuess} gameStatus={gameStatus} />
      {gameStatus === "won" && (
        <WonBanner numOfGuesses={guesses.length} restartGame={restartGame} />
      )}
      {gameStatus === "lost" && (
        <LostBanner answer={answer} restartGame={restartGame} />
      )}
    </>
  );
}

export default Game;
