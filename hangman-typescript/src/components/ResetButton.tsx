interface ResetButtonProps {
  resetGame: () => void;
}

function ResetButton({ resetGame }: ResetButtonProps) {
  return (
    <button className="reset-button" onClick={resetGame}>
      Restart
    </button>
  );
}

export default ResetButton;
