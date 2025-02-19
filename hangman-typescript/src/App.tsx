import "./css/App.css";
import AlphabetButtons from "./components/AlphabetButtons";
import Header from "./components/Header";
import Message from "./components/Message";
import WordDisplay from "./components/WordDisplay";
import HangmanGraphic from "./components/HangmanGraphic";
import { useState } from "react";
import ResetButton from "./components/ResetButton";
import words from "./data/wordList.json";

function App() {
  const [word, setWord] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);
  const [gameReset, setGameReset] = useState<boolean>(false);

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
  }

  return (
    <div className="hangman-container">
      <Header />
      <HangmanGraphic
        incorrectGuesses={incorrectLetters.length}
        word={word}
        selectedLetters={selectedLetters}
        setGameReset={setGameReset}
      />
      <WordDisplay
        setWord={setWord}
        word={word}
        selectedLetters={selectedLetters}
      />
      <ResetButton resetGame={resetGame} />
      <Message word={word} selectedLetters={selectedLetters} />
      <AlphabetButtons
        selectedLetters={selectedLetters}
        setSelectedLetters={setSelectedLetters}
      />
    </div>
  );
}

export default App;
