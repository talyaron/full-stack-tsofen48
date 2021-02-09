import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
import Content from './content.js';
import React, { useState, useEffect } from 'react';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



function Naav(props) {


    const [Votss, setVotss] = useState([]);

    useEffect(() => {
        fetch('vots/get-vots')
            .then(r => r.json())
            .then(data => {
                console.log(data)
                setVotss(data.vots);
            })
    }, [])

    function VoteResult(props) {


        return (
            <div>


                {/* content view */}

                {Votss.map((list, index) => {
                    return (<Content
                        key={index}
                        disApprovePer={list.disApprovePer}
                        ApprovePer={list.ApprovePer}
                    />)


                })
                }



                {/* end content view */}

            </div>
        );
    };



    function MoreInfo() {
        return (

            <div>


            </div>

        );
    }

    function Details() {
        return (

            <div>


            </div>

        );
    }


    return (


            <Router>
            <div className="grid-container">

                <div>
                    <Nav >
                        <Nav.Item >

                            <Link to="/Details">
                                <Nav.Link eventKey="link1" disabled >סיכום פרטים</Nav.Link>
                            </Link>

                        </Nav.Item>
                    </Nav>
                </div>
               
                <div>
                    <Nav >
                        <Nav.Item >

                            <Link to="/Moreinfo">
                                <Nav.Link eventKey="link2" disabled >עוד מידע</Nav.Link>
                            </Link>

                        </Nav.Item>
                    </Nav>
                </div>

                <div>
                    <Nav >
                        <Nav.Item >
                            <Link to="/">
                            <Nav.Link  style={{ color: "#324483" }}  href="/">נתוני הצבעה</Nav.Link>
                            </Link>
                        </Nav.Item>
                    </Nav>
                </div>
                </div>




                <Switch>
                    <Route path="/Details">
                        <Details />
                    </Route>
                    <Route path="/MoreInfo">
                        <MoreInfo />
                    </Route>
                    <Route path="/">
                        <VoteResult />
                    </Route>
                </Switch>

            </Router>




           



    );
}

export default Naav