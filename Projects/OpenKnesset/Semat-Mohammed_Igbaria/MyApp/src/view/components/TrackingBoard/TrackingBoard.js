import './TrackingBoard.css'

function TrackingBoard(props) {
    return (
        <div className='trackingBoard'>

        <label className="">{props.trackDate}  </label>
        <label className="">{props.trackerName}</label>
      
        <h2>{props.trackTitle}</h2>


        <p className="">תאריך הגשה:</p>
        <p className="">אומץ על ידי:</p>
        <p className="">הוקרא במליאה:</p>
        <h4>תוכן:</h4>
        




        </div>
    )
}

export default TrackingBoard