
import { useState } from "react";
import Button from './Button';

function Lottery() {

  const [selectedCandidates, setSelectedCandidates] = useState([]);
  function getTwoWinners() {
    fetch('/get-selected-candidates')
      .then(r => r.json())
      .then(data => {
        setSelectedCandidates(data.candidates.map(candidateInfo => candidateInfo.name));
      });

  }


  return (
    <div className='body lottery'>
      <Button onClick={getTwoWinners} innerText='get Two Winners' />
      {selectedCandidates.map((candidate, index) => <p key={index}> {candidate} </p>)}
    </div>
  );
}

export default Lottery;