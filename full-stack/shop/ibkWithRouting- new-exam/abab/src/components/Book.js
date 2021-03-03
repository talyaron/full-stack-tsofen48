import './Book.css'
import React, { useState } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

let addCounter = [];

function Book(props) {
    const [blessing, setBlessing] = useState('');
    const [image, setImage] = useState('');
    const [date, setDate] = useState('');


    const [loginUser, setLoginUser] = useState('');
    const [passUser, setPassUser] = useState('');
    const [loginUser2, setLoginUser2] = useState('');
    const [passUser2, setPassUser2] = useState('');
    const [signUpStatus, setSignUpStatus] = useState(false);
    const [loginStatus, setLoginStatus] = useState(false);


    function handleName(e) {
        setBlessing(e.target.value);
        // console.log(loginUser);
    }

    function handleWriter(e) {
        setImage(e.target.value);
        // console.log(loginUser);
    }

    function handleDate(e) {
        setDate(e.target.value);
        // console.log(loginUser);
    }

    function handleLoginPass(e) {
        setPassUser(e.target.value);
        // console.log(passUser);
    }

    function handleAdd(e) {
        console.log(blessing);
        console.log(image);

        // e.preventDefault();
        // const name = e.target.children.name.value;
        // e.target.children.name.value = '';
        fetch('/user/add-blessing', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ blessing, image})//, passUser}
        }).then(r => r.json())
            .then(data => {
                console.log(data);
                if (data.ok == false)
                     alert('blessing is already exists or data is corrupted')
            }
            )
    }

    function handleLoginUser2(e) {
        setLoginUser2(e.target.value);
        // console.log(loginUser);
    }

    function handleLoginPass2(e) {
        setPassUser2(e.target.value);
        // console.log(passUser);
    }

    function handleLogin2(e) {
        console.log(loginUser2);
        console.log(passUser2);

        // e.preventDefault();
        // const name = e.target.children.name.value;
        // e.target.children.name.value = '';
        fetch('/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ loginUser2, passUser2 })//, passUser}
        }).then(r => r.json())
            .then(data => {
                console.log('sdfdsfdsfdsfdsfffffffffffffffffff');
                console.log(data);
                if (data.ok == true){
                    setLoginStatus(true);
                }else{
                    alert('try again')
                }
                    
                


            }
            )
    }

    return (
        <div>
            <div className='login-container'>
                {/* <input type='text' placeholder='kitten name' name='name'></input>
            <input type='text' placeholder='kitten name' name='name'></input> */}
                <label>please enter blessing : </label>
                <input type='text' onChange={handleName}></input>
                <label>please enter image : </label>
                <input type='text' onChange={handleWriter}></input>
                {/* <label>book creation date : </label>
                <input type='text' onChange={handleDate}></input> */}
                <button onClick={handleAdd}>add greeting</button>
                {/* <div className={signUpStatus ? "active" : "nonActive"}>{signUpStatus}</div> */}
            </div>
        </div>
    )

}

export default Book;