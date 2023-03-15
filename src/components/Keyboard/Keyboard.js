import React from "react";

function getLetterStatus(checkedGuesses) {
  const letterObj = {};

  checkedGuesses.forEach((guess) => {
    guess.forEach(({ letter, status }) => {
      letterObj[letter] = status;
    });
  });

  return letterObj;
}

function Keyboard({ checkedGuesses }) {
  const KEYBOARD_ROWS = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  console.log("checkedGuesses", checkedGuesses);

  const letterByStatus = getLetterStatus(checkedGuesses);

  console.log("letterByStatus", letterByStatus);

  return (
    <div className="keyboard">
      {KEYBOARD_ROWS.map((row, index) => (
        <div className="row" key={index}>
          {row.map((letter) => {
            const className = letterByStatus[letter]
              ? `letter ${letterByStatus[letter]}`
              : "letter";

            return (
              <div className={className} key={letter}>
                {letter}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
