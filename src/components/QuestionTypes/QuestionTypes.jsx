import React from 'react';


function QuestionTypes(props) {
  return (
      <div className = 'QuestionTypes'>
        <h1>Question Type: {props.questionType} </h1>
        <img src={props.img} alt=""></img>
        <button onClick={props.link}>Click Here</button>
      </div>
  );
}

export default QuestionTypes;