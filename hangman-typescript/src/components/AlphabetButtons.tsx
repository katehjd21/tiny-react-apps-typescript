import { useEffect } from "react";

interface AlphabetButtonsProps {
  selectedLetters: string[];
  setSelectedLetters: React.Dispatch<React.SetStateAction<string[]>>;
}

function AlphabetButtons({
  selectedLetters,
  setSelectedLetters,
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
    setSelectedLetters((currLetters) => {
      return [...currLetters, letter];
    });
  }

  //   useEffect(() => {
  //     console.log("Updated selectedLetters:", selectedLetters);
  //   }, [selectedLetters]);

  return (
    <section>
      <ul className="alphabet-buttons">
        {letters.map((letter, index) => (
          <li key={index}>
            <button
              className="alphabet-button"
              type="button"
              onClick={() => handleLetterClick(letter)}
              disabled={selectedLetters.includes(letter)}
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
