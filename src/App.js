import React from 'react';
import './App.css';
import { Typography, Card, Grid, CardContent,TextField, Button } from '@material-ui/core';
import bingoItems from './bingoItems.json';
import { styled } from '@material-ui/core/styles';
import BingoHeader from './components/bingoHeader';

const BingoItem = styled(Card)({
  textAlign: 'center',
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  color: 'white'
})

const CompletedItem = styled(Card)({
  textAlign: 'center',
  background: 'linear-gradient(45deg, #1e824c 30%, #4ecdc4 90%)',
  color: 'white'
})

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
      "input0": null,
      "input1": null,
      "input2": null,
      "input3": null,
      "input4": null,
      "input5": null,
      "input6": null,
      "input7": null,
      "input8": null,
      "input9": null,
      "input10": null,
      "input11": null
    };

  }

  markComplete = e => {
    const id = e.target.id;
    this.setState({[id]: true})

  }

  saveName = e => {
    const buttonId = e.currentTarget.id.slice(-1);
    const inputId = "input" + buttonId;
    console.log(inputId)
    const input = document.getElementById(inputId).value;
    console.log(input);
    this.setState({[inputId]: input})
  }

  bingoRow(row) {
    let rowOne = bingoItems.slice(0, 3);
    let rowTwo = bingoItems.slice(3, 6);
    let rowThree = bingoItems.slice(6, 9);
    let rowFour = bingoItems.slice(9, 12);
    let renderRow;
    switch (row) {
      case 1:
        renderRow = rowOne;
        break;
      case 2:
        renderRow = rowTwo;
        break;
      case 3:
        renderRow = rowThree;
        break;
      case 4:
        renderRow = rowFour;
        break;
      default:
        renderRow = rowOne;
      }
    return (
    <Grid container justify="center" alignItems="center" alignContent="center" spacing={3}>
      {renderRow.map(item => {
        const id = item.id;
        const inputId = "input" + id;
        if (this.state[id] === true) {
          return (
            <Grid item xs={3} key={item.id}>
              <CompletedItem id={id}>
                <CardContent>
                <TextField id={"input" + id} defaultValue="Enter Name"></TextField>
                <Typography variant='body1'>Name: {this.state[inputId]}</Typography>
                <Button id={"button" + item.id} onClick={this.saveName}>Save</Button>
                </CardContent>
              </CompletedItem>
              </Grid>
          )
        }
        else {
          return (
           <Grid item xs={3} key={item.id}>
          <BingoItem id={item.id} onClick={this.markComplete}> 
          <CardContent>
            <Typography variant='body1' id={item.id} onClick={this.markComplete} gutterBottom>
            {item.item}</Typography>
          </CardContent>
          </BingoItem>
        </Grid> 
          )
        }
      })
      }
      </Grid>
    )
  }

  render() {
  return (
    <>
      <BingoHeader />
      {this.bingoRow(1)}
      {this.bingoRow(2)}
      {this.bingoRow(3)}
      {this.bingoRow(4)}
    </>
  )};
}

export default App;
