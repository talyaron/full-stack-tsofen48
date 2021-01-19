
import './Cards.css'

function Cards(props) {
    return (
        <div className='cards'>
            {props.tools.map((tool, index)=>{
                return(
                    <div className='card' key={index}>
                        <h2 className='title'> {tool.title} </h2>
                        <p className='content'> {tool.content} </p>
                    </div>
                );
            })}
            
        </div>
    );
}

export default Cards;