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
  // let articlesDetails=[{articleTitle:'tghhhh',subTitle:'hgfdd',linkToArticle:'https://www.google.com/search?q=images&safe=strict&sxsrf=ALeKk01u4tNhZ6mtZ29G5hG3g1y45gRwPw:1611430003986&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiv3d7H5LLuAhVToXEKHf8rCdYQ_AUoAXoECBMQAw&biw=1422&bih=684#imgrc=a9B7raWE3PxoBM'}];
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
