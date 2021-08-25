import React, { Component } from 'react';
import Text from './components/Text/Text';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0
    };
  };

  contador() {
    this.setState(state => ({
      seconds: this.seconds + 1
    }));
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.contador()
    }, 1000);
  };

  render() {
    return (
      <>
        <p>{this.state.seconds}</p>
        <Text text="Bem vindo a Marco!" />
        <Text text="Bem vindo a Thiago!" />
        <Text text="Bem vindo a Pedro!" />
        <Text text="Bem vindo a Fábio!" />
        <Text text="Bem vindo a André!" />
      </>
    )
  };
};