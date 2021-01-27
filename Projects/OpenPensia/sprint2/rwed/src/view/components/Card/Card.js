import './Card.css'

function Card(props) {
    return (
      
        <div className='card'>
            {props.title}
            <img src={props.img} />
        </div>
    
    )
}

export default Card
