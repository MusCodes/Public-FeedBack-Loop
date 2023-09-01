import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
// this is the component that takes the input of comments and dispatch it to the store, we have 2 states and were setting our state
// to the payload and Our Setstate will be the value we input on our comment input.

function Comments() {
  const [comments, setComments] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  function handleSubmit() {
    if (!comments) {
      alert("Please provide an input");
      return;
    }
    let add = { type: "ADD_INPUT", payload: { comments } };
    dispatch(add);
    

    history.push("/review");
  }
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>

        <h2> Any comments you want to leave?</h2>
        <input
          value={comments}
          type="Text"
          placeholder="Comments"
          onChange={(event) => {
            setComments(event.target.value);
          }}
        ></input>
        <br />
        <br />
        <button onClick={handleSubmit}> Next </button>
      </div>
    </>
  );
}
export default Comments;
