import './Card.css'

function Card(props) {
    return (
        <div className='card'>
            {props.title}
            <img src={props.img} alt='Childhood computer games' />
        </div>
    )
}

export default Card