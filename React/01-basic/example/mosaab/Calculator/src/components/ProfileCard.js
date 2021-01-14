import React from 'react'

export default function ProfileCard(props) {
    return (
        <div class="card" style={{width: '18rem',margin:"10px" , border:"1px solid blue"}}>
        <img class="card-img-top" src={props.src}/>
        <div class="card-body">
          <h5 class="card-title">{props.name}</h5>
          <h3 class="card-text">{props.paragraph}</h3>
        </div>
        </div>
    )
}
