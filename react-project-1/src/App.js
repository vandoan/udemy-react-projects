import React, { Component } from 'react';
import CharComponent from './CharComponent/CharComponent';
import CharacterInputComponent from './CharacterInputComponent/CharacterInputComponent';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import './App.css';

// import logo from './logo.svg';
// import UserOutput from './UserOutput/UserOutput';
// import './UserOutput/UserOutput.css';

class App extends Component {
  
  state = {
    name: 'Toodle',
    inputLength: 0,
    inputCharacterString: "",
    inputCharacters: []
  }
  

  characterInputHandler = (event) => {
    const inputValue = event.target.value;    
    const inputLength = inputValue.length;
    // Update inputCharacters array
    const updateInputCharacters = inputValue.split('');
 
    this.setState({inputLength: inputLength, inputCharacters: updateInputCharacters, inputCharacterString: inputValue});
  }

  deleteCharacterHandler = (index) => {
    // Get the characters from state.
    const inputChar = [...this.state.inputCharacters];
    let inputCharString = "";

    inputChar.splice(index,1);
    // Update input field
    inputCharString = inputChar.join('');
    this.setState({inputCharacters: inputChar, inputCharacterString: inputCharString});    // Update state.    
  }

  nameChangeHandler = (event) => {
    this.setState({
      name:  event.target.value
    })
  }


  render () {
    let inputCharacters = null;

    if(this.state.inputCharacters.length){

      inputCharacters = (
        <div>
          {this.state.inputCharacters.map( (character, index) => {
            const charKey = "inputChar-" + index;

            return <CharComponent
              char={character}
              charKey={charKey} 
              charIndex={index}
              key={charKey}
              click={() => this.deleteCharacterHandler(index)}
              />
          })}
        </div>
      )
        
    }

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
          
          <CharacterInputComponent
            countInput={this.characterInputHandler}
            inputValue={this.state.inputCharacterString}
          /> 
          
          <ValidationComponent 
            inputCount={this.state.inputLength}
            charString={this.state.inputCharString}
          />

          {inputCharacters}

           
        </header>
      </div>
    )
  }
}

export default App;
