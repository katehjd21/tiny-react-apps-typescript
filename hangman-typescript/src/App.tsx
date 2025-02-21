import "./css/App.css";
import AlphabetButtons from "./components/AlphabetButtons";
import Header from "./components/Header";
import Message from "./components/Message";
import WordDisplay from "./components/WordDisplay";
import HangmanGraphic from "./components/HangmanGraphic";
import { useState } from "react";
import words from "./data/wordList.json";

function App() {
  const [word, setWord] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);
  const [_, setGameReset] = useState<boolean>(false);
  const [clickedLetters, setClickedLetters] = useState<string[]>([]); // Track clicked letters

  const incorrectLetters: string[] = selectedLetters.filter(
    (letter) => !word.includes(letter)
  );

  function getWord() {
    return words[Math.floor(Math.random() * words.length)];
  }

  function resetGame() {
    setSelectedLetters([]);
    setGameReset(false);
    setWord(getWord());
    setClickedLetters([]);
  }

  return (
    <>
      <div className="hangman-container">
        <div className="hangman-graphic-container">
          <HangmanGraphic
            incorrectGuesses={incorrectLetters.length}
            word={word}
            selectedLetters={selectedLetters}
            setGameReset={setGameReset}
            resetGame={resetGame}
          />
        </div>
        <div className="word-keyboard-container">
          <Header />
          <WordDisplay
            setWord={setWord}
            word={word}
            selectedLetters={selectedLetters}
          />
          <Message word={word} selectedLetters={selectedLetters} />
          <AlphabetButtons
            selectedLetters={selectedLetters}
            setSelectedLetters={setSelectedLetters}
            setClickedLetters={setClickedLetters}
            clickedLetters={clickedLetters}
          />
        </div>
      </div>
    </>
  );
}

export default App;
