import './eachProfile.css'
import React,{useState} from "react";

const isLikeRed='https://i.ibb.co/7WmRNwr/like.png';
const isLikeRegular="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-10-256.png";
const isLikeGreen ="https://i.ibb.co/TR08cmH/like.png"

export default function EachProfile(props) {

    const [liked, setLiked] = useState(false);
    const [disliked, setDisLiked] = useState(false);

    function changeLike(){
      if(disliked == true){setDisLiked(false)}
        return setLiked(!(liked))
    }
    
    function changeUnLike(){
      if(liked == true){setLiked(false)}
        return setDisLiked(!(disliked))
    }

  return(
    <li className='LineInList'>
      <img id='icon'src={props.img} alt={props.index}/>
    <a id='Name' href="#">  {props.title} </a>
      <img id='like' onClick={changeLike} src={liked?isLikeGreen:isLikeRegular} alt={props.index}/>
      <img  id='dislike' onClick={changeUnLike} src={disliked?isLikeRed:isLikeRegular} alt={props.index}/>
      <img src='https://th.bing.com/th/id/OIP.oDzTtuueDFk3YXDCnwBa7AHaHa?pid=Api&rs=1'className='buttonToInfo'/>
    </li>
  )
}

