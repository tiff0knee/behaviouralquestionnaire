import React, { Component } from 'react';
import './App.css';
// Add the Route named import
import { Route, Switch, Redirect } from 'react-router-dom';
// import NewOrderPage from './pages/NewOrderPage/NewOrderPage'
// import OrderHistoryPage from './pages/OrderHistoryPage/OrderHistoryPage'
import AuthPage from './pages/AuthPage/AuthPage';
import UserLogOut from './components/UserLogOut/UserLogOut';
import TestPage from './pages/TestPage/TestPage';
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
          {/* <UserLogOut />
          <Route path='/questions/all' render={(props) => (
            <AllQuestions {...props}/>
          )}/>
          <Route path='questions/collaboration' render={(props) => (
            <Collaboration {...props}/>
          )} /> */}
          <UserLogOut className="logout"/>

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