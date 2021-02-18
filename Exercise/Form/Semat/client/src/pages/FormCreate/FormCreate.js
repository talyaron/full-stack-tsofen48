import React from 'react'

const FormCreate = () => {
    return (
        <div>
            FormCreate
            <form onSubmit={handleFormQ}>
                <input name='question' type='text' placeholder='Question' />
                <button onClick={addQuestion}>ADD</button>
                



                <button type='submit'>Login</button>
            </form>



        </div>
    )
}

export default FormCreate
