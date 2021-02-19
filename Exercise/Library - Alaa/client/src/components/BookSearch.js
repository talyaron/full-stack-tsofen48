
import { useState } from "react";
import Button from './Button';

function BookSearch() {

  // const [selectedCandidates, setSelectedCandidates] = useState([]);
  function getBook() {
    fetch('/get-book')
      .then(r => r.json())
      // .then(data => {
      //   setSelectedCandidates(data.candidates.map(candidateInfo => candidateInfo.name));
      // });

  }


  return (
    <div className='body lottery'>
      <Button onClick={getBook} innerText='Search' />
      {/* {selectedCandidates.map((candidate, index) => <p key={index}> {candidate} </p>)} */}
    </div>
  );
}

export default BookSearch;