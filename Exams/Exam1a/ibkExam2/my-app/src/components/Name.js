import './Name.css'
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//let names = [];


function Name(props) {
    const [target, setTarget] = useState(''); 
    const [name, setName] = useState(''); 
    const [names, setNames] = useState([]); 
    //const [name, setName] = useState(document.querySelector('.image-src-input')).value;

    function addName(){
        const srcInput = document.querySelector('.image-src-input').value;
        if(names.length<=5){
        //setName(srcInput);
        
        //setName()
        //console.log(target);
        //let a = target;
        names.push(srcInput);
        setNames(names)
    }else{
        alert('you can add more than 5')
    }
    }

    function add() {
        if(names.length==4){
            fetch('/add-name', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }, body: JSON.stringify(names)
            })
        }else{
            alert('go to lotter just after 5 names')
        }
    }

    function handleValue(e){
        setTarget(e.target.value);
    }

    return (

        <div class="container-names">
            <Link to="/goToLotery"><button onClick={add}> Add To Lottery </button></Link>
            
            <div className="search-names">
                <input className='image-src-input' placeholder="add name" onChange={handleValue}></input>
                <button onClick={addName}> Add Name </button>
            </div>
            {names.map(name=>{
                return (<div>{name}</div>)
            })}
            {/* <div>{name}</div> */}
        </div >
    )

}

export default Name;