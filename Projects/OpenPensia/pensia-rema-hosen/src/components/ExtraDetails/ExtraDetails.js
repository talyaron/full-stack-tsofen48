import React,{useState,useEffect} from "react";
import "./ExtraDetails.css";

import Article from "./Article/Article";
export default function ExtraDetails(props) {
  const [articlesDetails, setArticlesDetails] = useState([]);

  useEffect(() => {
    fetch('https://pensia-rema-hosen-backend.herokuapp.com/').then(response=>response.json()).then(res=>{
      console.log('asd',res);
      setArticlesDetails(res)
    }) 
  }, [])
 
  return (
    <div className="extraDetails">
      <div className="moreInfoBtnContainer">
        <button className="moreInfoBtn">יש לך מידע? לחצ/י כאן</button>
      </div>
      {articlesDetails.map(articleDetails =>{
        return( <Article articleSrc={articleDetails.articleSource} articleSumUp={articleDetails.articleSubTitle} articleLink={articleDetails.linkToArticle} />);
      })}
   
    </div>
  );
}
