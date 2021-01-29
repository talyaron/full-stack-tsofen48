import './Summary.css'

function Summary(props) {
    return (
        <div className='summary'>
         <h5>{props.sumTitle}</h5>
        <p>{props.sumText}</p>   
        </div>
    )
}

export default Summary