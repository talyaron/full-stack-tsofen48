import './GreetingForm.css';

function GreetingForm() {

    function addGreeting(e) {
        e.preventDefault();
        let greetingImageSrc = e.target.elements.greetingImageSrc.value,
            greetingText = e.target.elements.greetingText.value;
        fetch('/add-greeting', {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({ greetingText, greetingImageSrc })
        })
            .then(data => {
                data.ok && document.getElementById("myForm").reset();
                console.log(data);
            })

    }

    return (
        <form id='myForm' onSubmit={addGreeting}>
            <div>
                <label > Enter Greeting Image URL:</label >
                <input type='text' placeholder='image URL' name='greetingImageSrc' />
            </div>
            <div>
                <label > Enter Greeting Image Text:</label >
                <input type='text' placeholder='greeting text' name='greetingText' />
            </div>
            <div>
                <button type='submit'> Add Greeting</button>
            </div>
        </form>
    );
}

export default GreetingForm;