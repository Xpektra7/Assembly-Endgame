/* eslint-disable react/prop-types */
export default function Hostage(props){
    const misses = props.misses
    const hostage = ['TypeScript','Rust','Java','PHP','JavaScript','Python','C++','C']
    return(
        <div className="confinement">
            {hostage.map((element,index) => {
                return (
                    <div className={`hostage ${misses >= index + 1 ? 'active' : null}`} key={index}>
                        <p>{element}</p>
                    </div>
                )
            })}
        </div>
    )
}