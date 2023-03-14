import React from "react";

function Game() {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("guess", guess);
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        minLength={5}
        maxLength={5}
      />
    </form>
  );
}

export default Game;
