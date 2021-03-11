import React from 'react'

const InputQuestion = props => {

    const {updateQuestion, index} = props;

    return (
        <input type='text' placeholder='Write the question' onSubmit={(e)=>{updateQuestion(e.target.value, index)}}/>
    )
}

export default InputQuestion
