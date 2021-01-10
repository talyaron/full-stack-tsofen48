import './Card.css'

function Card(props) {
    return (
        <div className='card'>
            <img src={props.img} alt='flowers' />
            <div className='headline'>
                <p>{props.title}</p>
            </div>
            
        </div>
    )
}

export default Card

