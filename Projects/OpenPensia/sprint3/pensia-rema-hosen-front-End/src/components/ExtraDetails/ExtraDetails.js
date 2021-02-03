import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./ExtraDetails.css";
import Article from "./Article/Article";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function ExtraDetails(props) {
  const history = useHistory();
  const [articlesDetails, setArticlesDetails] = useState([]);
  const [showMoreInfoBtn, setShowMoreInfoBtn] = useState(false);
  useEffect(() => {
    fetch(
      `https://pensia-rema-hosen-backend.herokuapp.com/${window.location.search}`
    )
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setArticlesDetails(res.articlesAboutDirector);
        setShowMoreInfoBtn(res.isAdmin);
      });
  }, []);
    return (
      <div className="extraDetails">
        {/* <div className="moreInfoBtnContainer" style={{display:showMoreInfoBtn?'flex' : 'none'}}>
          <button className="moreInfoBtn">יש לך מידע? לחצ/י כאן</button>
        </div> */}
        <div className="moreInfoBtnContainer">
          {/* <Link onClick={setPressed}  to="/details">סיכום פרטים</Link> */}

          <button
            className="moreInfoBtn"
            onClick={() => {
              history.push("/add-article");
            }}
          >
            יש לך מידע? לחצ/י כאן
          </button>
        </div>
        {articlesDetails.length > 0 ? (
          articlesDetails.map((articleDetails, index) => {
            return (
              <Article
                key={index}
                articleSrc={articleDetails.articleSource}
                articleSumUp={articleDetails.articleSubTitle}
                articleLink={articleDetails.linkToArticle}
              />
            );
          })
        ) : (
          <CircularProgress className='materialUiLoader' />
        )}
      </div>
    );
}
