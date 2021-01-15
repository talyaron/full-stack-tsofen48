
import './Icon.css'

function Icon(props) {
    return (
        <div className="icon">
            <img src={props.img} alt={props.title} />
            {props.title}
        </div>
        
    );
}

export default Icon