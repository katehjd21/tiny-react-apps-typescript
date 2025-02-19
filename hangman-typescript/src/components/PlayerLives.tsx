import { useState, useEffect } from "react";

interface PlayerLivesProps {
  initialLives: number;
  incorrectGuesses: number;
  word: string;
  selectedLetters: string[];
  setGameReset: (gameReset: boolean) => void;
}

function PlayerLives({
  initialLives,
  incorrectGuesses,
  word,
  selectedLetters,
  setGameReset,
}: PlayerLivesProps) {
  const [lives, setLives] = useState<number>(initialLives);
  const [playerStatus, setPlayerStatus] = useState<string>("");

  useEffect(() => {
    setLives(initialLives - incorrectGuesses);
  }, [incorrectGuesses, initialLives]);

  useEffect(() => {
    if (lives === 0) {
      setPlayerStatus("You lose! 👎🏻");
      setGameReset(true);
    } else if (
      word.split("").every((letter) => selectedLetters.includes(letter))
    ) {
      setPlayerStatus("You win! 🥳");
      setGameReset(true);
    }
  }, [selectedLetters, word, lives, setGameReset]);

  return (
    <>
      <p>Lives: {lives}</p>
      {playerStatus ? (
        <div className="popup">
          <p>{playerStatus}</p>
        </div>
      ) : null}
    </>
  );
}

export default PlayerLives;
