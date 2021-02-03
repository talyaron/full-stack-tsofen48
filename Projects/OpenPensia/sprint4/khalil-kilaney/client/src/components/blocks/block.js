import './block.css'

function block({title , subtitle , url}) {
    return (
    <div className="block">
        <h3 className="title">{title}</h3>
        <span className="text">{subtitle}</span><br />
        <a href={url} className="link">לכתבה לחץ כאן</a>
    </div>
    );
}

export default block;