import './CandidateInfo.css'

function CandidateInfo(props) {
    const candidateInfo = props.candidateInfo;
    return (
        <div>
            <div className='company-name'>
                {candidateInfo.companyName}{console.log(props)}
            </div>
            <img className='candidate-img' alt='candidate' src={candidateInfo.imgSrc} />
            <div className='candidate-name'>
                {candidateInfo.name}
            </div>
        </div>
    );
}

export default CandidateInfo;