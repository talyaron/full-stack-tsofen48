

function Button({onClick, innerText, className,key='', type='text' ,style=''}){

    return(
        <button key={key} onClick={onClick} type={type} className={className}>  {innerText} </button>
    );
}

export default Button;