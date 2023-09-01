import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
function Feeling() {
  const [feelings, setFeelings] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  function handleSubmit() {
    // dispatch to the store
    // we set our useState and set our setFeelings to our onChange on input, which will set our initial state (feelings).
    // it will take that state and pass it in our payload. we also have an alert setup stating if our feelings state is empty, to alert the user to put an input.

    if (!feelings) {
      alert("Please enter how you felt in order to proceed to the next page");
      return;
    }
    let add = { type: "ADD_INPUT", payload: { feelings } };
    dispatch(add);
    history.push("/understanding");
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>

        <h2> How are you feeling today?</h2>

        <input
          value={feelings}
          placeholder="Feeling?"
          type="number"
          onChange={(event) => setFeelings(event.target.value)}
        ></input>
        <br />
        <br />
        <button onClick={handleSubmit}> Next</button>
      </div>
    </>
  );
}
export default Feeling;
