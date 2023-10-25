import "./App.css";
import Counter from "./Counter";
import Dumbo from "./Dumbo";
import ScoreKeeper from "./ScoreKeeper";
import EmojiClicker from "./EmojiClicker";
import ScoreKeepers from "./ScoreKeepers";

function App() {
  return (
    <>
      <ScoreKeepers numPlayers={7} target={7} />
      {/* <EmojiClicker /> */}
      {/* <ScoreKeeper /> */}
      {/* <h1>State Demo</h1> */}
      {/* <Counter /> */}
      {/* <Dumbo /> */}
    </>
  );
}

export default App;
