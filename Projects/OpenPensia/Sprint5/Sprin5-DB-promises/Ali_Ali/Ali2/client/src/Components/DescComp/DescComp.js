import React from "react";
import "./DescComp.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

function DescComp({ withNum, without }) {
  return (
    <div>
      <div className="information">
        <div className="information__data info__top">
          <h1>{withNum}%</h1>
          <p>בעד</p>
        </div>
        <div className="information__data info__middle info__top">
          <h1>{without}%</h1>
          <p>נגד</p>
        </div>
      </div>
      <div>
        <p className="txt">?מה הבחירה שלך</p>
        <div className="thumps">
          <div className="thumpItem">
            <ThumbDownIcon className="thump" />
            <p>אני נגד</p>
          </div>
          <div className="thumpItem">
            <ThumbUpIcon className="thump" />
            <p>אני בעד</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DescComp;
