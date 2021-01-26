
import './Icon.css'

function Icon(props) {
    return (
        <div className="icon">
            <a title={props.title} href={props.href} target={props.target} />
            {/* {this.props.innerHTML} */}
        </div>
    );
}

export default Icon