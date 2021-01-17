import './Card1.css'

function Card1(props) {
    return (
        <div className='card1'>
            {props.title}
            <img src={props.img} />
        </div>
    )
}

export default Card1