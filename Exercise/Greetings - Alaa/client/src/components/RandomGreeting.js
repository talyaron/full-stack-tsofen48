
import './RandomGreeting.css'
import { useState } from 'react';

function RandomGreeting() {
    const [greeting, setGreeting] = useState({ greetingText: '', greetingImageSrc: '' });

    function getRandomGreeting() {
        fetch('/get-random-greeting')
            .then(res => res.json())
            .then(res => {
                if (res.err) {
                    console.log(`error: ${res.err}`);
                    return;
                }
                setGreeting(res.data);
            });
    }

    return (
        <div className='container'>
            <div>
                <button className='get-random-greeting' onClick={getRandomGreeting}> Get Random Greeting! </button>
            </div>
            <div className='greeting-display'>
                <h1> {greeting.greetingText} </h1>
                <img src={greeting.greetingImageSrc} />
            </div>
        </div>
    );

}

export default RandomGreeting;