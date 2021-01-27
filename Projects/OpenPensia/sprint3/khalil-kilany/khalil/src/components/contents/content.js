import './content.css'
import Block from '../blocks/block'
import React, { useState, useEffect } from 'react';

function Content() {

  const [votes, setVotes] = useState([]);

  useEffect(() => {
    fetch('/get-votes-list')
      .then(r => r.json())
      .then(data => {
        console.log(data)
        setVotes(data);
      })
  }, [])
  return (
    <div className="content">
      {votes.map((list, index) => {
        return (<Block
          key={index}
          title={list.title}
          status={list.status}
        />)
      })}
    </div>

  );
}

export default Content;