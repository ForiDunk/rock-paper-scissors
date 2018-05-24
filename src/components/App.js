import React from 'react';
import Buttons from './Buttons';
import Score from './Score';
import Message from './Message';
import { Collapse } from 'react-bootstrap';
import '../styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleSelection = this.handleSelection.bind(this);

    this.state = {
      score: 0,
      cards: ['Rock', 'Paper', 'Scissors'],
      playerSelected: undefined,
      computerSelected: undefined,
      message: undefined,
      open: false
    }
  }

  handleSelection(e) {
    let playerSelected = e.target.innerHTML;
    let random = Math.floor(Math.random() * Math.floor(3));
    let computerSelected = this.state.cards[random];

    if (playerSelected === computerSelected) {
      this.setState(
        {
          playerSelected,
          computerSelected,
          message: "It's a TIE!",
          open: true
        });
    }
    else if (
      (playerSelected === 'Rock' && computerSelected === 'Scissors') ||
      (playerSelected === 'Paper' && computerSelected === 'Rock') ||
      (playerSelected === 'Scissors' && computerSelected === 'Paper')
    ) {
      this.setState(prevState => (
        {
          playerSelected,
          computerSelected,
          message: "You WIN!",
          score: prevState.score + 1,
          open: true
        }
      ));
    } else {
      this.setState(prevState => (
        {
          playerSelected,
          computerSelected,
          message: "Computer WINS!",
          score: prevState.score - 1,
          open: true
        }));
    }
  }

  render() {
    return (
      <div className="app-container">
        <Score score={this.state.score} />
        <Buttons onClick={this.handleSelection} />
        <Collapse in={this.state.open}>
          <div>
            <Message
              playerSelected={this.state.playerSelected}
              computerSelected={this.state.computerSelected}
              message={this.state.message}
            />
          </div>
        </Collapse>
      </div>
    );
  }
}

export default App;