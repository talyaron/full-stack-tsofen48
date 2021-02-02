import React, { useState } from 'react'

const Kitten = (props) => {
    const { kitten } = props;
    console.log(kitten)
    const [isEdit, setIsEdit] = useState(false);
    const [newName, setNewName] = useState('');

    function handleName(e) {
        setNewName(e.target.value);
    }

    function handleUpdateName(e) {
        setIsEdit(false)

        fetch('/update-kitten-name', {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: kitten._id, newName })
        }).then(r => r.json())
            .then(data => console.log(data))


    }

    return (
        <div>
            <div onClick={() => { setIsEdit(!isEdit) }}>{kitten.name}</div>
            {isEdit ? <div>
                <input type='text' placeholder='new name' onKeyUp={handleName} />
                <input type='button' value='UPDATE' onClick={handleUpdateName} />
            </div>:null}
        </div>
    )
}

export default Kitten
