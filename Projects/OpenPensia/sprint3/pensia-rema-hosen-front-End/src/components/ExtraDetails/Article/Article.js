import React from "react";
import './Article.css'
export default function Article(props) {
  return (
    <div className="article">
      <h4 className="articleSource">{props.articleSrc || "כתבה בynet"}</h4>
      <p className="articleSumUp">
        {props.articleSumUp || "כתבה על שיפור מכירות ובמחסני חשמל"}
      </p>
      <a className="articleLink" href={props.articleLink || ""}>
        {" "}
        צפייה בכתבה
      </a>
    </div>
  );
}
