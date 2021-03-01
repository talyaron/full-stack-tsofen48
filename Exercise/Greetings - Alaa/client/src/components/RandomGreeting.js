
import './RandomGreeting.css'
import { useState } from 'react';

function RandomGreeting() {
    const [greeting, setGreeting] = useState({ greetingText: '', greetingImageSrc: '' });

    function getRandomGreeting() {
        fetch('/get-one-random-greeting')
            .then(res => res.json())
            .then(res => {
                if (res.err) {
                    console.log(`error: ${res.err}`);
                    return;
                }
                setGreeting({ greetingText: res.data.text, greetingImageSrc: res.data.src });
            });
    }

    return (
        <div className='container'>
            <div>
                <button className='get-random-greeting' onClick={getRandomGreeting}> Get Random Greeting! </button>
            </div>
            <div className='greeting-display'>
                <h1> {greeting.greetingText} </h1>
                <img alt='' src={greeting.greetingImageSrc} />
            </div>
        </div>
    );

}

export default RandomGreeting;