import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'

function nav(props) {
    return (

        <div class="grid-container">

        <div>
        <Nav >
            <Nav.Item >
                <Nav.Link eventKey="link1" disabled >{props.summariesLink}</Nav.Link>
            </Nav.Item>
        </Nav>
    </div>
    <div>
        <Nav >
            <Nav.Item >
                <Nav.Link eventKey="link2" disabled >{props.moreInfoLink}</Nav.Link>
            </Nav.Item>
        </Nav>
    </div>

    <div>
        <Nav >
            <Nav.Item >
                <Nav.Link style={{ color: "#324483" }} href="/home" >{props.voteDetailesLink}</Nav.Link>
            </Nav.Item>
        </Nav>
    </div>

    </div>

       
        
    );
}

export default nav