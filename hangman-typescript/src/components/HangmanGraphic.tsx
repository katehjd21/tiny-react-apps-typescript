import {
  HEAD,
  BODY,
  RIGHT_ARM,
  LEFT_ARM,
  RIGHT_LEG,
  LEFT_LEG,
} from "./BodyParts";
import "../css/HangmanGraphic.css";
import PlayerLives from "./PlayerLives";
import { useState } from "react";

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];
const initialLives = BODY_PARTS.length;

interface HangmanGraphicProps {
  incorrectGuesses: number;
  word: string;
  selectedLetters: string[];
  setGameReset: (gameReset: boolean) => void;
  resetGame: () => void;
}
function HangmanGraphic({
  incorrectGuesses,
  word,
  selectedLetters,
  setGameReset,
  resetGame,
}: HangmanGraphicProps) {
  const [lives, setLives] = useState<number>(initialLives);
  return (
    <div className="lives-hangman-graphic">
      <PlayerLives
        initialLives={initialLives}
        incorrectGuesses={incorrectGuesses}
        word={word}
        selectedLetters={selectedLetters}
        setGameReset={setGameReset}
        resetGame={resetGame}
        lives={lives}
        setLives={setLives}
      />

      <div className="body-position">
        {BODY_PARTS.slice(0, incorrectGuesses)}
        <div className="hanging-rope" />
        <div className="top-bar" />
        <div className="vertical-bar" />
        <div className="bottom-bar" />
      </div>
    </div>
  );
}

export default HangmanGraphic;
