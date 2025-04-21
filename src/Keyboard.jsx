import Button from "./Button";

/* eslint-disable react/prop-types */
export default function Keyboard(props) {
  const alphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  return (
    <div className="keyboard">
      {alphabets.map((letter) => {
        return (
          <Button
            letter={letter}
            wordTray={props.wordTray}
            setTray={props.setTray}
            key={letter}
            misses={props.misses}
            setMisses={props.setMisses}
            count={props.count}
            message={props.message}
            setMessage={props.setMessage}
            gameState={props.gameState}
            setGameState={props.setGameState}
          />
        );
      })}
    </div>
  );
}
