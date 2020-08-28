import React, { Component } from "react";
import Card from "./components/Card";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import cards from "./cards.json";
import "./App.css";
import Header from "./components/Header";

class App extends Component {

  state = {
    cards,
    alreadyGuessed: [],
    topScore: 0,
    instructions: "Click an image to begin!"
  }

  userGuess = id => {
    // if the user clicks a card that has already been clicked...
    if (this.state.alreadyGuessed.includes(id)) {
      this.setState({ 
        // instructions and alreadyGuessed are reset for the next game
        instructions: "Click an image to begin!",
        alreadyGuessed: [],   
      })
      // user is alerted that the game is over.
      alert("Game over!")
    // if the guess is not a duplicate guess...
    } else {
      this.setState({ 
        // Instructions indicate the user has guessed correctly
        instructions: "You guessed correctly!"      
      })
      // the guess is added to the array in the state object
      this.state.alreadyGuessed.push(id)
      // if the lenghth of the array reaches a new high, the top score is incremented
      if (this.state.alreadyGuessed.length > this.state.topScore) {
        this.setState({topScore: this.state.topScore + 1})
      // if the length reaches 12, the user wins
      } if (this.state.alreadyGuessed.length === 12) {
        this.setState({ 
          instructions: "You win! Feel free to play again!",
          alreadyGuessed: []
        })
      }
    }
    // after each guess, the cards are shuffled
    this.shuffleArray(this.state.cards)
  } 

  shuffleArray(array) { 
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    // once the cards array is shuffled, the state is updated with the newly
    // randomized array
    this.setState({ cards: array })
  }

  render() {
    return (
    <Wrapper>
      <Nav
        // the instructions and scores from the state are rendered using the Nav component 
        score={this.state.alreadyGuessed.length}
        instructions={this.state.instructions}
        topScore={this.state.topScore}
      />
      <Header />
      {/* the cards array is mapped using the Card component */}
      {this.state.cards.map(card => ( 
        <Card
        userGuess={this.userGuess}
        id={card.id}
        key={card.id}
        image={card.image}
      />
      ))}
      <Footer />
    </Wrapper>
    )
  }
}

export default App;