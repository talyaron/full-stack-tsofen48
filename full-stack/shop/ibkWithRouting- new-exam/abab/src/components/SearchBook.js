import './SearchBook.css'
import React, { useState } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

let addCounter = [];

function SearchBook(props) {
    const [aa, setAa] = useState('');
    const [bb, setBb] = useState([]);
    const [name, setName] = useState('');
    const [writer, setWriter] = useState('');
    const [date, setDate] = useState('');
    const [searchName, setSearchName] = useState('');
    const [returningInfo, setReturningInfo] = useState('');
    const [returningInfoWriter, setReturningInfoWriter] = useState('');
    const [returningInfoDate, setReturningInfoDate] = useState('');


    const [loginUser, setLoginUser] = useState('');
    const [passUser, setPassUser] = useState('');
    const [loginUser2, setLoginUser2] = useState('');
    const [passUser2, setPassUser2] = useState('');
    const [signUpStatus, setSignUpStatus] = useState(false);
    const [loginStatus, setLoginStatus] = useState(false);


    function handleSearchName(e) {
        setSearchName(e.target.value);
        // console.log(loginUser);
    }

    function handleGetRandomGreetings(e) {
        
        fetch('/user/search-blessing').then(r => r.json()).then(data => {
            //console.log(data);
            //setRemainedGifts(data);
            setAa(data);
            //console.log(data.data)
            console.log(aa)
            console.log('344242424')
            console.log(aa.data)
            //console.log(data)
            //lotteryButton.classList.remove('hide');
        })
        
    }

    function handleAdd(e) {
        console.log(searchName);

        // e.preventDefault();
        // const name = e.target.children.name.value;
        // e.target.children.name.value = '';
        fetch('/user/search-blessing', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ searchName })//, passUser}
        }).then(r => r.json())
            .then(data => {
                console.log(data);
                if (data.ok == false)
                      alert('couldnt find such a book')
                else if(data.ok == true){
                    console.log('loooooooooooooooooooooooooooooooooo');
                    console.log(data.data);
                    setReturningInfo(data.data.bookName);
                    setReturningInfoWriter(data.data.bookWriter);
                    setReturningInfoDate(data.data.bookDate);
                    console.log('yoooooooooooooooooooooooooooooooooo');
                    console.log(returningInfo);
                    console.log(returningInfoWriter);
                    console.log(returningInfoDate);

                }
            }
            )
    }

    return (
        <div>
            <div className='login-container'>
                {/* <input type='text' placeholder='kitten name' name='name'></input>
            <input type='text' placeholder='kitten name' name='name'></input> */}
                {/* <label> search book by name : </label>
                <input type='text' onChange={handleSearchName}></input> */}

                <button onClick={handleGetRandomGreetings}>receive random blessing</button>
                {/* {aa.map(data => {
                    return( */}
                    <div className='retrieve-data'>
                        {aa?<p className='blessing-retrieve'>{aa.data.blessing}</p>:null}
                        {aa?<img className='image-retrieve' src={aa.data.image} />:null}
                    </div>
                    {/* )
                })} */}
                {/* <div>{aa}</div> 
                <div>{bb}</div>
                
                {returningInfo?<div className="info-books-retrieve">Book name :  {returningInfo}</div>:null}
                {returningInfoWriter?<div className="info-books-retrieve">Book writer :  {returningInfoWriter}</div>:null}
                {returningInfoDate?<div className="info-books-retrieve">Book date :  {returningInfoDate}</div>:null} */}

                
                {/* {returningInfo.map(name=>{
                return (<div>{name}</div>)
            })} */}
            </div>
        </div>
    )

}

export default SearchBook;