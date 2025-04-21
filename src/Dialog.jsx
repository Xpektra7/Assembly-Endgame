/* eslint-disable react/prop-types */
export default function Dialog(props){
    return(
        <div className={`dialog ${props.message === "" ? null : (props.message === "You Win"? 'win' : 'active')}`} >
            {props.message === "" ? null : <p>{props.message}</p>}
        </div>
    );
}