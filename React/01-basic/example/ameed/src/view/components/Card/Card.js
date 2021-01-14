import './Card.css'

function Card(props) {
    return (
      
        <div className='card'>
             
            <img src={props.img} />
            <h8>{props.title}</h8>
        </div>
    
    )
}

export default Card
