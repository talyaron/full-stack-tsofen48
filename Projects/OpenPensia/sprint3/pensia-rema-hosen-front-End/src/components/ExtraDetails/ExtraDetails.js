import React,{useState,useEffect} from "react";
import "./ExtraDetails.css";
import Article from "./Article/Article";
export default function ExtraDetails(props) {
  const [articlesDetails, setArticlesDetails] = useState([]);
  const [showMoreInfoBtn, setShowMoreInfoBtn] = useState(false)
  useEffect(() => {

    
      fetch(`https://pensia-rema-hosen-backend.herokuapp.com/${window.location.search}`).then(response=>{
    
    return response.json()}).then(res=>{
     
      setArticlesDetails(res.articlesAboutDirector);
      setShowMoreInfoBtn(res.isAdmin);
     
    }) 

  }, [])
 

  return (
    <div className="extraDetails">
      <div className="moreInfoBtnContainer" style={{display:showMoreInfoBtn?'flex' : 'none'}}>
        <button className="moreInfoBtn">יש לך מידע? לחצ/י כאן</button>
      </div>
      {articlesDetails.map((articleDetails, index) =>{
        return( <Article key ={index} articleSrc={articleDetails.articleSource} articleSumUp={articleDetails.articleSubTitle} articleLink={articleDetails.linkToArticle} />);
      })}
   
    </div>
  );
}
