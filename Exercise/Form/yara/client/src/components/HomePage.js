import './HomePage.css'
import React, { useState,useEffect } from "react";
function HomePage(props) {
    const [user,Setuser]=useState();
    const [password,Setpassword]=useState();
    const [newuser,SetNewuser]=useState();
    const [newpassword,SetNewpassword]=useState();
    useEffect(()=>{
        document.getElementById("Succeful").hidden="true";
    })
    function LogIn(){

        fetch("/Login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({user:user,password:password}),
          })
            .then((r) => r.json())
            .then((data) => {
              console.log(data)
            });
            console.log(user,password);
    }
    function SignUp(){
        document.getElementById("Succeful").hidden="false";
        fetch("/SignUp", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({newuser:newuser,newpassword:newpassword}),
          })
            .then((r) => r.json())
            .then((data) => {
              console.log(data)
            });
            console.log(newuser,newpassword);
            document.getElementById("Succeful").hidden="false";
    }


    return (<div>
        <div className="green">
        <input type="text" onChange={(e) => {
        Setuser(e.target.value);}}></input>
        <input type="password" onChange={(e) => {
        Setpassword(e.target.value);}}></input>
        <button onClick={LogIn}>Log in</button>
        </div>
        <br/>
        <div className="yellow">
        <input type="text" onChange={(e) => {
        SetNewuser(e.target.value);}}></input>
        <input type="password" onChange={(e) => {
        SetNewpassword(e.target.value);}}></input>
        <button onClick={SignUp}>Sign Up</button>
        <label id="Succeful">Sign Up Succesfuly</label>
        </div>
    </div>)
}

export default HomePage;