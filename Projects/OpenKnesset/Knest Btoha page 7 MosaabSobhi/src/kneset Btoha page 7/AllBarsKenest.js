import React from 'react'
import Kenest from './Kenest'


export default function AllBarsKenest(props) {
    return (
        <div>
           {
props.AllProfiles.map((e , index)=>
<Kenest
    date={e.date}
    name={e.name}
    tittle={e.tittle}
    dateOfSubmit={e.dateOfSubmit}
    editFrom={e.editFrom}
    readInPlenary={e.readInPlenary}
    content={e.content}
    index={index} />
    )
    }
    </div>
    )
}
