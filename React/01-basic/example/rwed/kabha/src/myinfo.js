import React from "react";
import "./info.css";
function myinformation({ src }) {
  return (
   
 
    <div >
       <p className="blocktext">
          Hello my name is rwed and im from bartaa i work in Nahal ccompany 
          right now.Goldberg previously served as a columnist for the Times of London, Brill’s Content, and The American Enterprise. His writings have appeared in the Washington Post, Wall Street Journal, Christian Science Monitor, Commentary, The New Yorker, Food and Wine, and numerous other publications. He is currently a Fox News Contributor and a regular panelist on Special Report with Bret Baier. He was previously a CNN contributor and he has appeared on numerous TV shows, including Face the Nation and This Week. The Atlantic magazine has named him one of the top fifty political commentators in America.
He lives in Washington D.C. with his wife, Jessica Gavora, daughter (Lucy), dogs (Zoë and Pippa), a good cat (Gracie), and his wife’s cat (Ralph).
      </p>
      <div className="">

      </div>
        <img  className="img" src={src} alt="" />

    </div>

    );
}
export default myinformation;
