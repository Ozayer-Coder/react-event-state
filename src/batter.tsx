import { useState } from "react";

export default function Batter() {
  const [score, setScore] = useState(0);
  const handleScoreSixer = () => {
    setScore(score + 6);
  };
  const handleScoreFour = () => {
    setScore(score + 4);
  };
  const handleScoreShort = () => {
    setScore(score + 1);
  };
  return (
    <div>
      <p>------------------------------</p>
      <h2>Score : {score} </h2>
      <button onClick={handleScoreSixer}>Sixer</button>
      <button onClick={handleScoreFour}>Four</button>
      <button onClick={handleScoreShort}>Short</button>
    </div>
  );
}
