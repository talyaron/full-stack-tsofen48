import React, { useEffect } from "react";
function Home(props) {

    const candidateNames = props.candidateNames;
    // console.log(candidateNames)
    const setCandidateNames = props.setCandidateNames;
//     useEffect(() => {
//     fetch('/set-candidate', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         }, body: JSON.stringify({ name })
//       })
//         .then(r => r.json())
//         .then(candidateNames => {
//           console.log(candidateNames)
//           setCandidateNames(candidateNames);
//         });
//    }, [])
    function addCandidate() {
        // useEffect(() => {
            let candidateName = document.querySelector('.add-candidate-input');
            let name = !!candidateName && candidateName.value;
            candidateName.value = '';
            candidateNames.push(name);
            setCandidateNames(candidateNames);
            if (candidateNames.length >= 5) {
                let lotteryButton = document.querySelector('.lottery-btn');
                !!lotteryButton && lotteryButton.classList.remove('hide');
            }

            // !!name && fetch('/add-candidate', {
            //   method: 'POST',
            //   headers: {
            //     'Content-Type': 'application/json'
            //   }, body: JSON.stringify({ name })
            // })
            //   .then(r => r.json());
        // }, [])
    }
    function goToLottery() {
        fetch('/add-candidates', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              }, body: JSON.stringify({ candidateNames })
            })
              .then(r => r.json());
    }

    return <div className='body add_input'>
        <div className="add-input">
            <input className='add-candidate-input' placeholder="add candidate name"></input>
            <button onClick={addCandidate}> Add </button>
        </div >

        <div className='candidates'>
            {candidateNames.map(name => {
                return (
                    <div className='candidate-name'>
                        {name}
                    </div>
                );

            })}
        </div>

        <div className="lottery-btn hide">
            <button onClick={goToLottery} > Go To Lottery </button>
        </div >
    </div>;
}

export default Home;