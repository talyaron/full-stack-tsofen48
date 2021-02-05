import './Name.css'
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
let names = [];


function Name(props) {
    const [name, setName] = useState(''); 
    //const [name, setName] = useState(document.querySelector('.image-src-input')).value;

    function addName(){
        let srcInput = document.querySelector('.image-src-input');
        setName( document.querySelector('.image-src-input').value);
        console.log({name});
        //names.push({name});
    }

    function add() {

            fetch('/add-name', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }, body: JSON.stringify({name})
            })
    }

    return (

        <div class="container-names">
            <Link to="/goToLotery"><button onClick={add}> Add To Lottery </button></Link>
            
            <div className="search-names">
                <input className='image-src-input' placeholder="add name"></input>
                <button onClick={addName}> Add Name </button>
            </div>
            <div>{name}</div>
        </div >
    )

}

export default Name;