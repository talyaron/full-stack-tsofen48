import './GreetingForm.css';
import { useState } from 'react';

function GreetingForm() {
    const [confirmMassage, setConfirmMassage] = useState({ massage: '', state: false });

    function addGreeting(e) {
        e.preventDefault();
        setConfirmMassage({ massage: confirmMassage, state: false });
        let greetingImageSrc = e.target.elements.greetingImageSrc.value,
            greetingText = e.target.elements.greetingText.value;
        fetch('/add-greeting', {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({ greetingText, greetingImageSrc })
        })
            .then(r => r.json())
            .then(data => {
                document.getElementById("myForm").reset();
                console.log(data)
                let massage = data.success ? 'The Greeting Was Added Successfully' :
                    (data.err ? data.err : 'Something went wrong! try again later');
                setConfirmMassage({ massage: massage, state: true });
                setTimeout(() => {
                    setConfirmMassage({ massage: '', state: false });
                }, 7000);
            })

    }

    return (
        <form id='myForm' onSubmit={addGreeting}>
            <div>
                <label > Enter Greeting Text:</label >
                <input type='text' placeholder='greeting text' name='greetingText' />
            </div>
            <div>
                <label > Enter Greeting Image:</label >
                <input type='text' placeholder='image URL' name='greetingImageSrc' />
            </div>
            <div>
                <button type='submit'> Add Greeting</button>
            </div>
            {confirmMassage.state ? <div className='confim-massage'> <h2> {confirmMassage.massage}</h2></div> : ''}
        </form>

    );
}

export default GreetingForm;