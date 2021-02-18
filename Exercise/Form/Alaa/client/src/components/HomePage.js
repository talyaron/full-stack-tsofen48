import { Link } from 'react-router-dom';

function Home({ candidateNames, setCandidateNames }) {

    function addCandidate() {

        let candidateName = document.querySelector('.add-candidate-input');
        let name = !!candidateName && candidateName.value;
        candidateName.value = '';
        if (candidateNames.find(el => el === name)) {
            alert(`${name} Already Exists in your list`);
            console.log('before the return');
            return;
        }
        if (candidateNames.length >= 4) {
            let lotteryButton = document.querySelector('.lottery-btn');
            !!lotteryButton && lotteryButton.classList.remove('hide');
        }
        console.log(`before the adding ${name}`);
        setCandidateNames([...candidateNames, name]);
    }

    function goToLottery() {
        fetch('/add-candidates', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({ candidateNames })
        })
            .then(r => r.json())
            .then(data => console.log(data));
    }

    return (
        <div className='body add_input'>
            <div className="add-input">
                <input className='add-candidate-input' placeholder="add candidate name"></input>
                <button onClick={addCandidate}> Add </button>
            </div >

            <div className='candidates'>
                {candidateNames.map((name, index) => {
                    return (
                        <div key={index} className='candidate-name'>
                            {name}
                        </div>
                    );

                })}
            </div>

            <div className="lottery-btn hide">
                <Link to="/lottery" >
                    <button onClick={goToLottery} > Go To Lottery </button>
                </Link>
            </div >
        </div>
    );
}

export default Home;