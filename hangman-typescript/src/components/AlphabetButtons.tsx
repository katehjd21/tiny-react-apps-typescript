import { useState } from "react";

interface AlphabetButtonsProps {
  selectedLetters: string[];
  setSelectedLetters: React.Dispatch<React.SetStateAction<string[]>>;
  setClickedLetters: React.Dispatch<React.SetStateAction<string[]>>;
  clickedLetters: string[];
}

function AlphabetButtons({
  selectedLetters,
  setSelectedLetters,
  setClickedLetters,
  clickedLetters,
}: AlphabetButtonsProps) {
  const letters: string[] = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  function handleLetterClick(letter: string) {
    if (!selectedLetters.includes(letter)) {
      setSelectedLetters((prev) => [...prev, letter]);
      setClickedLetters((prev) => [...prev, letter]); // Add clicked letter to the list
    }
  }

  //   useEffect(() => {
  //     console.log("Updated selectedLetters:", selectedLetters);
  //   }, [selectedLetters]);

  return (
    <section className="keyboard">
      <ul className="alphabet-buttons">
        {letters.map((letter, index) => (
          <li key={index}>
            <button
              className={`alphabet-button ${
                clickedLetters.includes(letter) ? "clicked" : ""
              }`}
              type="button"
              onClick={() => handleLetterClick(letter)}
              disabled={clickedLetters.includes(letter)} // Also disable the button if it's clicked
            >
              {letter.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default AlphabetButtons;
