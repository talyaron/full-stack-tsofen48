import "./requestitem.css";

function requestitem(props) {
  return (
    <div dir="rtl" class="requestitem">
      <p className="toolname">{props.toolname}</p>
      <h2 className="subject">{props.subject}</h2>
      <p className="requestTime">תאריך הגשה: {props.requestTime}</p>
      <p className="requestedBy">אומץ על ידי: {props.requestedBy}</p>
      <p className="fullInstruction">הוקרא במליאה: {props.fullInstruction}</p>
      <h1 className="reqContent">תוכן: </h1>
      <p className="fReqContent">
        <b>{props.fReqContent}</b>
      </p>
    </div>
  );
}

export default requestitem;
