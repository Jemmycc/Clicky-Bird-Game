import React, { Component } from "react";
import BirdCard from "./components/BirdCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Nav from "./components/Nav";
import birds from "./birds.json";
import Container from "./components/Container";
import Row from "./components/Row";
import Column from "./components/Column";
import "./App.css";

// Random shuffle
function randomBirds(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

class App extends Component {
    // Set this.state
    state = {
        birds,
        currentScore: 0,
        topScore: 0,
        isCorrectOrNot: "",
        clicked: [],
    };

    removeBird = id => {
        const birds = this.state.birds.filter(bird => bird.id !== id);
        this.setState({ birds });
    };


    handleClick = id => {
        if (this.state.clicked.indexOf(id) === -1) {
            this.handleIncrement();
            this.setState({ clicked: this.state.clicked.concat(id) });
        } else {
            this.handleReset();
        }
    };

    handleIncrement = () => {
        const newScore = this.state.currentScore + 1;
        this.setState({
            currentScore: newScore,
            isCorrectOrNot: "You guessed correctly!"
        });
        if (newScore >= this.state.topScore) {
            this.setState({ topScore: newScore });
        }
        if (newScore === birds.length) {
            this.setState({ isCorrectOrNot: "You win!" });
        }
        this.handleShuffle();
    };

    handleReset = () => {
        this.setState({
            currentScore: 0,
            topScore: this.state.topScore,
            isCorrectOrNot: "You guessed incorrectly!",
            clicked: []
        });
        this.handleShuffle();
    };

    handleShuffle = () => {
        let shuffledBirds = randomBirds(birds);
        this.setState({ birds: shuffledBirds });
    };

    title = () => {
        this.setState({})
    }

    render() {
        return (
            <Wrapper>
                <Nav
                    title="Clicky GAME"
                    score={this.state.currentScore}
                    topScore={this.state.topScore}
                    isCorrectOrNot={this.state.isCorrectOrNot}
                />

                <Title>
                    title={this.state.title}
                </Title>

                <Container>
                    <Row>
                        {this.state.birds.map(bird => (
                            <Column size="md-3 sm-6">
                                <BirdCard
                                    key={bird.id}
                                    handleClick={this.handleClick}
                                    handleIncrement={this.handleIncrement}
                                    handleReset={this.handleReset}
                                    handleShuffle={this.handleShuffle}
                                    id={bird.id}
                                    image={bird.image}
                                />
                            </Column>
                        ))}
                    </Row>
                </Container>
            </Wrapper>
        );
    }
}
export default App;