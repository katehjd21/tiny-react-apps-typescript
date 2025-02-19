import { useEffect } from "react";

interface WordDisplayProps {
  word: string;
  setWord: React.Dispatch<React.SetStateAction<string>>;
  selectedLetters: string[];
}

function WordDisplay({ word, setWord, selectedLetters }: WordDisplayProps) {
  const wordList: string[] = [
    "balloon",
    "compass",
    "diamond",
    "exercise",
    "fireworks",
    "giraffe",
    "luggage",
    "mountain",
    "notebook",
    "rainbow",
  ];

  // Pick a random word when the page loads
  useEffect(() => {
    setWord(wordList[Math.floor(Math.random() * wordList.length)]);
  }, []);

  return (
    <section>
      <div
        style={{
          display: "flex",
          gap: ".25em",
          fontSize: "6rem",
          fontWeight: "bold",
          textTransform: "uppercase",
          fontFamily: "monospace",
        }}
      >
        <p className="word-display">
          {word.split("").map((letter, index) => (
            <span key={index} className="word-display-letter">
              {selectedLetters.includes(letter) ? letter.toUpperCase() : "_"}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

export default WordDisplay;
