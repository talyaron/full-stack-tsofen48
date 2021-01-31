
import './Gifts.css'

function Gifts(props) {
    const gifts = props.gifts;
    return (
        <div className='all-gifts'>
            {gifts.map(gift => {
                return (
                    <div key={gift.id} className='gift'>
                        <button className="add-gift"> Add</button>
                        <image src={gift.src}> </image>
                        <p className="price"> {gift.price} $ </p>
                    </div>
                );
            })}
        </div>
    );
}

export default Gifts;