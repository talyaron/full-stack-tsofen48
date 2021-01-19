import "./Header.css";
import React from "react";
import "./Director.css";
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

function Director(props) {
    return (
        <div className="director">
            <img src={props.img} />
            <p>{props.name}</p>
            <div id="icon1"><ThumbDownIcon /></div>
            <ThumbUpAltIcon />
            <InfoOutlinedIcon />
            

        </div>
    );
}
export default Director;