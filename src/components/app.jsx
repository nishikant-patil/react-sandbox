import React, { Component } from 'react';
import Counters from './counters';
import NavBar from './navbar';

class App extends Component {
  state = { 
    counters: [
        {id: 1, value: 4, name: "foo"},
        {id: 2, value: 3, name: "boo"},
        {id: 3, value: 3, name: "hoo"},
        {id: 4, value: 2, name: "soo"},
        {id: 5, value: 0, name: "doo"}
    ]
  }

  handleIncrement = (counter) => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value++;
      this.setState({counters});
  }

  handleDecrement = (counter) => {        
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value = counter.value===0 ? 0 : counter.value - 1;
      this.setState({counters});
  }

  handleDelete = (counterId) => {        
      const counters = this.state.counters.filter(c => c.id !== counterId);
      this.setState({counters});
  }

  handleReset = () => {
      const counters = this.state.counters.map(c => {
          c.value = 0;
          return c;
      });

      this.setState({counters});
  }

  render() {
    return (
      <React.Fragment>
        <NavBar 
          totalCounters={this.state.counters.filter(c => c.value!==0).length}
        />
        <Counters 
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          counters={this.state.counters}
        />
      </React.Fragment>
    );
  }
}

export default App;
