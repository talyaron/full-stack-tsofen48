import './Card3.css'

function Card3(props) {
    return (
        <div className='card3'>
            {props.title}
            <img src={props.img} />
        </div>
    )
}

export default Card3