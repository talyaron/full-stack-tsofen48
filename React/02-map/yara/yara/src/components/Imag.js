
import './Imag.css'

function Imag(props) {
    return (
        <div className="icon">
            <img src={props.img} alt={props.title} />
        </div>
    );
}

export default Imag