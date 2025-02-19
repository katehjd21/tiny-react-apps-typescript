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

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

interface HangmanGraphicProps {
  incorrectGuesses: number;
  word: string;
  selectedLetters: string[];
  setGameReset: (gameReset: boolean) => void;
}
function HangmanGraphic({
  incorrectGuesses,
  word,
  selectedLetters,
  setGameReset,
}: HangmanGraphicProps) {
  return (
    <>
      <PlayerLives
        initialLives={BODY_PARTS.length}
        incorrectGuesses={incorrectGuesses}
        word={word}
        selectedLetters={selectedLetters}
        setGameReset={setGameReset}
      />
      <div className="body-position">
        {BODY_PARTS.slice(0, incorrectGuesses)}
        <div className="hanging-rope" />
        <div className="top-bar" />
        <div className="vertical-bar" />
        <div className="bottom-bar" />
      </div>
    </>
  );
}

export default HangmanGraphic;
