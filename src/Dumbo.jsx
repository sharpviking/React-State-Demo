import { useState } from "react";

function generateGameBoard() {
  console.log("Making the new gameboard");
  return Array(5500);
}

export default function Dumbo() {
  const [board, setBoard] = useState(generateGameBoard);
  return (
    <button onClick={() => setBoard("Hello")}>Click me change state</button>
  );
}
