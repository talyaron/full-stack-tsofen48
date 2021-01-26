import React from 'react'
import AllBarsKenest from './AllBarsKenest'

const AllProfiles = [
    {date:"20.11.2",
    name:"נאום בן דקה",
    tittle:"סגירת מרכולים בבני ברק",
    dateOfSubmit:"21.12.12",
    editFrom:"דיון בעת פגרה",
    readInPlenary:"הוקרא במליאה",
    content:"השבוע נודע לי כי......."},

    {date:"20.11.2",
    name:"נאום בן דקה",
    tittle:"סגירת מרכולים בבני ברק",
    dateOfSubmit:"21.12.12",
    editFrom:"דיון בעת פגרה",
    readInPlenary:"הוקרא במליאה",
    content:"השבוע נודע לי כי......."}
]

export default function App() {
    return (
        <div>
            <AllBarsKenest AllProfiles={AllProfiles} />
        </div>
    )
}
