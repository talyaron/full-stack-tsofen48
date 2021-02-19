import './Login.css'
import React, { useState } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

let addCounter = [];

function Login(props) {
    const [loginUser, setLoginUser] = useState('');
    const [passUser, setPassUser] = useState('');
    const [loginUser2, setLoginUser2] = useState('');
    const [passUser2, setPassUser2] = useState('');
    const [signUpStatus, setSignUpStatus] = useState(false);
    const [loginStatus, setLoginStatus] = useState(false);
    // const {totalAmount, setTotalAmount} = props.amount;
    // console.log(props.totalAmount);

    // function addHandler() {
    //     if(addCounter.includes(parseInt(props.number))){
    //         alert('you added the gift already');
    //     }
    //     else{
    //     fetch('/add-gift', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }, body: JSON.stringify(props)
    //     })
    //         .then(r => r.json()).then(data => {
    //             console.log(data);
    //             addCounter.push(data);
    //             console.log(addCounter);
    //         })
    //         setTotalAmount(totalAmount-(props.price));
    //     }
    // }

    function handleLoginUser(e) {
        setLoginUser(e.target.value);
        // console.log(loginUser);
    }

    function handleLoginPass(e) {
        setPassUser(e.target.value);
        // console.log(passUser);
    }

    function handleLogin(e) {
        console.log(loginUser);
        console.log(passUser);

        // e.preventDefault();
        // const name = e.target.children.name.value;
        // e.target.children.name.value = '';
        fetch('/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ loginUser, passUser })//, passUser}
        }).then(r => r.json())
            .then(data => {
                console.log(data);
                if (data.ok == true)
                    setSignUpStatus('sign Up Succesfully');
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
                <input type='text' onChange={handleLoginUser}></input>
                <input type='text' onChange={handleLoginPass}></input>
                <button onClick={handleLogin}>register</button>
                <div className={signUpStatus ? "active" : "nonActive"}>{signUpStatus}</div>
            </div>
            <div ></div>

            <div className='login-container'>
                {/* <input type='text' placeholder='kitten name' name='name'></input>
            <input type='text' placeholder='kitten name' name='name'></input> */}
                <input type='text' onChange={handleLoginUser2}></input>
                <input type='text' onChange={handleLoginPass2}></input>
                <Link to="/formBuilder"><button onClick={handleLogin2}>login</button></Link>
            </div>
        </div>
    )

}

export default Login;