import React from 'react';


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
      return <h3>Thanks for answering the question</h3>
    }

    return (
      <div className='Collaboration'>
        <div className='Question'>
          <h2 id="question" name="question">Question: {this.props.question} </h2>
          
          <form onSubmit={this.submitQuestion}> 
            <label> Situation</label>
            <input className="situation" name="situation" type="text" value={this.state.situation} onChange={this.handleChange}  required/>

            <label> Task</label>
            <input className="task" name="task" type="text"  value={this.state.task} onChange={this.handleChange} required/>

            <label> Action</label>
            <input className="action" name="action" type="text" value={this.state.action} onChange={this.handleChange}  required/>

            <label> Result</label>
            <input className="result" name="result" type="text"  value={this.state.result}  onChange={this.handleChange} required/>

            <input type="submit" value="Answer this question" />
          </form>

        </div>
      </div>
    );
  }
}
  
  export default CollaborationQuestions;