import './GreetingForm.css';

function GreetingForm() {

    return (
        <form>
            <lable> Enter Greeting Image URL:</lable>
            <input type='text' placeholder='image URL' />
            <lable> Enter Greeting Image Text:</lable>
            <input type='text' placeholder='greeting text' />
            <div>
                <button type='submit'> Add Greeting</button>
            </div>
        </form>
    );
}

export default GreetingForm;