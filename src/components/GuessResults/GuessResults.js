import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import Guess from "../Guess";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((i) => {
        const currentGuess = guesses[i];
        return <Guess key={i} guess={currentGuess} />;
      })}
    </div>
  );
}

export default GuessResults;
