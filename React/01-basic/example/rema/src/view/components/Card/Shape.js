import './Shape.css';

function Shape(props) {
    return (
        <div className="shape">
            <img className="img" src={props.img} alt={props.title} />
        </div>
    )
}

export default Shape
