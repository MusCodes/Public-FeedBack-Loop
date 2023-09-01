import { useHistory } from "react-router-dom";
import {useState} from "react";
import {useDispatch} from "react-redux"


// this is our feedback page. you will view this page once you submit your  review and it will take you back to the new page to complete a new one
function FeedBack() {
  const history=useHistory();
  // const dispatch=useDispatch();
  function handleSubmit(){
    history.push("/");}
  
  return (
    <>
      <header className="header">
        
        <h1>FeedBack!</h1>
        
      </header>
      <div className="submit">
      <h2>Thank you!</h2>
      <button  onClick={handleSubmit}>Leave a new feedback</button>
      </div>
      
    </>
    
  );
  
}
export default FeedBack;
