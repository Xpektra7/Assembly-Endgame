import { useEffect, useState } from "react";
import Dialog from "./Dialog";
import Keyboard from "./Keyboard";
import Monitor from "./Monitor";
import Hostage from "./Hostage";
import wordy from "./Wordy";

export default function App() {
  const [gameState, setGameState] = useState(true);
  const [wordTray, setTray] = useState([]);
  const [misses, setMisses] = useState("");
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if(gameState){
      console.log("rendered");
      const word = wordy;
      const tray = [...word].map((e) => {
        return { letter: e, selected: false };
      });
      setTray(tray);
      setMisses(0);
      setMessage("")}
  }, [gameState]);

  useEffect(() => {
    const selectedCount = wordTray.filter(e => e.selected).length;
    setCount(selectedCount);
  }, [wordTray]);
  


  useEffect(() => {
    if (wordTray.length === 0) return; // ignore first empty render
  
    if (count >= wordTray.length) {
      setMessage(`You saved ${8 - misses} languages :)`);
      setGameState(false);
    }
    if (count === 0 && misses === 0) {
      setMessage("");
    }
    if (misses >= 8) {
      setGameState(false);
    }
  }, [count, wordTray, misses]);

  return (
    <section> 
      <div className="title">
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word within 8 attempts to keep the programming world safe
          from Assembly
        </p>
      </div>

      <Dialog message={message} count={count} wordTray={wordTray} />
      <Hostage misses={misses} />
      <Monitor wordTray={wordTray} gameState={gameState} />
      <Keyboard
        wordTray={wordTray}
        gameState={gameState}
        setGameState={setGameState}
        setTray={setTray}
        misses={misses}
        setMisses={setMisses}
        count={count}
        message={message}
        setMessage={setMessage}
      />
      {(!gameState) ? <button className="reset" onClick={() => {
        setGameState(true)
        setCount(0)
      }}>Play Again</button>:null}
    </section>
  );
}
