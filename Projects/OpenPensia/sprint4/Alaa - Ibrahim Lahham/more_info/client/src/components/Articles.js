
import './Articles.css'

function Articles(props) {
    return (
        <div className='all-articles'>
            {props.articles.map((card, index) => {
                return (
                    <div key={index} className='article'>
                        <h4 className='title'> {card.title} </h4>
                        <p className='sub-title'> {card.subTitle} </p>
                        <a href={card.link} target='_blank'  rel="noreferrer" className='link'> צפייה בכתבה </a>
                    </div>
                );
            })}
        </div>
    );
}

export default Articles;