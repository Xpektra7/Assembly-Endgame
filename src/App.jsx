import { useEffect, useState } from "react";
import Dialog from "./Dialog";
import Keyboard from "./Keyboard";
import Monitor from "./Monitor";
import Hostage from "./Hostage";

export default function App() {
  const [gameState, setGameState] = useState(true);
  const [wordTray, setTray] = useState([]);
  const [misses, setMisses] = useState("");
  const [message, setMessage] = useState("");
  let count = 0;


  useEffect(() => {
    console.log("rendered");
    const word = "missisippi";
    const tray = [...word].map((e) => {
      return { letter: e, selected: false };
    });
    setTray(tray);
    setMisses(0);
    setMessage("")
  }, [gameState]);

  wordTray.forEach((element) => {
    if (element.selected === true) {
      count += 1;
    }
  });

  useEffect(() => {
    if(count >= wordTray.length){
      setMessage("You Win")
    } 
    else if(count == 0){
      setMessage("")
    } 

    if(misses >= 8 || count >= wordTray.length){
      setGameState(false)
    }
  },[count,wordTray.length,misses])


  return (
    <section>
      <div className="title">
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word within 8 attempts to keep the programming world safe
          from Assembly
        </p>
      </div>

      <Dialog message={message} />
      <Hostage misses={misses} />
      <Monitor wordTray={wordTray} />
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
      {(misses >= 8 || count >= wordTray.length) ? <button className="reset" onClick={() => {
        setGameState(prev => !prev)
        count = 0
      }}>Play Again</button>:null}
    </section>
  );
}
