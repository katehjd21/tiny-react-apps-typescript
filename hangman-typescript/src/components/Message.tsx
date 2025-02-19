import { useState, useEffect } from "react";

interface MessageProps {
  word: string;
  selectedLetters: string[];
}

function Message({ word, selectedLetters }: MessageProps) {
  const [displayMessage, setDisplayMessage] = useState<string>("");
  const [unluckyCount, setUnluckyCount] = useState<number>(0);

  useEffect(() => {
    if (selectedLetters.length === 0) return;

    const lastLetter = selectedLetters[selectedLetters.length - 1];

    if (word.includes(lastLetter)) {
      setDisplayMessage("Great guess!");
      setUnluckyCount(0);
    } else {
      setUnluckyCount((prev) => {
        const newCount = prev + 1;

        // First, clear the message briefly
        setDisplayMessage("");

        setTimeout(() => {
          setDisplayMessage("Unlucky, please guess again!");
        }, 100); // Adjust time delay as needed

        return newCount;
      });
    }
  }, [selectedLetters]);

  return <p className="message">{displayMessage}</p>;
}

export default Message;
