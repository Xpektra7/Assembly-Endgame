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
    if (gameState) {
      const word = wordy();
      const tray = [...word].map((e) => {
        return { letter: e, selected: false };
      });
      setTray(tray);
      setMisses(0);
      setMessage("");
    }
  }, [gameState]);

  useEffect(() => {
    const selectedCount = wordTray.filter((e) => e.selected).length;
    setCount(selectedCount);
  }, [wordTray]);
  ``;

  useEffect(() => {
    if (wordTray.length === 0) return; // ignore first empty render

    if (count >= wordTray.length) {
      if (misses === 0) {
        setMessage("Even the Avengers couldn't save everyone, you're just built differently ");
      } else if (misses === 7) {
        setMessage("You're lucky to still have C");
      } else if (misses === 6) {
        setMessage("That was close");
      } else if (misses === 5) {
        setMessage("I guess we now have to make frontend apps with Python");
      } else if (misses > 0) {
        setMessage(
          `You saved the programming world from Assembly with ${misses} deaths :)`
        );
      }
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
      <Monitor wordTray={wordTray} gameState={gameState} misses={misses} />
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
      {(count >= wordTray.length) || (misses >= 8) ? (
        <button
          className="reset"
          onClick={() => {
            setGameState(true);
            setCount(0);
          }}
        >
          Play Again
        </button>
      ) : null}
    </section>
  );
}
