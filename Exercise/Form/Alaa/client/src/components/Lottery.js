
import { useState } from "react";

function Lottery() {

  const [selectedCandidates, setSelectedCandidates] = useState([]);
  function getTwoWinners() {
    fetch('/get-selected-candidates')
      .then(r => r.json())
      .then(data => {
        setSelectedCandidates(data);
      });

  }


  return (
    <div className='body lottery'>
      <button onClick={getTwoWinners} > get Two Winners </button>
      {selectedCandidates.map((candidate, index) => <p key={index}> {candidate} </p>)}
    </div>
  );
}

export default Lottery;