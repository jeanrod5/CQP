import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component'

import './App.css';
import { TableList } from './components/table-list/table-list.component';


class App extends Component {

   constructor(props) {
    super(props);

    this.state = {
        systems: []
    };
}

componentDidMount() {
  fetch(
'https://systems-api.herokuapp.com/systems_list') 
      .then((response) => response.json())
      .then((response) => {
          this.setState({
            systems:response
          });
      })
}

render() {
  const { systems } = this.state;
  const goldSystems = systems.filter(systems =>
    systems.quality_status === 'Gold')
    return (
    <div className="App">
    <h1>Connectivity Quality Matrix</h1>
      <CardList systems={goldSystems}/>
      <br/>
      <TableList />
    </div>
    );
  }
}


export default App;