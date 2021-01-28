
import './Cards.css'

function Cards(props) {
    return (
        <div className='all-cards'>
            {props.cards.map((card, index) => {
                return (
                    <div key={index} className='card'>
                       <div>
                      <img className='candidate-img' src={card.link} />
                      </div>  
                      <div>
                        <h4 className='title'> {card.title} </h4>
                        <p className='sub-title'> {card.subTitle} </p>
                      </div>
                   
                      <div>
                        <img className="more-img" src="https://w7.pngwing.com/pngs/452/627/png-transparent-computer-icons-arrow-left-arrow-angle-hand-logo.png"/>
                      </div>  
                    </div>
                );
            })}
        </div>
    );
}

export default Cards;