/* eslint-disable react/prop-types */
export default function Monitor(props) {
  const wordTray = props.wordTray
  
  return (
    <div className="monitor">
      {wordTray.map((element) => (
        <div className={`letterBlock ${element.selected ? 'picked' : null}`} key={wordTray.indexOf(element)}>
          {props.misses >= 8
            ? element.letter.toUpperCase()
            : element.selected ? element.letter.toUpperCase() : null}
        </div>
      ))}
    </div>
  );
}
 