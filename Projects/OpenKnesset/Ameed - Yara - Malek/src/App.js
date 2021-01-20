
import './App.css';
import Icon from './components/Icon.js';
import React, { useState } from 'react';
import MainHeader from './components/MainHead.js';
import MainFooter from './components/MainFooter.js';





const openkneset = [
    {
        date: '21.11.20',
        name: 'נאום בן דקה',
        title: 'סגירת מרכולים בבני ברק',
        dateSend: '',
        Courage: '',
        Wasread: '',
        content: ''
    },
    {
        date: '22.11.20',
        name: 'דיון בעת פגרה',
        title: 'מענק לעסקים הקורסים',
        dateSend: '',
        Courage: '',
        Wasread: '',
        content: 'השבוע נודע לי כי.......'
    }
]


function App() {


    return (

        <div className="App " >
            <header className="App-header" >

                <MainHeader />


                < span className="line" > </span>
            </header>
            <div className="e">
            <a href="/">דף בית</a><span> / </span> <a href="/">לוח מעקב</a> 
            </div>


            <div>
                {openkneset.map((icon, index) => {
                    return (<Icon
                        key={index}
                        date={icon.date}
                        name={icon.name}
                        title={icon.title}
                        dateSend={icon.dateSend}
                        Courage={icon.Courage}
                        Wasread={icon.Wasread}
                        content={icon.content}
                    />)

                })
                }
            </div>

            <footer className="App-footer" >

                < span className="line2" > </span>
                <p></p>
                <MainFooter />

            </footer>


        </div>

    );
}



export default App;