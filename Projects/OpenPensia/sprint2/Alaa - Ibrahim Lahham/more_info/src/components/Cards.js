
import './Cards.css'

function Cards(props) {
    return (
        <div className='all-cards'>
            {props.cards.map((card, index) => {
                return (
                    <div key={index} className='card'>
                        <h4 className='title'> {card.title} </h4>
                        <p className='sub-title'> {card.subTitle} </p>
                        <a href={card.link} target='_blank' className='link'> צפייה בכתבה </a>
                    </div>
                );
            })}
        </div>
    );
}

export default Cards;