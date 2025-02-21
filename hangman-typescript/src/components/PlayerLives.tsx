import { useState, useEffect } from "react";

interface PlayerLivesProps {
  initialLives: number;
  incorrectGuesses: number;
  word: string;
  selectedLetters: string[];
  setGameReset: (gameReset: boolean) => void;
  resetGame: () => void;
  lives: number;
  setLives: (lives: number) => void;
}

function PlayerLives({
  initialLives,
  incorrectGuesses,
  word,
  selectedLetters,
  setGameReset,
  resetGame,
  lives,
  setLives,
}: PlayerLivesProps) {
  // const [lives, setLives] = useState<number>(initialLives);
  const [playerStatus, setPlayerStatus] = useState<string>("");
  const [popupVisible, setPopupVisible] = useState<boolean>(false);

  useEffect(() => {
    setLives(initialLives - incorrectGuesses);
  }, [incorrectGuesses, initialLives]);

  useEffect(() => {
    if (lives === 0) {
      setPlayerStatus("You lose! 👎🏻");
      setGameReset(true);
      setPopupVisible(true);
    } else if (
      word.split("").every((letter) => selectedLetters.includes(letter))
    ) {
      setPlayerStatus("You win! 🥳");
      setGameReset(true);
      setPopupVisible(true);
    }
  }, [selectedLetters, word, lives, setGameReset]);

  function popUpResetGame() {
    setPopupVisible(false);
    resetGame();
    setPlayerStatus("");
    setLives(initialLives);
  }

  return (
    <>
      <p className="lives">Lives: {lives}</p>
      {popupVisible && (
        <div className="popup">
          <p className="pop-up-content">{playerStatus}</p>
          {popupVisible && (
            <button className="pop-up-button" onClick={popUpResetGame}>
              Play again
            </button>
          )}
        </div>
      )}
    </>
  );
}

export default PlayerLives;
