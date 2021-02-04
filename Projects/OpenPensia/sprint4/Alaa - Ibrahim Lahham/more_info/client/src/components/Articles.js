
import './Articles.css'

function Articles(props) {
    return (
        <div className='all-articles'>
            {props.articles.map((article, index) => {
                return (
                    <div key={index} className='article'>
                        <h4 className='title'> {article.title} </h4>
                        <p className='sub-title'> {article.subTitle} </p>
                        <a href={article.link} target='_blank'  rel="noreferrer" className='link'> צפייה בכתבה </a>
                    </div>
                );
            })}
        </div>
    );
}

export default Articles;