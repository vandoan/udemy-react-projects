import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './UserOutput/UserOutput.css';

class App extends Component {
  
  state = {
    name: 'Toodle'
  }
  

  nameChangeHandler = (event) => {
    this.setState({
      name:  event.target.value
    })
    // console.log();
  }

  render () {

    return(
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />         
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          > }
          </a>
          */}
          
          <UserInput 
            changeName={this.nameChangeHandler}
            name={this.state.name}
          /> 

          <UserOutput name={this.state.name}>

          </UserOutput>
          
        </header>
      </div>
    )
  }
}

export default App;
