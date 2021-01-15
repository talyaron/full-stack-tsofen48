import React, { useState } from 'react'
import './goall.css'
function Goal(props) {
    const [goal, setGoal] = useState(false);

    function changeEv(){
        setGoal(!goal);
        console.log("clicked")
    }
    return (
        <div className="icon">
               <img style={{width:"150px",height:"250px",margin:"0 auto auto 0",position:"absolute"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa_rNgNudPna4XdS33WzGpJmHImDjKmsY0lA&usqp=CAU" alt="img1"/>
<img id="soccer" className={goal ? 'btn btn-primary movedown' : 'btn btn-danger moveup'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBoG21cjVREJFaQ9cuQWvQQKbh6DPZB1znGg&usqp=CAU" onClick={changeEv} ></img>
 <img id="shaar" src="https://lh3.googleusercontent.com/proxy/dq4U_5MGAvGrwSX5eZUm6MaXTwY6OM2enDMhGvhIBUf8nZIQYvXkiLSEaaSYhUntlJeHmJ_z9-2QzqOWcjBhgpfaK7b0hpk_OcaR-wUzIzs"/>
       <h1 style={{position:"absolute",top:"250px"}}>{goal? "Goal!!":"Click The Ball"}</h1>
        </div>
    );
}

export default Goal