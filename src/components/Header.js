import React from "react";
import VoteButtons from "./VoteButtons";

function Header({title, views, uploadDate, upvotes, downvotes}){
  return (
    <div>
      <h2>{title}</h2>
      <p>{views} views | Uploaded {uploadDate}</p>
      <VoteButtons upvotes={upvotes} downvotes={downvotes}/>
    </div>
  )
}

export default Header