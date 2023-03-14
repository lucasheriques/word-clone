import React from "react";

function GuessInput({ addGuess }) {
  const [tentativeGuess, setGuess] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newGuess = tentativeGuess;

    addGuess(newGuess);
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={tentativeGuess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        minLength={1}
        title="5 letter word"
        pattern="[a-zA-Z]{5}"
      />
    </form>
  );
}

export default GuessInput;
