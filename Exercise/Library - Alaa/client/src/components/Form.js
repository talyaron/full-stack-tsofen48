import { useState } from 'react';
// import { Link } from 'react-router-dom';
import Button from './Button';

function Form() {
    const [confirmMassage, setConfirmMassage] = useState({ massage: '', state: false });
    function addBook() {

        let inputs = [document.querySelector('[name="name"]'),document.querySelector('[name="year"]'),document.querySelector('[name="author"]')];
        let values = inputs.map(input => input.value);
        inputs.map(input => input.value = '');
        let bookInfo = {
            name: values[0],
            year: values[1],
            author: values[2]
        };
        fetch('/add-book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({ bookInfo })
        })
            .then(r => r.json())
            .then(data => {
                let massage = data.success ? 'The Book Was Added Successfully' :
                    (data.error ? data.error : 'Book not added! try again later');

                setConfirmMassage({ massage: massage, state: true });
                setTimeout(() => {
                    setConfirmMassage({ massage: '', state: false });
                }, 10000);
            });
    }
    return (
        <form className='body' onSubmit={(e) => e.preventDefault()}>
            <div className="add-input">
                <input name='name' className='add-candidate-input' placeholder="add book's name"></input>
                <input name='year' className='add-candidate-input' placeholder="add book's year of publish"></input>
                <input name='author' className='add-candidate-input' placeholder="add author's name"></input>
                <Button onClick={addBook} innerText='Add Book' type='submit' />
            </div >

            {confirmMassage.state ? <div className='confim-massage'> <h2> {confirmMassage.massage}</h2></div> : ''}
            {/* <div className="lottery-btn hide">
                <Link to="/confirmation" >
                    <Button onClick={goToLottery} innerText=' Go To Lottery' /> 
                </Link>
            </div > */}
        </form >
    );
}

export default Form;