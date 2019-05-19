import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {

  state = {userName: 'Zoran'};

  nameChangeHandler = (event) => {
    //console.log(event.target.value);
      this.setState({
        userName: event.target.value
      })
  };

  render() {
    return (
      <div className="App">


          <UserInput
              changeOnInput={this.nameChangeHandler}
              currentUserName={this.state.userName}
          />
          <UserOutput userName={this.state.userName}/>
          <UserOutput userName='Jeka'/>
          <UserOutput userName='Aki'/>
      </div>
    );
  }
}

export default App;
