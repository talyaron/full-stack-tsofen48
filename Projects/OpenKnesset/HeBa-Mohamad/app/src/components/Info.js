import './Info.css';

function Info(props){
    return (
        <div className='grid-container'>
            {props._data.map((data, index)=>{
                return(
                    <div className='grid-item' key={index}>
                        <h2 className='_dataTitle'> {data.title} </h2>
                        <a className='_dataInfo'> {data.info} </a>
                    </div>
                );
            })}
        </div>
    );
}

export default Info