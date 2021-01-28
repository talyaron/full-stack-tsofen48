import './block.css'

function block({title , text , link}) {
    return (
    <div className="block">
        <h3 className="title">{title}</h3>
        <span className="text">{text}</span><br />
        <a href="#" className="link">{link}</a>
    </div>
    );
}

export default block;