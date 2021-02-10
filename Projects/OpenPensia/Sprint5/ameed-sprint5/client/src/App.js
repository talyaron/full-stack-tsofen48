import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState, useEffect } from 'react';

//components
import Header from './components/header.js';
import Nav from './components/nav.js';




function App() {


    const [vots, setVots] = useState([]);

    useEffect(() => {
        fetch('vots/get-vots')
            .then(r => r.json())
            .then(data => {
                console.log(data)
                setVots(data.vots);
            })
    }, [])




    return (

        <div className="mainApp" >
        <div className="App" >

                <header>

                    {vots.map((list, index) => {
                        return (<Header
                            key={index}
                            bank={list.bank}
                            img={list.img}
                            name={list.name}
                        />)})
                    }


                </header>



                        {/* nav view */}
                              <Nav />


        </div>
        </div>

    );
}






export default App;