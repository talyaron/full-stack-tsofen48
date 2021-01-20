import './DirectorInfo.css'

function DirectorInfo(props) {
    return (
        <div className='directorInfo'>
         <button className="back">{props.organization}</button>
         <img src={props.img} alt="pic"/>
         <div className="directorName">{props.directorName}</div>    
        </div>
    )
}

export default DirectorInfo