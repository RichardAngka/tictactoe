import { useState } from "react";
import "./App.css";
import Box from "./components/Box";

const App = () => {
  const [boxes, setBoxes] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  const handleClick = (i) => {
    if (!boxes[i]) {
      boxes[i] = isX ? "X" : "O";
      setBoxes(boxes);
      setIsX((curr) => !curr);
    }
  };

  return (
    <div className="App">
      <div className="player-box">
        <p className="player-text">Player Turn: {isX ? "X" : "O"}</p>
      </div>
      <div className="row-container">
        <Box value={boxes[0]} onBoxClick={() => handleClick(0)} />
        <Box value={boxes[1]} onBoxClick={() => handleClick(1)} />
        <Box value={boxes[2]} onBoxClick={() => handleClick(2)} />
      </div>
      <div className="row-container">
        <Box value={boxes[3]} onBoxClick={() => handleClick(3)} />
        <Box value={boxes[4]} onBoxClick={() => handleClick(4)} />
        <Box value={boxes[5]} onBoxClick={() => handleClick(5)} />
      </div>
      <div className="row-container">
        <Box value={boxes[6]} onBoxClick={() => handleClick(6)} />
        <Box value={boxes[7]} onBoxClick={() => handleClick(7)} />
        <Box value={boxes[8]} onBoxClick={() => handleClick(8)} />
      </div>

      {checkWinner(boxes) && (
        <div className="player-box">
          <p className="player-text">Winner is {checkWinner(boxes)}</p>
        </div>
      )}
    </div>
  );
};

const checkWinner = (boxes) => {
  const winnerPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (var i = 0; i < winnerPattern.length; i++) {
    const [a, b, c] = winnerPattern[i];
    if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c])
      return boxes[a];
  }
  return null;
};

export default App;
