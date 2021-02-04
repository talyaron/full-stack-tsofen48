import './App.css'

function head(props) {
    return (
       
        <div className="App-header">
        <p></p>

        <span className='span1'> {props.bank} </span>

        <br></br>

        <p className="pp">
            <img src={props.img}
                alt="oknesset-logo" />
        </p>

        <span className='span2'> {props.name}</span>
    </div>
        
    );
}

export default head