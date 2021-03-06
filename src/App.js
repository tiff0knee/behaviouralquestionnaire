import React, { Component } from 'react';
import './App.css';
// Add the Route named import
import { Route, Redirect } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage';
import UserLogOut from './components/UserLogOut/UserLogOut';
import AllQuestions from './pages/AllQuestions/AllQuestions';
import Collaboration from './pages/Collaboration/Collaboration';

class App extends Component {
  state = {
    user:null,
  }
  
  setUserInState = (incomingUserData) => {
    this.setState({ user: incomingUserData})
  }

  componentDidMount() {
    let token = window.localStorage.getItem('token')
    if (token) {
      // YOU DO: check expiry!
      let userDoc = JSON.parse(atob(token.split('.')[1])).user // decode jwt token
      this.setState({user: userDoc})      
    }
  }


  render() {
    return (
      <main className="App">
        {/* this ternary operator asks: is there a user in state? */}
        {/* if yes, they can see our pages: neworder, etc. */}
        {/* if no(user is null), show them only the <AuthPage> */}
        { this.state.user ? 

          <div className="App">

          <header className="App-header">Behavioural Based Questionnaire</header>

          <UserLogOut/>

          <Collaboration/>


          </div>


          :
          <AuthPage setUserInState={this.setUserInState}/>
        }
      </main>
    );
  }
}

export default App;