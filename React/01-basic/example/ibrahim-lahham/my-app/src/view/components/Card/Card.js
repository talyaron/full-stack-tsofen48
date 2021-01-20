import './Card.css'

function Card(props) {
    return (
        <div className='card'>
             <img src={props.img} id={props.id} onClick={props.onClick}/>
           
        </div>
        
    )
}

export default Card

