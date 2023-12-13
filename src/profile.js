import React, { Component } from 'react';

class NextPrimeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNumber: 1,
    };
  }

  isPrime(num) {
    for (let i = 2; i < num; i++)
      if (num % i === 0) return false;
    return num > 1;
  }

  handleNextPrime = () => {
    let nextNumber = this.state.currentNumber + 1;
    while (!this.isPrime(nextNumber)) {
      nextNumber++;
    }
    this.setState({
      currentNumber: nextNumber,
    });
  };

  render() {
    return (
      <div>
        <p>Current Prime: {this.state.currentNumber}</p>
        <button onClick={this.handleNextPrime}>Show Next Prime</button>
      </div>
    );
  }
}

export default NextPrimeButton;