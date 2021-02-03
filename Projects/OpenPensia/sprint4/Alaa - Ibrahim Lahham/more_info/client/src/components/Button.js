
// import './Button.css'

function Button(props) {
    return (
        <div className='button'>
            <button className={props.className}> <a href={props.href} > </a> {props.content} </button>
        </div>
    );
}

export default Button;