

function Button({onClick, innerText, type='text' ,style=''}){

    return(
        <button onClick={onClick} type={type}> {innerText} </button>
    );
}

export default Button;