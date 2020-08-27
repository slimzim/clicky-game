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
    if (this.state.alreadyGuessed.includes(id)) {
      this.setState({ 
        instructions: "You guessed incorrectly!",
        alreadyGuessed: [],   
      })
    } else {
      this.setState({ 
        instructions: "You guessed correctly!"      
      })
      this.state.alreadyGuessed.push(id)
      if (this.state.alreadyGuessed.length > this.state.topScore) {
        this.incrementTopScore()
      } if (this.state.alreadyGuessed.length === 12) {
        this.setState({ instructions: "You win!" })
      }
    }
    this.shuffleArray(this.state.cards)
  }

  incrementTopScore = () => {
    this.setState(() => {
      // Important: read `state` instead of `this.state` when updating.
      return {topScore: this.state.topScore + 1}
    });
    console.log(this.state.alreadyGuessed.length)
  }  

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    this.setState({ cards: array })
  }

  render() {
    return (
    <Wrapper>
      <Nav 
        score={this.state.alreadyGuessed.length}
        instructions={this.state.instructions}
        topScore={this.state.topScore}
      />
      <Header />
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