

function Button({onClick, innerText, style=''}){

    return(
        <button onClick={onClick} > {innerText} </button>
    );
}

export default Button;