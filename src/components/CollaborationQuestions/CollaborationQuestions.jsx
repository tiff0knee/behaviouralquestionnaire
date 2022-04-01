import React from 'react';

function CollaborationQuestions(props) {
    return (
        <div className = 'Collaboration'>
          <div classname = 'Question'>
          <h2>Question: {props.question} </h2>
          <form> 
            <label> Situation</label>
            <input id="situation" name="situation" type="text"  required/>
          </form>
          <form>
          <label> Task</label>
          <input id="task" name="task" type="text"  required/>
          </form>

          <form>
          <label> Action</label>
          <input id="action" name="action" type="text"  required/>
          </form>
          <form>
          <label> Result</label>
          <input id="result" name="result" type="text"  required/>
          </form>

          <button onClick={props.link}>Answer this question</button>
          </div>
        </div>
    );
  }
  
  export default CollaborationQuestions;