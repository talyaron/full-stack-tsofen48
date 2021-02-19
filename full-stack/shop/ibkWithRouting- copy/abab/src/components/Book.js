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
    const [name, setName] = useState('');
    const [writer, setWriter] = useState('');
    const [date, setDate] = useState('');


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

    function handleName(e) {
        setName(e.target.value);
        // console.log(loginUser);
    }

    function handleWriter(e) {
        setWriter(e.target.value);
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
        console.log(name);
        console.log(writer);
        console.log(date);

        // e.preventDefault();
        // const name = e.target.children.name.value;
        // e.target.children.name.value = '';
        fetch('/user/add-book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, writer, date })//, passUser}
        }).then(r => r.json())
            .then(data => {
                console.log(data);
                if (data.ok == false)
                     alert('book is already exists')
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
                <label>book name : </label>
                <input type='text' onChange={handleName}></input>
                <label>book writer : </label>
                <input type='text' onChange={handleWriter}></input>
                <label>book creation date : </label>
                <input type='text' onChange={handleDate}></input>
                <button onClick={handleAdd}>add book</button>
                {/* <div className={signUpStatus ? "active" : "nonActive"}>{signUpStatus}</div> */}
            </div>
        </div>
    )

}

export default Book;