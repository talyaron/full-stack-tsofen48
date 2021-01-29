import './screen.css'

function screen(props) {
    return (
       

<div dir="rtl" className="background">
<div  className="companyitem">
<div className="Column" id="companyimagecontainer">
        <img id = "companyimage" src={props.logo} alt="companyimage"/>
    </div>
        <div className="Column">
            <div id="companyname">
                <ol>
                      <p>{props.name}</p>
                      <p id="companytype">{props.par}</p>
                  </ol>
            </div>
        </div>

    
    <div className="Column" id="nexticon" >
        <img className="img1" src="https://image.flaticon.com/icons/png/512/130/130884.png" alt="nexticon"/>
    </div>
</div>
</div>
        
    );
}

export default screen