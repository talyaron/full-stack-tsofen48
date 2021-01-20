import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
import './App.css';
import { AiFillDislike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
// import Button from 'react-bootstrap/Button'
function App() {


    return (

        <div className="line" >

            <div className="App " >

                <header>

                    <Head bank="בנק הפועלים" name="'עיסאווי פריג"
                        img="data:image/jpeg;base64,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"
                    />

                </header>

                <div class="grid-container">


                    <div>
                        <Nav >
                            <Nav.Item >
                                <Nav.Link eventKey="link2" disabled >סיכום פרטים</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                    <div>
                        <Nav >
                            <Nav.Item >
                                <Nav.Link eventKey="link-1" disabled > עוד מידע </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>

                    <div>
                        <Nav >
                            <Nav.Item >
                                <Nav.Link style={{ color: "#324483" }} href="/home" >נתוני הצבעה</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>



                </div>
                {/* grid div */}


                <div className="grid-container">
                    <div style={{ fontSize: "40px" }}>

                        <br></br>
                        <h1>20%</h1>
                        <br></br><br></br>
                        <p>נגד</p>

                    </div>

                    <div style={{ fontSize: "90px" }}>
                        <br></br><br></br><br></br>
                        <span className="lineb"></span>
                    </div>

                    <div style={{ fontSize: "40px" }}>

                        <br></br>

                        <h1>80%</h1>
                        <br></br><br></br>

                        <p>בעד</p>
                    </div>


                </div>
                {/* grid div */}

                <br></br>
                <h3 style={{ color: "#324483" }}>
                    מה הבחירה שלך?
                   </h3>


                <div className="grid-container  ">
                    <div>


                        <AiFillDislike className="divlike" style={{ color: "#324483" }} />

                    </div>
                    <div ></div>
                    <div>
                        {/* 
                        <Button variant="outline-light" >
                        style={{fontSize:"300px"}}
                            
                        </Button>{' '} */}

                        <AiFillLike className="divlike" style={{ color: "#324483" }} />

                    </div>

                </div>



                {/* app-div */}
            </div>
            {/* div line here */}     </div>

    );
}

function Head(props) {

    return (
        <div className="App-header">
            <p></p>

            <span className='span1'> {props.bank} </span>
            {/* <a className="back" >  ></a> */}

            <br></br>

            <p className="pp">
                <img src={props.img}
                    alt="oknesset-logo" />
            </p>

            <span className='span2'> {props.name}</span>
        </div>


    )



}

export default App;