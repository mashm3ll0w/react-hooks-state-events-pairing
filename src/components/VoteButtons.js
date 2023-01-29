import React from "react";


function VoteButtons({upvotes, downvotes}){
  return (
    <>
      <button>👍{upvotes}</button>
      <button>👎{downvotes}</button>
      <br/>
      <button>Hide Comments</button>
      <hr/>
    </>
  )
}

export default VoteButtons