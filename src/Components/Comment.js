import { SupervisedUserCircleRounded } from "@mui/icons-material";
import React from "react";
import image from "../-abstract-user-icon-1.jpg";


  
const Comment = ({comments}) => {



  return (
    
    <div className="flex shadow-lg rounded-lg">
      <img className="h-10 w-10 mx-2 mt-1" src={image}></img>
      <div className="px-3">
        <p className="font-bold">Name: {comments?.snippet?.topLevelComment?.snippet?.authorDisplayName}</p>
        <p>Comment: {comments?.snippet?.topLevelComment?.snippet?.textDisplay}</p>
      </div>
    </div>
  );
};


export default Comment;
