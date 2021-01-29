
import './product.css'

function Products(props) {
    return (
        <div className='Products'>
        {props.array.map((array, index)=>{
            return(
                <div className='product' key={index}>
                    <img className='imgproduct' src={array.url}>  </img>
                    <label className='price'> {array.price}  </label>
                    <button className='btnadd'> </button>
                </div>
            );
        })}
        
        </div>
    );
}

export default Products;