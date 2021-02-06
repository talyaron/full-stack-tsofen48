import './Card2.css'

function Card2(props) {
    return (
        <div className='card2'>
            {props.title}
            <img src={props.img} />
        </div>
    )
}

export default Card2