import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      activeSuggestions: []
    };

    this.autoCompleteOptions = [
      'bat',
      'batman',
      'baterang',
      'beans',
      'bother',
      'cat',
      'catorce',
      'captain america',
      'capital letter',
    ];

    this.debounceTimeout = null;
  }

  handleChange = e => {
    clearTimeout(this.debounceTimeout);
    this.debounceTimeout = setTimeout(() => {
      this.state.inputValue && this.runAutoComplete();
    }, 800);
    this.setState({ inputValue: e.target.value, activeSuggestions: [] });
  };

  runAutoComplete = () => {
    const newSuggested = [];
    for (let phrase of this.autoCompleteOptions) {
      if (phrase.includes(this.state.inputValue)) {
        newSuggested.push(phrase);
      }
    }

    this.setState({ activeSuggestions: newSuggested });
  };

  setSelectedText = (phrase) => {
    this.setState({inputValue: phrase, activeSuggestions: []});
  }

  render() {
    const { inputValue } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <input
            style={{ width: 300, marginBottom: 2, boxSizing: 'border-box' }}
            value={inputValue}
            onChange={this.handleChange}
          />
          {this.state.activeSuggestions.length ? (
            <div
              style={{ height: 100, width: 300, backgroundColor: 'white' }}
            >
              {this.state.activeSuggestions.map((phrase, index) => (
                <div onClick={() => this.setSelectedText(phrase)} class="autocomplete-item" key={index}>
                  <span style={{color: 'black'}}>{phrase}</span>
                  <br/>
                </div>
              ))}
            </div>
          ) : null}
        </header>
      </div>
    );
  }
}

export default App;
