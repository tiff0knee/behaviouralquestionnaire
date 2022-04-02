import React from 'react';
import './AllQuestions.css';




export default class AllQuestions extends React.Component {
    state = {
        questions:[],

    }

    async componentDidMount() {
        try {
          let jwt = localStorage.getItem("token");
          let fetchQuestionResponse = await fetch("/api/questions", {
            headers: { Authorization: "Bearer " + jwt },
          });
          if (!fetchQuestionResponse.ok)
            throw new Error("Couldn’t fetch questions");
          let questions = await fetchQuestionResponse.json();
          this.setState({ questions: questions });
        } catch (err) {
          console.error("ERROR:", err);
        }
      }

      render() {
        const { questions } = this.state;
        return (
          <main className="AllQuestions">
            <div className='CollaborationDiv'>
                <div className='QuestionBox'>
                <h3 id="question" name="question">Question: {this.props.question} </h3>

                    <label> Your Answer</label>
                    {questions &&
                    questions.map(({ situation, task, action, result, _id}) => {
                      return (
                        <div key={_id}>
                          <p>{situation}</p>
                          <p>{task}</p>
                          <p>{action}</p>
                          <p>{result}</p>
                        </div>
                      );
                    })}

                </div>
            </div>
          </main>
        );
      }
    }