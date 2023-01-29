import React from "react"

function Comment({user, comment}){
  return (
    <p><strong>{user}</strong> - {comment}</p>
  )
}

export default Comment