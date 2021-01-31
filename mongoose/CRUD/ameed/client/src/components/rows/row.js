import './row.css';

function Row({ price, imgSrc, id }) {
  return (
    <div className="row">
      <span className="price">{price}$</span>
      <img src={imgSrc} />
      <button  type="submit" onClick={add}> add</button>
    </div>
  );

  function add(e) {
    console.log(id);
    
    fetch('/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({id:id ,price:price })
    }).then(r => r.json())
        .then(data => {
            console.log(data)})
        }
}



export default Row;
