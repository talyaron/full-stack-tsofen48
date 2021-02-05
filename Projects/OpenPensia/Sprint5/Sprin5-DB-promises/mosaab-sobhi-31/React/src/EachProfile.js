import './eachProfile.css'
import React,{useState} from "react";

const isLikeRed='https://i.ibb.co/7WmRNwr/like.png';
const isLikeRegular="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-10-256.png";
const isLikeGreen ="https://i.ibb.co/TR08cmH/like.png"
let allVotes =[];

export default function EachProfile(props) {

    const [liked, setLiked] = useState(false);
    const [disliked, setDisLiked] = useState(false);


    function changeLike(e){
      let X = e.target.alt;
if(localStorage.getItem(`Voted${X}`) === null){
  localStorage.setItem(`Voted${X}`,true)
  localStorage.setItem(`CountVote${X}`, localStorage.getItem(`CountVote${X}`) + 1)
  allVotes = [...allVotes,{id:X,voteUpOrDown:"Up"}]
  localStorage.setItem('allVotes',JSON.stringify(allVotes));
}
      if(liked === false && disliked === false)
      {
        setLiked(true)
        localStorage.setItem(`MarkedAs${X}`,true)
      }  
    }

     function changeUnLike(e){
      let X = e.target.alt;
      if(localStorage.getItem(`Voted${X}`) === null){
        localStorage.setItem(`Voted${X}`,true)
      if(liked === false && disliked === false)
      {
        setDisLiked(true)
        localStorage.setItem(`MarkedAs${X}`,false)
        localStorage.setItem(`CountVote${X}`, localStorage.getItem(`CountVote${X}`) - 1)  
        allVotes = [...allVotes,{id:X,voteUpOrDown:"Down"}];
  localStorage.setItem('allVotes',JSON.stringify(allVotes));  
      }  
  
      

     }
  }


    function checkifLiked(e){
      let X = e.target.alt;
      if(localStorage.getItem(`MarkedAs${X}`) !== null){
          if(localStorage.getItem(`MarkedAs${X}`) === 'true'){
            setLiked(true)
          }
         else{
          setDisLiked(true)
         }
      }
    }
    


  return(
    <li className='LineInList' id={props.index}>
      <img id='icon' src={props.img} alt={props.index}/>
    <a id='Name' href="#">  {props.title} </a>
      <img id='like' onLoad={checkifLiked} onClick={changeLike} src={liked?isLikeGreen:isLikeRegular} alt={props.index}/>
      <img  id='dislike' onLoad={checkifLiked}  onClick={changeUnLike} src={disliked?isLikeRed:isLikeRegular} alt={props.index}/>
      <img src='https://th.bing.com/th/id/OIP.oDzTtuueDFk3YXDCnwBa7AHaHa?pid=Api&rs=1'className='buttonToInfo'/>
    </li>
  )
}
