import './block.css'

function block(props) {
    return (
        <div className="block">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
    );
}

export default block;