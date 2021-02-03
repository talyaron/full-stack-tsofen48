import './MainFooter.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'


function MainFooter(props) {

    return (



        <div classNameName="app-footer">
            <div classNameName="container">
                <div classNameName="row">

                    <Nav className="justify-content-end" activeKey="/home" >

                        <Nav.Item >
                            <Nav.Link eventKey="link-1" disabled >ועדות</Nav.Link>
                        </Nav.Item>
                        <Nav.Item >
                            <Nav.Link eventKey="link-1" disabled >  ח"כים וסיעות</Nav.Link>
                        </Nav.Item>
                        <Nav.Item >
                            <Nav.Link href="/home" >  דף הבית</Nav.Link>
                        </Nav.Item>
                    </Nav>

                </div>

                <br></br>
                <div classNameName="row about">

                    <div className="span4">
                        <div className="about-oknesset">
                            <h3>כנסת פתוחה הוא פרוייקט שמטרתו לחשוף את פעילות הכנסת לציבור</h3>
                        </div>

                    </div>

                    <div className="span4" style={{ float: "left" }}>
                        <h3>

                            <span>  הפרוייקט של</span>

                            <img src="https://oknesset.org/static/img/sadna30x30.png" alt="הסדנא לידע ציבורי" />
                            <br></br>
                            <a href="http://www.hasadna.org.il">הסדנא לידע ציבורי</a>


                        </h3>


                    </div>


                </div>

            </div>
        </div>



    )



}

export default MainFooter




