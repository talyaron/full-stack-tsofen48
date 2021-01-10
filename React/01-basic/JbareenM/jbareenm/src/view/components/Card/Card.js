import './Card.css'

function Card(props) {
    return (
        <div className='card'>
            <img src={props.img} alt='flowers' />
            {props.title}
        </div>
    )
}

export default Card

