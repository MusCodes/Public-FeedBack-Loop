import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
function Support() {
  const [support, setSupport] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  function handleSubmit() {
    // this is similiar to all of our other components, it has an alert to check if the state support is empty, if it is, it will notify the user to add an input.
    // were dispatching our support state as a payload and than it will take the user to the comments using our useHistory.
    if (!support) {
      alert("please provide an input");
      return;
    }
    let add = { type: "ADD_INPUT", payload: { support } };
    dispatch(add);

    history.push("/comments");
  }
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <h2>How well are you being supported?</h2>
        <input
          value={support}
          type="number"
          placeholder="Support?"
          onChange={(event) => setSupport(event.target.value)}
        ></input>
        <br></br>
        <br></br>
        <button onClick={handleSubmit}>Next</button>
      </div>
    </>
  );
}
export default Support;
