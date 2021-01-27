import './block.css'

function block({title , status}) {
    return (
    <div className="block">
        <h3 className="title">{title}</h3>
        <span className="link">{status}</span>
        {/* <span>&#60;</span> */}
    </div>
    );
}

export default block;