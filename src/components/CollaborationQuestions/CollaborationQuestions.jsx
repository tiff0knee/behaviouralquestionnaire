import React from 'react';
import './CollaborationQuestions.css'


// 1) add a state for each field in the form

class CollaborationQuestions extends React.Component{
  state = {
    question: '',
    situation: '',
    task: '',
    action: '',
    result: '',
    done: false,
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  handleSubmit = async (question) => {
    console.log(question)

    try {
      let fetchResponse = await fetch("/api/questions", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({question}) // <-- send this object to server
        }) 
      let serverResponse = await fetchResponse.json() // <-- decode fetch response
      console.log("Success:", serverResponse)   // <-- log server response
      this.setState({
        done: true
      })
    } catch (err) {
      console.error("Error:", err) // <-- log if error 
    }
  }

  submitQuestion = (evt) => {
    evt.preventDefault()
    this.handleSubmit({
      question : this.state.question,
      situation : this.state.situation,
      action: this.state.action,
      result: this.state.result
    })
  }

  render(){
    if(this.state.done){
      return <h4>Thanks for answering the question</h4>
    }

    return (
      <div className='CollaborationDiv'>
        <div className='QuestionBox'>
          <h3 id="question" name="question">Question: {this.props.question} </h3>
          
          <form onSubmit={this.submitQuestion}> 
            <label> Situation</label>
            <input size="70" className="situation" name="situation" type="text" value={this.state.situation} onChange={this.handleChange}  required/>

            <label> Task</label>
            <input size="70" className="task" name="task" type="text"  value={this.state.task} onChange={this.handleChange} required/>

            <label> Action</label>
            <input size="70" className="action" name="action" type="text" value={this.state.action} onChange={this.handleChange}  required/>

            <label> Result</label>
            <input size="70" className="result" name="result" type="text"  value={this.state.result}  onChange={this.handleChange} required/>

            <input className="button" type="submit" value="Answer this question" />
          </form>

        </div>
      </div>
    );
  }
}
  
  export default CollaborationQuestions;