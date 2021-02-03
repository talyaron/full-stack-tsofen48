import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiFillDislike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";


function content(props) {
    return (
        <div>
            {/* new div */}

            {/* content view */}

            <div className="grid-container">
                <div style={{ fontSize: "40px" }}>

                    <br></br>
                    <h1>{props.disApprovePer}</h1>
                    <br></br><br></br>
                    <p>נגד</p>

                </div>

                <div style={{ fontSize: "90px" }}>
                    <br></br><br></br><br></br>
                    <span className="lineb"></span>
                </div>

                <div style={{ fontSize: "40px" }}>

                    <br></br>

                    <h1>{props.ApprovePer}</h1>
                    <br></br><br></br>

                    <p>בעד</p>
                </div>


            </div>

            {/* end content */}


            {/* question */}

            <br></br>
            <h3 style={{ color: "#324483" }}>

            מה הבחירה שלך?      
            
            </h3>

            {/* end question */}



            {/* icons view */}

            <div className="grid-container  ">
                <div>


                    <AiFillDislike className="divlike" style={{ color: "#324483" }} />
                    <h2>אני נגד</h2>

                </div>
                <div ></div>
                <div >

                    <AiFillLike className="divlike" style={{ color: "#324483" }} />
                    <h2>אני בעד</h2>

                </div>

            </div>
            {/* end icons view */}


            {/* end new div */}
        </div>
    );
}

export default content

