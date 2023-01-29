import React from "react";
import video from "../data/video.js";

function VideoFrame({title, embedUrl}){
  return (
    <iframe
        width="500"
        height="263"
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
        title={title}
      />
  )
}

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

function Header({title, views, uploadDate, upvotes, downvotes}){
  return (
    <div>
      <h2>{title}</h2>
      <p>{views} views | Uploaded {uploadDate}</p>
      <VoteButtons upvotes={video.upvotes} downvotes={video.downvotes}/>
    </div>
  )
}

function Comment({user, comment}){
  return (
    <p><strong>{user}</strong> - {comment}</p>
  )
}

function CommentsList({comments}){
  return (
    comments.map((comment) => <Comment key={comment.id} user={comment.user} comment={comment.comment}/>)
  )
}


function App() {

  return (
    <div className="App">
      <VideoFrame title={video.title} embedUrl={video.embedUrl}/>
      <Header title={video.title} views={video.views} uploadDate={video.createdAt} upvotes={video.upvotes} downvotes={video.downvotes}/>
      <CommentsList comments={video.comments}/>
    </div>
  );
}

export default App;
