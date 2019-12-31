import React from 'react';
import './App.css';
import bingoItems from './bingoItems.json';
import BingoHeader from './components/bingoHeader';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      0: false,
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false,
      10: false,
      11: false,
      "name0": null,
      "name1": null,
      "name2": null,
      "name3": null,
      "name4": null,
      "name5": null,
      "name6": null,
      "name7": null,
      "name8": null,
      "name9": null,
      "name10": null,
      "name11": null
    };

  }

  markComplete = e => {
    const id = e.target.id;
    this.setState({[id]: true})

  }

  savePerson = e => {
    const buttonId = e.currentTarget.id.slice(-1);
    const nameId = "name" + buttonId;
    const emailId = "email" + buttonId;
    const nameInput = document.getElementById(nameId).value;
    const emailInput = document.getElementById(emailId).value;
    this.setState({[nameId]: nameInput, [emailId]: emailInput})
  }

  bingoCard() {
    
    return (
      <div>

      {bingoItems.map(item => {
        const id = item.id;
        const nameId = "name" + id;
        const emailId = "email" + id;
        let results;
        let buttonText;

        if (this.state[nameId] !== null || this.state[emailId] !== null) {
          buttonText = "Update";
          results =
          <>
          <p>Name: {this.state[nameId]}</p>
          <p>Email: {this.state[emailId]}</p>
          </>
        }
        else {
          buttonText = "Save";
          results = <p></p>
        }

        if (this.state[id] === true) {
          return (
            <div>
              <input type="text" id={"name" + id} label="Enter Name"></input>
              <input type="text" id={"email" + id} label="Enter Email"></input>
              {results}
              <button id={"email" + id} onClick={this.savePerson}>{buttonText}</button>
            </div>
          )
        }
        else {
          return (
            <div>
              <h2>{item.item}</h2>
              <button id={item.id} onClick={this.markComplete}>Found them!</button>
            </div>
          )
        }
      })}
        </div>
    )}

  render() {
  return (
    <>
      <BingoHeader />
      {this.bingoCard()}
    </>
  )};
}

export default App;
