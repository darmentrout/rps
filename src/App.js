import React, { Component } from 'react';

import Shoot from './components/Shoot';
import History from './components/History';
import Arena from './components/Arena';
import Reset from './components/Reset';
import Log from './components/Log';

class App extends Component {

  state = {
     playerHistory: {
        rock:     0,
        paper:    0,
        scissors: 0
      },
      gameLog: [],
      playerMove: '',
      robotMove:  '',
      outcome:    '',
      playerWin: false,
      robotWin: false
  }

  resetStats = () => { 
      this.setState({ 
        playerHistory: {
          rock:     0,
          paper:    0,
          scissors: 0
        },
        gameLog: [],
        playerMove: '',
        robotMove:  '',
        outcome:    '',
        playerWin: false,
        robotWin: false
      });
    }

  determineWinner = (prevState) => {
    let outcome, pwin, rwin;
    const rockWins = 'Rock Wins!';
    const scisWins = 'Scissors Win!';
    const papeWins = 'Paper Wins!';

    if( this.state.playerMove === this.state.robotMove ){
      outcome = 'Tie!';
      pwin = false;
      rwin = false;
    }

    // rock v paper
    else if( this.state.playerMove === 0 && this.state.robotMove === 1 ){
      outcome = papeWins;
      pwin = false;
      rwin = true;
    }
    // rock v scissors
    else if( this.state.playerMove === 0 && this.state.robotMove === 2 ){
      outcome = rockWins;
      pwin = true;
      rwin = false;
    }

    // paper v rock
    else if( this.state.playerMove === 1 && this.state.robotMove === 0 ){
      outcome = papeWins;
      pwin = true;
      rwin = false;
    }
    // paper v scissors
    else if( this.state.playerMove === 1 && this.state.robotMove === 2 ){
      outcome = scisWins;
      pwin = false;
      rwin = true;
    }

    // scissors v rock
    else if( this.state.playerMove === 2 && this.state.robotMove === 0 ){
      outcome = rockWins;
      pwin = false;
      rwin = true;
    }
    // scissors v paper
    else if( this.state.playerMove === 2 && this.state.robotMove === 1 ){
      outcome = scisWins;
      pwin = true;
      rwin = false;
    }

    var dateFormat = new Intl.DateTimeFormat('en', { 
      weekday: 'short', 
      year: 'numeric', 
      month: '2-digit', 
      day: '2-digit', 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    });
    

    const gameTime = dateFormat.format( new Date() );

    let history = this.state.gameLog;
    if( history.length >= 10 ){
      history.pop();
    }

    let winner = '';
    if( pwin && !rwin ){
      winner = 'Player';
    }
    else if( !pwin && rwin ){
      winner = 'Robot';
    }
    else {
      winner = 'Tie';
    }

    const dataString = `${gameTime}, ${outcome}, Winner: ${winner}`;
    history.unshift(dataString);

    this.setState({ 
      outcome: outcome,
      gameLog: history,
      playerWin: pwin,
      robotWin: rwin,

    });
  }

  randomNumber = () => Math.floor(Math.random() * 3);

  numberToSign = n => {
    let word;
    switch(n){
        case 0:
            word = 'rock';
            break;
        case 1:
            word = 'paper';
            break;
        case 2:
            word = 'scissors';
            break;
        default:
            word = ''
    }
    return word;
}

  playerSign = n => {
    let signs = {...this.state.playerHistory};
    const whichSign = Object.keys(signs)[n];
    signs[whichSign]++;
    return signs;
  };

  takeTurn = n => {
    this.setState({ 
      playerHistory: this.playerSign(n),
      playerMove: n,
      robotMove: this.randomNumber()
    }, this.determineWinner);
  }

  render() {  

    return (
      <div className="container">
        <Arena 
          numberToSign={this.numberToSign}
          robot={this.state.robotMove} 
          player={this.state.playerMove} 
          outcome={this.state.outcome} 
          playerWin={this.state.playerWin}
          robotWin={this.state.robotWin}
        />
        <br />
        <br />
        <Shoot sign={this.takeTurn} />
        <br />
        <br />
        <History 
          rock={this.state.playerHistory.rock} 
          paper={this.state.playerHistory.paper} 
          scissors={this.state.playerHistory.scissors}           
        />
        <Log log={this.state.gameLog} />
        <Reset reset={this.resetStats} />
      </div>
    );
  }

}

export default App;
