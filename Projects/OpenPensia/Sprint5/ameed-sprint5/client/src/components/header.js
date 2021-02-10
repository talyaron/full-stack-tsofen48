import './App.css'
import {BsChevronRight} from "react-icons/bs";

function head(props) {
    return ( 
        
        
        <div className="App-header">

               <div className="right" >
        <a href="/" style={{color: "white",fontSize: "30px"}}><BsChevronRight /></a>   
        </div>
        
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