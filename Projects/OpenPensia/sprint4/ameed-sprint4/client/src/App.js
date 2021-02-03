import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState, useEffect } from 'react';

//components
import Content from './components/content.js';
import Header from './components/header.js';
import Nav from './components/nav.js';




function App() {


    const [head, setHeader] = useState([]);

    useEffect(() => {
        fetch('/header/get-header')
            .then(r => r.json())
            .then(data => {
                console.log(data)
                setHeader(data.header);
            })
    }, [])


    const [content, setContent] = useState([]);

    useEffect(() => {
        fetch('/content/get-voting')
            .then(r => r.json())
            .then(data => {
                console.log(data)
                setContent(data.voting);
            })
    }, [])



    const [nav, setNav] = useState([]);

    useEffect(() => {
        fetch('/nav/get-nav')
            .then(r => r.json())
            .then(data => {
                console.log(data)
                setNav(data.nav);
            })
    }, [])





    return (

        <div className="mainApp" >

            <div className="App " >

                {/* header view */}



                {head.map((list, index) => {
                    return (<Header
                        key={index}
                        bank={list.bank}
                        img={list.img}
                        name={list.name}
                    />)


                })
                }




                {/* end header view */}


                {/* ********************************************************
************************************************************ */}

                {/* nav view */}


                {nav.map((list, index) => {
                    return (<Nav
                        key={index}
                        summariesLink={list.summariesLink}
                        moreInfoLink={list.moreInfoLink}
                        voteDetailesLink={list.voteDetailesLink}
                    />)

                })
                }

                {/* end nav view*/}

                {/* ********************************************************
************************************************************ */}

                {/* content view */}



                {content.map((list, index) => {
                    return (<Content
                        key={index}
                        disApprovePer={list.disApprovePer}
                        ApprovePer={list.ApprovePer}
                    />)

                })
                }



                {/* end content view */}

                {/* ********************************************************
************************************************************ */}

            </div>
            {/* app-div */}

            {/* div mainApp here */}   </div>


    );
}






export default App;