import './FormBuilder.css'
import React, { useState } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

let addCounter = [];

function FormBuilder(props) {
    // const [loginUser, setLoginUser] = useState('');
    // const [passUser, setPassUser] = useState('');
    const [questions, setQuestions] = useState([]);
    const [q, setQ] = useState('');
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

    // function handleLoginUser(e) {
    //     setLoginUser(e.target.value);
    //     // console.log(loginUser);
    // }

    // function handleLoginPass(e) {
    //     setPassUser(e.target.value);
    //     // console.log(passUser);
    // }

    // function handleLogin(e) {
    //     console.log(loginUser);
    //     console.log(passUser);

    //     // e.preventDefault();
    //     // const name = e.target.children.name.value;
    //     // e.target.children.name.value = '';
    //     fetch('/user/register', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ loginUser, passUser })//, passUser}
    //     }).then(r => r.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.ok == true)
    //                 setSignUpStatus('sign Up Succesfully');
    //         }
    //         )
    // }



    function handleEl(e) {
        setQ(e.target.value);

        // console.log(passUser);
    }

    function handleQuestion(e) {
        document.querySelector(".question").value="";
        console.log(q);
        console.log('------------------------------');
        console.log(questions);
        setQuestions([...questions,q]);
        // e.preventDefault();
        // const name = e.target.children.name.value;
        // e.target.children.name.value = '';
        // fetch('/user/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ loginUser2, passUser2 })//, passUser}
        // }).then(r => r.json())
        //     .then(data => {
        //         console.log('sdfdsfdsfdsfdsfffffffffffffffffff');
        //         console.log(data);
        //         if (data.ok == true){
        //             setLoginStatus(true);
        //         }else{
        //             alert('try again')
        //         }
                    
                


        //     }
        //     )
    }

    function submitForm(e){
        fetch('/user/questions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ questions })//, passUser}
        }).then(r => r.json())
            .then(data => {
                console.log('sdfdsfdsfdsfdsfffffffffffffffffff');
                console.log(data);

            }
            )
    }

    return (
        <div>
            <div className='login-container'>
                <input type='text' className="question" onChange={handleEl}></input>
                <button onClick={handleQuestion}>add</button>
                 {questions.map(qu=>{
                return (<div>{qu}</div>)
            })}
            <button onClick={submitForm}>submit form</button> 
                
            </div>
        </div>
    )

}

export default FormBuilder;