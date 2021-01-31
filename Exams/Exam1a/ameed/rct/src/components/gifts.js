import './gifts.css'

function gifts(props) {
    return (
        <div>
        {/* <h1>{props.total}</h1>     */}
        <div class="flex-container">

{/* style={{flex-grow: "1"}}> */}
            
            
            <div><p>{props.price} $</p></div>
            <div ><img src={props.logo} alt="giftimage" /></div>
            <div ><button>{props.button}</button></div>
        </div>
        </div>


    );
}

export default gifts