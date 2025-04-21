/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
export default function Button(props) {
  const [selected, select] = useState(false);
  const [among, setAmong] = useState(false);

  useEffect(() => {
    select(false);
  }, [props.gameState]);

  function assignMessage(count) {
    if (count === 1) {
      props.setMessage("TypeScript it's been real");
    } else if (count === 2) {
      props.setMessage("Goodbye Rust!");
    } else if (count === 3) {
      props.setMessage("Java it wont be the same without you");
    } else if (count === 4) {
      props.setMessage("PHP, you will be missed");
    } else if (count === 5) {
      props.setMessage("RIP, JavaScript");
    } else if (count === 6) {
      props.setMessage("Farewell, Python");
    } else if (count === 7) {
      props.setMessage("Oh no, not C++");
    } else if (count > 7) {
      props.setMessage("Better go learn assembly");
    }
  }

  function checkLetter(letter) {
    select(true);
    const word = [];
    props.wordTray.forEach((e) => word.push(e.letter));

    if (word.includes(letter)) {
      setAmong(true);
      props.setTray((prev) =>
        prev.map((element) =>
          element.letter === letter ? { ...element, selected: true } : element
        )
      );
      props.setMessage("");
    } else {
      props.setMisses((prev) => prev + 1);
      assignMessage(props.misses + 1);
    }

  }

  return (
    <button
      className={`letter ${selected ? "selected" : null} ${
        among ? `among` : null
      }`}
      onClick={() => {
        checkLetter(props.letter);
      }}
      disabled={
        selected || props.misses >= 8 || props.count >= props.wordTray.length
      }
    >
      {props.letter.toUpperCase()}
    </button>
  );
}
