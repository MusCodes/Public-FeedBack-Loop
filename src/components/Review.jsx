import axios from "axios";

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Review() {
  const history = useHistory();
  const answer = useSelector((store) => store.input);
  console.log("xxxxxx", answer);
// This function has a axios post and all of our answers we set in the previous form, this page will display all the users input and make a post request to the server to send it over to the database.
  function handleSubmit() {
    axios
      .post("/inputs", answer)
      .then((response) => {
        console.log("succesfull axios post line 17", response);
        history.push("/feedback");
      })
      .catch((error) => {
        console.log("error on line 19", error);
      });
  }
  return (
    <>
      <h1>Review Your Feedback</h1>
      <h3>Feelings:{answer.feelings}</h3>
      <h3>Understanding:{answer.understanding}</h3>
      <h3>Support:{answer.support}</h3>
      <h3>Comments:{answer.comments} </h3>
      <br />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
export default Review;
