import React,{useState,useEffect} from "react";
import "./Details.css";
export default function Details() {
  const [directorDetails, setDirectorDetails] = useState({});
  useEffect(() => {
    fetch(
      `http://localhost:3000/directors/?id=${1}`||`https://pensia-rema-hosen-backend.herokuapp.com/directors/${window.location.search}`
    )
      .then((response) => {
        return response.json();
      })
      .then((res) => {
          let {directorDetails} = res
        setDirectorDetails(directorDetails)
        
      });
  }, []);


  return (
    <div className="textContainer">
        
      <div className="jobExperienceContainer">
        <h4>נסיון תעסוקתי</h4>

        {directorDetails.jobExperience?.map((job, index) => {
          return (
            < div className='jobExperience' key={index}>
              <p >{job?.jobTitle}</p>
              <button style={{ display: job?.active ? "block" : "none" }}>
                בהווה
              </button>
            </div>
          );
        })}
      </div>

      <div className="financialExpertise">
        <h4>מומחיות פיננסית</h4>

        <p>
          {" "}
          {directorDetails?.financialExpertise ? "יש מומחיות" : "אין מומחויות "}{" "}
        </p>
      </div>

      <div className="education">
        <h4>השכלה</h4>

        {directorDetails.education?.map((ed, index) => {
          return (
              <p key={index}>
                {ed.subject} , {ed.college}
              </p>
          );
        })}
      </div>

       <div className="conflictOfInterests">
        <h4>ניגוד עניינים</h4>

        <p> {directorDetails.conflictOfInterests?.length > 0 ? "יש  " : "אין  "} </p>
      </div> 

      <div className="relatives">
        <h4>קרוב משפחה של בעל שליטה</h4>

        {directorDetails.relatives?.map((relative, index) => {
          return (
              <p key={index}>{relative} </p>
          );
        })}
      </div>

      <div className="linkedin-buttonContainer">
        <a className="linkedIn" href={directorDetails?.linkToLinkedIn}>
          {" "}
          צפייה בנתונים בלינקדאין
        </a>
      </div>
      <br></br>
      <br></br>
      <br></br>

    </div>
  );
}
