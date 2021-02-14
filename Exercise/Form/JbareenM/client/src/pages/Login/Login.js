import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';


function Login() {
    const history = useHistory();


    useEffect(() => {

    }, [])

    function handleLogin(e) {
        e.preventDefault();

        let { username, password } = e.target.children;
        username = username.value;
        password = password.value;
        console.log(username, password)

        fetch('/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        }).then(r => r.json())
            .then(data => {
                console.log(data);
                //if login true - redirect to forms creation page;
                if (data.login === true) {
                    history.push('/form-create')
                }

            })
    }

    function handleRegister(e) {
        e.preventDefault();

        let { username, password } = e.target.children;
        username = username.value;
        password = password.value;
        console.log(username, password)

        fetch('/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        }).then(r => r.json())
            .then(data => { console.log(data) })
    }

    return (
        <div>

            <form onSubmit={handleLogin}>
                <input name='username' type='text' placeholder='user name' />
                <input name='password' type='text' placeholder='password' />
                <button type='submit'>Login</button>
            </form>

            <form onSubmit={handleRegister}>
                <input name='username' type='text' placeholder='user name' />
                <input name='password' type='text' placeholder='password' />
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default Login
