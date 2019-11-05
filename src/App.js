import React, { Fragment } from 'react';
import './App.css';
import { Typography, Card, Grid, CardContent } from '@material-ui/core';
import bingoItems from './bingoItems.json';
import { styled } from '@material-ui/core/styles';

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
      11: false
    };
    this.markComplete = this.markComplete.bind(this);
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
      }
    return (
    <Grid container justify="center" alignItems="center" alignContent="center" spacing={3}>
      {renderRow.map(item => {
        const id = item.id;
        if (this.state[id] === true) {
          return (
            <Grid item xs={3} key={item.id}>
              <CompletedItem id={item.id}>
                <CardContent>
                <Typography variant='body' gutterBottom>Complete</Typography>
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
            <Typography variant='body' id={item.id} onClick={this.markComplete} gutterBottom>
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

  markComplete(e) {
    const id = e.target.id;
    this.setState({[id]: true})

  }

  render() {
  return (
    <>
      <Grid container justify="center" alignItems="center">
        <Typography variant='h3' gutterBottom>
          Icebreaker Bingo
      </Typography>
      </Grid>
      {this.bingoRow(1)}
      {this.bingoRow(2)}
      {this.bingoRow(3)}
      {this.bingoRow(4)}
    </>
  )};
}

export default App;
