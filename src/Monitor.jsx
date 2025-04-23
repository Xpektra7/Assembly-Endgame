/* eslint-disable react/prop-types */
export default function Monitor(props) {
  const wordTray = props.wordTray
  console.log(props.gameState)
  
  return (
    <div className="monitor">
      {wordTray.map((element) => (
        <div className={`letterBlock ${element.selected ? 'picked' : null}`} key={wordTray.indexOf(element)}>
          {(element.selected? element.letter.toUpperCase() : (props.gameState == true ? null : element.letter.toUpperCase()))}
        </div>
      ))}
    </div>
  );
}
