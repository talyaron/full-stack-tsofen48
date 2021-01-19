import './Label.css';


function Label(props)  {
  return (
    <div className="block">
      <label className={'label'} onChange={handleChange}>
          {props.innerText}
      </label> 
      <input type="text" />
    </div>
  );
}
export default Label;