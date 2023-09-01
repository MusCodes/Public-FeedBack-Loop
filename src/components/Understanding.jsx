import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

function Understanding() {
  const history = useHistory();
  const [understanding, setUnderstanding] = useState("");
  const dispatch = useDispatch();
  // we are setting up our state, alerting the user if understanding is an empty input, and sending our understanding state as a payload which is being set once SetUndestanding is triggered from the user putting an input.
  

  function handleSubmit() {
    if (!understanding) {
      alert("Please enter input");
      return;
    }
    history.push("/support");

    let add = { type: "ADD_INPUT", payload: { understanding } };
    dispatch(add);
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <h2> How well are you Understanding the content?</h2>
        <input
          value={understanding}
          type="number"
          placeholder="Understanding?"
          onChange={(event) => setUnderstanding(event.target.value)}
        ></input>
        <br></br>
        <br></br>
        <button onClick={handleSubmit}>Next</button>
      </div>
    </>
  );
}
export default Understanding;
