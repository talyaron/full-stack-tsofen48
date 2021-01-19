import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'


function MainHeader(props) {

    return (
<div>
        <h1>
        < a href="/" />
        <span className='h1-logo'> כנסת פתוחה </span>
        <img className='logo-img' src="https://oknesset.org/static/img/oknesset-logo.png"
            alt="oknesset-logo" />


    </h1>

    <Nav className="justify-content-end" activeKey="/home" >

        <Nav.Item >
            <Nav.Link style={{ color: "black" }} href="/home" > כלים פרלמנטריים </Nav.Link>
        </Nav.Item>
        <Nav.Item >
            <Nav.Link eventKey="link-1" disabled >   ועדות </Nav.Link>
        </Nav.Item>
        <Nav.Item >
            <Nav.Link eventKey="link2" disabled >   ח"כים וסיעות</Nav.Link>
        </Nav.Item>
    </Nav> 

    </div>
    )



}

export default MainHeader
